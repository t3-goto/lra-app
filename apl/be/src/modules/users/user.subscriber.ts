import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';

import { User } from './user.entity';
import { UtilService } from '../../common/util/util.service';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  listenTo() {
    return User;
  }
  beforeInsert(event: InsertEvent<User>) {
    if (event.entity.password) {
      event.entity.password = UtilService.generateHash(event.entity.password);
    }
    event.entity.createdAt = new Date().toUTCString();
    event.entity.updatedAt = new Date().toUTCString();
  }
  beforeUpdate(event: UpdateEvent<User>) {
    if (event.entity.password !== event.databaseEntity.password) {
      event.entity.password = UtilService.generateHash(event.entity.password);
    }
    event.entity.updatedAt = new Date().toUTCString();
  }
}
