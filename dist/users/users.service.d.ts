import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/users.schema';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(username: string, password: string): Promise<User>;
    getUser(query: object): Promise<User>;
}
