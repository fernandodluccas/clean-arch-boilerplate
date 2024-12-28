import { IUserRepository } from "../../domain/repositories/user-repository";

export class CreateUser {
    constructor(private userRepository: IUserRepository) { }

    async execute(name: string, email: string) {
        const userExists = await this.userRepository.findByEmail(email);
        if (userExists) throw new Error("User already exists");

        return this.userRepository.create({ name, email });
    }
}