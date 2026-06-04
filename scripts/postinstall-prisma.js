/**
 * Tránh fail cả `npm install` trên Windows khi query_engine đang bị BE khóa (EPERM).
 */
const { execSync } = require('child_process');
const path = require('path');

const root = path.join(__dirname, '..');

try {
  execSync('npx prisma generate', {
    stdio: 'inherit',
    cwd: root,
    env: process.env,
  });
} catch {
  console.warn(
    '\n[system] prisma generate bỏ qua (thường do BE đang chạy — file .dll bị khóa).',
  );
  console.warn(
    'Dừng server Nest (Ctrl+C), rồi chạy: npm run db:generate --prefix system\n',
  );
}
