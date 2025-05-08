import express from 'express';
import env from './configureEnv.js';
import { connectionDatabase } from "../database/sequelize.js"
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(env.PORT, async () => {
    await connectionDatabase();
    console.log(`Server is running in PORT ${env.PORT}, http://localhost:${env.PORT}`);
});

export default app;
