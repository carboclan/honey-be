import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    ItemsModule,
    MongooseModule.forRoot('mongodb://localhost/nestgraphql')
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
