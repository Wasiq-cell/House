import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseAppModule } from './mongoose/mongoose.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [MongooseAppModule, ItemsModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
