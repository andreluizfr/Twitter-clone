import {User} from '../entities/User';

type publicInfo = Pick <User, 'firstName' | 'lastName' | 'username' | 'bio'>

export interface IUsersRepository{

    findByUsername(username: string) : Promise <User | null>;
    findByEmail(email: string) : Promise <User | null>;
    createUser(user: User) : Promise <User | null>;
    getPublicInfo(username: string ) : Promise <publicInfo | null>;


}