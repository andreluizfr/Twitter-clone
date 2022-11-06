import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity("Users")
export class User{

    @PrimaryColumn()
    public readonly userId!: string;
    
    @Column()
    public firstName!: string;

    @Column()
    public lastName!: string;

    @Column()
    public username!: string;

    @Column()
    public email!: string;

    @Column()
    public password!: string;

    @Column(({ nullable: true }))
    public photoURL!: string;

    @Column(({ nullable: true }))
    public bio!: string;

    @CreateDateColumn()
    public created_at!: Date;

    //2 parametros, props que é do tipo User mas omitindo id, photoURL e bio, e o parametro id que é opcional e do tipo string
    constructor(props: Pick <User, 'firstName'| 'lastName' | 'username' | 'email' | 'password'>, userId?: string){

        Object.assign(this, props)

        //objeto sendo criado
        if(!userId){
            this.userId = uuidv4();
        }
        
    }

}