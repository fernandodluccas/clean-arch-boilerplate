import { InMemoryUserRepository } from "../../infrastructure/database/in-memory-user-repository";
import { CreateUser } from "./create-user";

describe("CreateUser Use Case", () => {
    it("should create a new user", async () => {
        const userRepository = new InMemoryUserRepository();
        const createUser = new CreateUser(userRepository);

        const user = await createUser.execute("John Doe", "john@example.com");

        expect(user).toHaveProperty("id");
        expect(user.name).toBe("John Doe");
        expect(user.email).toBe("john@example.com");
    });

    it("should not allow creating a user with an existing email", async () => {
        const userRepository = new InMemoryUserRepository();
        const createUser = new CreateUser(userRepository);

        await createUser.execute("John Doe", "john@example.com");

        await expect(async () => {
            await createUser.execute("Jane Doe", "john@example.com");
        }).rejects.toThrow("User already exists");
    });
});