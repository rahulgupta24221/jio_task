import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { Request, Response, NextFunction } from 'express';

// export function logger(req: Request, res: Response, next: NextFunction) {
//   console.log("this is globle midleware ");
//  next();
// };

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(logger)
  await app.listen(3000);
}
bootstrap();