import express from 'express';
import env from './configureEnv.js';
import { connectionDatabase } from "../database/sequelize.js"

const app = express();
app.use(express.json());

app.listen(env.PORT, async () => {
    await connectionDatabase();
    console.log(`Server is running in PORT ${env.PORT}, http://localhost:${env.PORT}`);
});

export default app;
