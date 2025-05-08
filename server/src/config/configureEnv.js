import dotenv from "dotenv";
import { z } from "zod"

dotenv.config();

const EnvSchema = z.object({
    PORT: z.coerce.number().default(3000),
    POSTGRES_DB: z.string(),
    POSTGRES_USER: z.string(),
    POSTGRES_PASSWORD: z.string(),
    POSTGRES_HOST: z.string()
})

const envSafe = EnvSchema.safeParse(process.env);

if (!envSafe.success) {
    console.error("Erro ao validar variáveis de ambiente:");
    console.error(envSafe.error.format());
    process.exit(1);
  }
  
  const env = envSafe.data;
  
  export default env;