import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { ItemType } from './dto/item-type.dto';
import { ItemInput } from './item-input.input';
import { ItemsService } from './items.service';

@Resolver()
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Query(() => [ItemType])
  async items(): Promise<ItemType[]> {
    return this.itemsService.findAll();
  }

  @Mutation(() => ItemType)
  async createItem(@Args('input') input: ItemInput): Promise<ItemInput> {
    return this.itemsService.create(input);
  }

  @Mutation(() => ItemType)
  async updateItem(
    @Args('id') id: string,
    @Args('input') input: ItemInput
  ): Promise<ItemInput> {
    return this.itemsService.update(id, input);
  }

  @Mutation(() => ItemType)
  async deleteItem(@Args('id') id: string): Promise<ItemInput> {
    return this.itemsService.delete(id);
  }
}
