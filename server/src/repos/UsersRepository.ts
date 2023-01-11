import { User } from "../entities/User";
import { IUsersRepository } from "./IUsersRepository";
import { AppDataSource } from "../database/postgres";

export class PublicUser {
    public name!: string
    public username!: string
    public bio!: string
    public photoURL!: string
}

export class PrivateUser {
    public name!: string
    public email!: string
    public username!: string
    public birthDate!: string
    public password!: string
    public bio!: string
    public photoURL!: string
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
        return userCreated;
    };

    async getPublicInfo(username: string ) : Promise <PublicUser | null> {
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOneBy({username: username});

        const publicUser = new PublicUser();
        Object.assign(publicUser, user)

        return publicUser;
    }

    async refreshToken(username: string, newRefreshToken: string): Promise <User | null> {
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOneBy({username: username});
        if (user){
            user.refreshToken = newRefreshToken;
            const updatedUser = await userRepository.save(user);
            return updatedUser;
        } else {
            return null;
        }
    }

    async findByRefreshToken(username: string, refreshToken: string) : Promise <User | null>{
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOneBy({username: username, refreshToken: refreshToken});
        if (user)
            return user;
        else
            return null;
    }

    async invalidateRefreshToken(username: string, refreshToken: string) : Promise <User | null>{
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOneBy({username: username, refreshToken: refreshToken}); 
        if (user){
            user.refreshToken = null;
            const updatedUser = await userRepository.save(user);
            return updatedUser;
        } else
            return null;
    }

}