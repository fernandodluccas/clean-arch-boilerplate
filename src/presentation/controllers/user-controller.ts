import { Request, Response } from "express";
import { InMemoryUserRepository } from "../../infrastructure/database/in-memory-user-repository";
import { CreateUser } from "../../application/use-cases/create-user";

export class UserController {
    static async create(req: Request, res: Response) {
        const { name, email } = req.body;
        const userRepository = new InMemoryUserRepository();
        const createUser = new CreateUser(userRepository);

        const user = await createUser.execute(name, email);
        res.status(201).json(user);
    }
}