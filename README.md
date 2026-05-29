
npm install
```

## Database setup — Neon (recommended)

1. Create a free database at [neon.tech](https://neon.tech) (sign up → **New Project**).
2. In the Neon dashboard, open **Connect** and copy the **connection string** (PostgreSQL).
3. Paste it into `.env`:

```env
DATABASE_URL="postgresql://...@ep-xxx.region.aws.neon.tech/neondb?sslmode=require"
```

4. Apply migrations to Neon (first time):

```bash
npm run db:deploy
npm run db:generate
```

5. Start the API:

```bash
npm run start
```

6. Open Swagger UI: [http://localhost:3000/api](http://localhost:3000/api) (or your `PORT` from `.env`)

You do **not** need Docker or local PostgreSQL when using Neon.

### Other options

| Option | `DATABASE_URL` |
|--------|----------------|
| **Neon** | Connection string from dashboard |
| **Docker** | `npm run db:up` then `postgresql://postgres:postgres@localhost:5432/system` |
| **Local Postgres** | Your host, port, password |

Useful scripts:

| Script | Description |
|--------|-------------|
| `npm run db:deploy` | Apply migrations to Neon / production DB |
| `npm run db:migrate` | Create/apply migrations in dev |
| `npm run db:push` | Sync schema without migrations |
| `npm run db:studio` | Open Prisma Studio |
| `npm run db:generate` | Regenerate Prisma client |
| `npm run db:up` | Start local Postgres (Docker only) |

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
