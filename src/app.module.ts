import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeatureOneModule } from './feature-one/feature-one.module';

@Module({
  imports: [FeatureOneModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
