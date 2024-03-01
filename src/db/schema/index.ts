import { InferSelectModel, InferInsertModel, relations } from "drizzle-orm";
import { int, mysqlTable, serial, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema } from 'drizzle-zod';

export const posts = mysqlTable("posts", {
    id: serial("id").primaryKey(),
    authorId: int("authorId").notNull(),
    title: varchar("title", { length: 256 }).notNull(),
    content: text("content").notNull(),
    create_at: timestamp("created_at").defaultNow().notNull(),
});

export const postRelations = relations(posts, ({ one }) => ({
    author: one(users, {
        fields: [posts.authorId],
        references: [users.id]
    })
}))

export const insertPostSchema = createInsertSchema(posts);
export type Post = InferSelectModel<typeof posts>;
export type NewPost = InferInsertModel<typeof posts>;

export const users = mysqlTable("users", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
    posts: many(posts)
}))

export const insertUserSchema = createInsertSchema(users);
export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;

