import './configurations/config.ts';
import server from './server';
import { AppDataSource } from './database/postgres';

//connectind with postgres
AppDataSource.initialize().then(() => {
    console.log("Connection with DB stablished.");
}).catch((error) => console.log(error));

const PORT = process.env.PORT || "5353";

server.listen(PORT, () => console.log('Express server started on port: ' + PORT));
