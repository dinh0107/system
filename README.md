# API Hệ thống thi trực tuyến (NestJS)

## Cài đặt

```bash
npm install
```

## Database — MySQL (bắt buộc)

Prisma schema dùng **`provider = "mysql"`**. `DATABASE_URL` **phải** bắt đầu bằng `mysql://` (không dùng `postgresql://` / Neon).

### Cách 1: Docker (khuyến nghị)

```bash
npm run db:up
npm run db:deploy
npm run db:generate
```

`.env` mặc định (khớp `docker-compose.yml`):

```env
DATABASE_URL="mysql://root:matkhau0107@localhost:3306/system"
```

### Cách 2: MySQL cài sẵn trên máy

1. Tạo database: `CREATE DATABASE system CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`
2. Sửa user/mật khẩu trong `.env`:

```env
DATABASE_URL="mysql://root:YOUR_PASSWORD@localhost:3306/system"
```

3. Chạy migration:

```bash
npm run db:deploy
```

## Chạy API

```bash
npm run start:dev
```

Swagger: [http://localhost:3001/api](http://localhost:3001/api) (theo `PORT` trong `.env`)

## Scripts hữu ích

| Script | Mô tả |
|--------|--------|
| `npm run db:up` | Bật MySQL (Docker) |
| `npm run db:down` | Tắt MySQL (Docker) |
| `npm run db:deploy` | Áp migration lên DB |
| `npm run db:migrate` | Tạo/áp migration (dev) |
| `npm run db:push` | Đồng bộ schema không qua migration |
| `npm run db:studio` | Prisma Studio |
| `npm run db:generate` | Generate Prisma client |

## Lỗi thường gặp

- **`DATABASE_URL phải bắt đầu bằng mysql://`** — đang để URL PostgreSQL/Neon; đổi sang MySQL.
- **`Can't reach database server`** — chạy `npm run db:up` hoặc bật MySQL service trên Windows.
- **Access denied** — kiểm tra user/password trong `.env` khớp MySQL thật.
