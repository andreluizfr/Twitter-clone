import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity("Users")
export class User{

    @PrimaryColumn()
    public readonly userId!: string;
    
    @Column()
    public name!: string;

    @Column({ unique: true })
    public username!: string;

    @Column({ unique: true })
    public email!: string;

    @Column()
    public birthDate!: string;

    @Column()
    public password!: string;

    @Column(({ nullable: true }))
    public photoURL!: string;

    @Column(({ nullable: true }))
    public bio!: string;

    @Column(({ type: String, nullable: true }))
    public refreshToken!: string | null;

    @CreateDateColumn()
    public created_at!: Date;


    constructor(props: Pick <User, 'name' | 'username' | 'email' | 'birthDate' | 'password'>, userId?: string){

        Object.assign(this, props);

        if(!userId){
            this.userId = uuidv4();
        }
        
    }

}