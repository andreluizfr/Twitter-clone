import { Tweet } from "../entities/Tweet";
import { User } from "../entities/User";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "Twitter",
    synchronize: true,
    logging: true,
    entities: [User, Tweet],
    subscribers: [],
    migrations: ['src/database/migrations'],
});
