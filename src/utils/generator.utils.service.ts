import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class GeneratorUtilsService {

    uuid(): string {
        return uuid.v4();
    }
}
