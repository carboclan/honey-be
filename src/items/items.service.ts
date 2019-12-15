import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ItemType } from './dto/item-type.dto';
import { Item } from './interfaces/item.interface';
import { ItemInput } from './item-input.input';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private itemModel: Model<Item>) {}

  async create(itemInput: ItemInput): Promise<ItemType> {
    const item = new this.itemModel(itemInput);
    return await item.save();
  }

  async findAll(): Promise<ItemType[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<ItemType> {
    return await this.itemModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<ItemType> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: ItemInput): Promise<ItemType> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
}
