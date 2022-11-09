import {User} from '../entities/User';

type publicInfo = Pick <User, 'name' | 'username' | 'bio' | 'photoURL'>

export interface IUsersRepository{

    findByUsername(username: string) : Promise <User | null>;
    findByEmail(email: string) : Promise <User | null>;
    createUser(user: User) : Promise <User | null>;
    getPublicInfo(username: string ) : Promise <publicInfo | null>;
    refreshToken(username: string, newRefreshToken: string) : Promise <User | null>;
    findByRefreshToken(username: string, refreshToken: string) : Promise <User | null>;
    invalidateRefreshToken(username: string, refreshToken: string) : Promise <User | null>;

}