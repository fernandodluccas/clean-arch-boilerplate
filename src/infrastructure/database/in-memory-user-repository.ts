import { IUserRepository } from "../../domain/repositories/user-repository";
import { User } from "../../domain/entities/user";

const users: User[] = [];

export class InMemoryUserRepository implements IUserRepository {
    async findByEmail(email: string): Promise<User | null> {
        return users.find(user => user.email === email) || null;
    }

    async create(user: Partial<User>): Promise<User> {
        const newUser = new User(Date.now().toString(), user.name!, user.email!);
        users.push(newUser);
        return newUser;
    }
}