import { Controller, Query, Get } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { GetRestaurantsInDto } from './dto/get-restaurants-in.dto';
import { GetRestaurantsOutDto } from './dto/get-restaurants-out.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService) {}

  @Get()
  async findByKeys(
    @Query() getRestaurantsInDto: GetRestaurantsInDto
  ): Promise<GetRestaurantsOutDto> {
    return this.restaurantsService.findByKeys(getRestaurantsInDto);
  }
}
