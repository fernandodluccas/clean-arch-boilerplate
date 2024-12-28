import { User } from "../entities/user";

export interface IUserRepository {
    findByEmail(email: string): Promise<User | null>;
    create(user: Partial<User>): Promise<User>;
}