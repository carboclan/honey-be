import { Field, Float, ID, InputType, Int } from 'type-graphql';

@InputType()
export class ItemInput {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  readonly merchant: string;
  @Field(() => Int)
  readonly createdTime: number;
  @Field(() => Int)
  readonly updatedTime: number;
  @Field(() => Int)
  readonly deliveryTime: number;
  @Field(() => Float)
  readonly hashRatePrice: number;
  @Field(() => Float)
  readonly hashRatePriceDiscount: number;
  @Field(() => Float)
  readonly hashRateFinalPrice: number;
  @Field(() => Float)
  readonly electricPrice: number;
  @Field(() => Float)
  readonly electricPriceDiscount: number;
  @Field(() => Float)
  readonly electricFinalPrice: number;
  @Field(() => Float)
  readonly maintenancePrice: number;
  @Field(() => Float)
  readonly maintenancePriceDiscount: number;
  @Field(() => Float)
  readonly maintenanceFinalPrice: number;
  @Field(() => Int)
  readonly days: number;
  @Field(() => Int)
  readonly amount: number;
  @Field(() => Float)
  readonly price: number;
  @Field(() => Float)
  readonly hashRate: number;
  @Field()
  readonly hashRateUnit: string;
  @Field()
  readonly coin: string;
  @Field()
  readonly pool: string;
  @Field()
  readonly algorithm: string;
  @Field(() => Float)
  readonly soldPercent: number;
  @Field()
  readonly miningMachine: string;
}
