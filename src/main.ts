import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter());


  const config = new DocumentBuilder()
    .setTitle('Docs')

    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('Docs', app, document);


  await app.listen(3000);
}
bootstrap();
