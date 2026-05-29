-- AlterTable
ALTER TABLE `users` ADD COLUMN `email_verified` BOOLEAN NOT NULL DEFAULT false;

-- Coi tài khoản hiện có là đã xác minh
UPDATE `users` SET `email_verified` = true;
