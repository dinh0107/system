import 'dotenv/config';
import * as bcrypt from 'bcrypt';

import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

const ADMIN_EMAIL = 'admin@school.edu.vn';
const ADMIN_PASSWORD = 'admin@123';

const SUBJECTS = [
  { name: 'Toán học', slug: 'toan-hoc', description: 'Môn Toán — THPT' },
  { name: 'Ngữ văn', slug: 'ngu-van', description: 'Môn Ngữ văn — THPT' },
  { name: 'Tiếng Anh', slug: 'tieng-anh', description: 'Môn Tiếng Anh — THPT' },
  { name: 'Vật lý', slug: 'vat-ly', description: 'Môn Vật lý — THPT' },
  { name: 'Hóa học', slug: 'hoa-hoc', description: 'Môn Hóa học — THPT' },
  { name: 'Sinh học', slug: 'sinh-hoc', description: 'Môn Sinh học — THPT' },
  { name: 'Lịch sử', slug: 'lich-su', description: 'Môn Lịch sử — THPT' },
  { name: 'Địa lý', slug: 'dia-ly', description: 'Môn Địa lý — THPT' },
  {
    name: 'Giáo dục công dân',
    slug: 'giao-duc-cong-dan',
    description: 'Môn GDCD — THPT',
  },
  { name: 'Tin học', slug: 'tin-hoc', description: 'Môn Tin học — THPT' },
  {
    name: 'Công nghệ',
    slug: 'cong-nghe',
    description: 'Môn Công nghệ — THPT',
  },
  { name: 'Âm nhạc', slug: 'am-nhac', description: 'Môn Âm nhạc — THPT' },
  { name: 'Mỹ thuật', slug: 'my-thuat', description: 'Môn Mỹ thuật — THPT' },
  { name: 'Thể dục', slug: 'the-duc', description: 'Môn Thể dục — THPT' },
];

async function main() {
  for (const subject of SUBJECTS) {
    await prisma.subjects.upsert({
      where: { slug: subject.slug },
      update: {
        name: subject.name,
        description: subject.description,
      },
      create: subject,
    });
  }

  const total = await prisma.subjects.count();
  console.log(`Đã seed ${SUBJECTS.length} môn học (tổng trong DB: ${total})`);

  const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

  await prisma.users.upsert({
    where: { email: ADMIN_EMAIL },
    update: {
      full_name: 'Quản trị viên',
      password: hashedPassword,
      role: 'ADMIN',
      email_verified: true,
      is_active: true,
    },
    create: {
      full_name: 'Quản trị viên',
      email: ADMIN_EMAIL,
      password: hashedPassword,
      role: 'ADMIN',
      email_verified: true,
      is_active: true,
    },
  });

  console.log(`Đã seed tài khoản admin: ${ADMIN_EMAIL}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
