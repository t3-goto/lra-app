import { Controller, Query, Get } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { RestaurantsService } from './restaurants.service';
import { GetRestaurantsInDto, GetRestaurantsOutDto } from './dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService) {}

  /**
   * REST: GET /restaurants
   */
  @ApiOkResponse({ description: 'OK.', type: GetRestaurantsOutDto })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  @ApiNotFoundResponse({ description: 'Not Found.' })
  @Get()
  public async findAllByKeys(
    @Query() inDto: GetRestaurantsInDto
  ): Promise<GetRestaurantsOutDto> {
    return this.restaurantsService.findAllByKeys(inDto);
  }
}
