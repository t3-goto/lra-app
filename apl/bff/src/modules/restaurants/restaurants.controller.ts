import { Controller, Query, Get } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { GetRestaurantsDto } from './dto/get-restaurants.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService) {}

  @Get()
  async findByKeys(
    @Query() getRestaurantsDto: GetRestaurantsDto
  ): Promise<any> {
    return this.restaurantsService.findByKeys(getRestaurantsDto);
  }
}
