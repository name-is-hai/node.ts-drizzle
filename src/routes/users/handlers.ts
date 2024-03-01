import { Request, Response } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../../db';
import { insertUserSchema, NewUser, users } from '../../db/schema'

export async function createUser(
    req: Request,
    res: Response,
): Promise<Response> {
    try {
        const { name } = req.body;

        const newUser = insertUserSchema.parse({ name });

        const results = await db
            .insert(users)
            .values(newUser);

        if (!results || results.length < 1) {
            return res.status(500).send({ message: 'User could not be created.' });
        }

        return res.status(201).json(results);
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: 'Error create user', error: e });
    }
}

export async function getUserPosts(
    req: Request,
    res: Response,
): Promise<Response> {
    try {
        const { id } = req.params;

        const user = await db.query.users.findFirst({
            where: eq(users.id, parseInt(id)),
            with: {
                posts: true,
            },
        });

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: 'Error get user posts', error: e });
    }
}