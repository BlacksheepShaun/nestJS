import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //AppModule is a root module that is needed to build an app
  await app.listen(3000);
}
bootstrap();
