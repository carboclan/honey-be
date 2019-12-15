import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ItemSchema } from './item.schema';
import { ItemsResolver } from './items.resolver';
import { ItemsService } from './items.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  providers: [ItemsResolver, ItemsService]
})
export class ItemsModule {}
