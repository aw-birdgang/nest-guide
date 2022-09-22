import { NestFactory } from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
      .setTitle('DEV GPEX API Docs')
      .setDescription('DEV GPEX API description')
      .setVersion('1.0.0')
      .addBearerAuth(
          { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
          'JWT',
      )
      .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
