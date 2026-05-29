import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

function parseCorsOrigins(): string[] | boolean {
  const raw = process.env.CORS_ORIGIN?.trim();
  if (!raw || raw === '*') {
    return true;
  }
  return raw.split(',').map((origin) => origin.trim()).filter(Boolean);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const corsOrigins = parseCorsOrigins();
  app.enableCors({
    origin: corsOrigins,
    credentials: corsOrigins !== true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  });

  const config = new DocumentBuilder()
    .setTitle('System API')
    .setDescription('API hệ thống thi trực tuyến — Auth, OTP, đăng nhập')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'JWT từ POST /auth/login',
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  const port = process.env.PORT ?? 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`Application: http://localhost:${port}`);
  console.log(`Swagger UI:  http://localhost:${port}/api`);
}
bootstrap();
