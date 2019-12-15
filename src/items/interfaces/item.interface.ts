import { Document } from 'mongoose';

export interface Item extends Document {
  readonly merchant: string;
  readonly createdTime: number;
  readonly updatedTime: number;
  readonly deliveryTime: number;
  readonly hashRatePrice: number;
  readonly hashRatePriceDiscount: number;
  readonly hashRateFinalPrice: number;
  readonly electricPrice: number;
  readonly electricPriceDiscount: number;
  readonly electricFinalPrice: number;
  readonly maintenancePrice: number;
  readonly maintenancePriceDiscount: number;
  readonly maintenanceFinalPrice: number;
  readonly days: number;
  readonly amount: number;
  readonly price: number;
  readonly hashRate: number;
  readonly hashRateUnit: string;
  readonly coin: string;
  readonly pool: string;
  readonly algorithm: string;
  readonly soldPercent: number;
  readonly miningMachine: string;
}
