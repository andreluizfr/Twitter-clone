import { User } from "../entities/User";
import { IUsersRepository } from "./IUsersRepository";
import { AppDataSource } from "../database/postgres";

class PublicUser {
    public firstName!: string
    public lastName!: string
    public username!: string
    public bio!: string
}

export class UsersRepository implements IUsersRepository{

    async findByUsername(username: string) : Promise <User | null> {
        const userRepository = AppDataSource.getRepository(User)
        const user = await userRepository.findOneBy({username: username});
        return user;
    }

    async findByEmail(email: string) : Promise <User | null> {
        const userRepository = AppDataSource.getRepository(User)
        const user = await userRepository.findOneBy({email: email});
        return user;
    }

    async createUser(user: User) : Promise <User | null> {
        const userRepository = AppDataSource.getRepository(User);
        const userCreated = await userRepository.save(user);
        return userCreated
    };

    async getPublicInfo(username: string ) : Promise <PublicUser | null> {
        const userRepository = AppDataSource.getRepository(User)
        const user = await userRepository.findOneBy({username: username});

        const publicUser = new PublicUser();
        Object.assign(publicUser, user)

        return publicUser;
    }

}