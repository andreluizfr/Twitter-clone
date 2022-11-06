import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { User } from './User';

@Entity("Tweets")
export class Tweet{

    @PrimaryColumn()
    public readonly tweetId!: string;
    
    @Column()
    public userId!: string;

    @ManyToOne(() => User)
    @JoinColumn({name: "userId"})
    public user!: User;

    @Column()
    public text!: string;

    @Column(({ nullable: true }))
    public media!: string;

    @Column(({ nullable: true }))
    public parentId!: string;

    @CreateDateColumn()
    public date!: Date;

    constructor(props: Pick <Tweet, 'text' | 'userId'>,
                tweetId?: string,
                parentId?: string){
        
        Object.assign(this, props);

        //objeto sendo criado
        if(!tweetId){
            this.tweetId = uuidv4();
            if (parentId)
                this.parentId = parentId;
        }
        
    }

}