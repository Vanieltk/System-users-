import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { ServiceModule } from './modules/services/service.module';



@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      debug: false,
      autoSchemaFile :join(process.cwd(), 'src/schema.gql'),
      sortSchema: true
    }),
  UsersModule,
  TasksModule,
  ServiceModule,
  ],
  providers: [AppService],
})
export class AppModule {}
