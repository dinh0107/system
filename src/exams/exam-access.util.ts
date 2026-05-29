import { BadRequestException } from '@nestjs/common';

type ExamAccessInput = {
  is_public?: boolean | null;
  class_ids?: string[];
};

export function validateExamAudience(data: ExamAccessInput): void {
  const allowPublic = data.is_public === true;
  const allowClasses = (data.class_ids?.length ?? 0) > 0;

  if (!allowPublic && !allowClasses) {
    throw new BadRequestException(
      'Phải bật is_public (người ngoài) hoặc chọn ít nhất một lớp (class_ids)',
    );
  }
}

export function buildExamAccessSummary(exam: {
  is_public: boolean | null;
  access_code: string | null;
  exam_classes?: Array<{
    classes: { id: string; name: string; code: string | null; school_year: string | null };
  }>;
}) {
  const classes =
    exam.exam_classes?.map((row) => row.classes) ?? [];

  return {
    allow_public: exam.is_public === true,
    allow_class_students: classes.length > 0,
    access_code: exam.access_code,
    classes,
  };
}

export type ExamAccessCheckInput = {
  is_public: boolean | null;
  access_code: string | null;
  status: string | null;
  start_time: Date | null;
  end_time: Date | null;
  exam_classes: Array<{ class_id: string }>;
};

export function canStudentAccessExam(
  exam: ExamAccessCheckInput,
  student: { id: string; classIds: string[] },
  accessCode?: string,
): { allowed: boolean; reason?: string } {
  if (exam.status !== 'PUBLISHED') {
    return { allowed: false, reason: 'Đề thi chưa được công bố' };
  }

  const now = new Date();
  if (exam.start_time && now < exam.start_time) {
    return { allowed: false, reason: 'Đề thi chưa đến thời gian mở' };
  }
  if (exam.end_time && now > exam.end_time) {
    return { allowed: false, reason: 'Đề thi đã hết thời gian làm bài' };
  }

  const inAssignedClass = exam.exam_classes.some((row) =>
    student.classIds.includes(row.class_id),
  );

  if (inAssignedClass) {
    return { allowed: true };
  }

  if (exam.is_public === true) {
    if (exam.access_code) {
      if (accessCode?.trim() === exam.access_code) {
        return { allowed: true };
      }
      return { allowed: false, reason: 'Mã truy cập không đúng' };
    }
    return { allowed: true };
  }

  return {
    allowed: false,
    reason: 'Bạn không thuộc lớp được giao đề hoặc đề không mở cho người ngoài',
  };
}
