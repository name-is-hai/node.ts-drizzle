import { Request, Response } from "express";
import { db } from "../../db";
import { NewPost, Post, insertPostSchema, posts } from "../../db/schema";
import { eq } from "drizzle-orm";

export const getPost = async (
    req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const post = await db.query.posts.findFirst({
            where: eq(posts.id, parseInt(id)),
        });
        if (!post) {
            return res.status(404).send({ message: "Post not found" });
        }
        return res.status(200).json(post);
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error getting post", error: e });
    }
};

export const getPosts = async (
    req: Request, res: Response): Promise<Response> => {
    try {
        const allPosts: Post[] = await db.query.posts.findMany();
        return res.status(200).json(allPosts)
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error get posts", error: e });
    }
};

export const createPost = async (
    req: Request, res: Response): Promise<Response> => {
    try {
        const { title, content, authorId } = req.body;
        const newPost: NewPost = insertPostSchema.parse({ title, content, authorId });
        const results = await db.insert(posts).values(newPost);

        if (!results || results.length < 1) {
            return res.status(500).send({ message: 'Post could not be created.' });
        }
        return res.status(201).json(results);
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error create post", error: e });
    }
}

export const updatePost = async (
    req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const updatePost = insertPostSchema
            .partial({ title: true, content: true })
            .parse({ title, content });

        const results = await db.update(posts).set(updatePost)
            .where(eq(posts.id, parseInt(id)))

        if (!results || results.length < 1) {
            return res.status(500).send({ message: 'Post could not be created.' });
        }
        return res.status(202).json(results)
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error update post", error: e });
    }
}

export const deletePost = async (
    req: Request, res: Response,
): Promise<Response> => {
    try {
        const { id } = req.body;
        const deletedPosts = await db
            .delete(posts)
            .where(eq(posts.id, id))

        if (!deletedPosts || deletedPosts.length < 1) {
            return res.status(404).send({ message: 'Post could not be found.' });
        }
        return res.status(202).json(deletedPosts)
    } catch (e) {
        console.log(e);
        return res.status(500).send({ message: "Error delete post", error: e });
    }
}