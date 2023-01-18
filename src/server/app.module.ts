import {Module} from '@nestjs/common';
import {ViewModule} from './modules/view/view.module';
import {ExampleModule} from './modules/example/example.module';

@Module({
  imports: [ExampleModule, ViewModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
