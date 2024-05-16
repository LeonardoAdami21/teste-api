import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Teste Api')
    .setDescription('Tecnologias: Nestjs e Swagger')
    .addBearerAuth()
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);
  await app.listen(process.env.APP_PORT || 3000, () =>
    console.log(
      `App is Running\nDocumentation available on http://localhost:${process.env.APP_PORT}/docs`,
    ),
  );
}
bootstrap();
