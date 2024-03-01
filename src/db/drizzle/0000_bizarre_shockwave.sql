CREATE TABLE `posts` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`authorId` int NOT NULL,
	`title` varchar(256) NOT NULL,
	`content` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `posts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
