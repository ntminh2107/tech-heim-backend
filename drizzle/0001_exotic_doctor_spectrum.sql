CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(50) NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL
);
--> statement-breakpoint
DROP TABLE "user";