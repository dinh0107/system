-- DropIndex
DROP INDEX `classes_code_key` ON `classes`;

-- CreateIndex
CREATE UNIQUE INDEX `classes_teacher_id_code_key` ON `classes`(`teacher_id`, `code`);
