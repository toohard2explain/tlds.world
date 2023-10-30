import mysql from 'serverless-mysql';

const database = mysql({
    config: {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : undefined,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD
    }
});

export async function excuteQuery(query: string, values: any[]) {
    try {
        const results = await database.query(query, values);
        await database.end();
        return results;
    } catch (error) {
        return { error };
    }
}