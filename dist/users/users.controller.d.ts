import { UsersService } from './users.service';
import { User } from './schemas/users.schema';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(password: string, username: string): Promise<User>;
}
