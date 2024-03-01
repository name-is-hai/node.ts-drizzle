import { MySql2Database, drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator"
import { createPool } from "mysql2/promise";

const main = async () => {
    const poolConnection = createPool({
        user: String(process.env.DATABASE_USERNAME),
        password: process.env.DATABASE_PASSWORD,
        host: String(process.env.DATABASE_HOST),
        port: Number(process.env.DATABASE_PORT),
        database: String(process.env.DATABASE_NAME),
    });
    const db: MySql2Database = drizzle(poolConnection);

    console.log('[migrating database] Running migrations ....');
    await migrate(db, { migrationsFolder: 'src/db/drizzle' });

    console.log('[migrate] All migrations have ran, exiting ....');

    await poolConnection.end();
}

main()