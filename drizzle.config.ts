import 'dotenv/config'
import type { Config } from 'drizzle-kit'

export default {
    schema: './src/db/schema/index.ts',
    out: './src/db/drizzle',
    driver: 'mysql2',
    dbCredentials: {
        user: String(process.env.DATABASE_USERNAME),
        password: process.env.DATABASE_PASSWORD,
        host: String(process.env.DATABASE_HOST),
        port: Number(process.env.DATABASE_PORT),
        database: String(process.env.DATABASE_NAME),
    },
    verbose: true,
    strict: true
} satisfies Config;