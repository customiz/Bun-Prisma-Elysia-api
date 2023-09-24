import { Elysia, t } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .group("/search", (app) => {
    return app
      .guard({
        query: t.Object({
          q: t.String(),
        }),
      }, (app) =>
        app
          .get("/", ({ query }) => `query: ${query.q}`)
          .get("/movie", ({ query }) => `query: ${query.q}`)
          .get("/tv", ({ query }) => `query: ${query.q}`)
          .get("/person", ({ query }) => `query: ${query.q}`)
          .get("/company", ({ query }) => `query: ${query.q}`)
          .get("/episode", ({ query }) => `query: ${query.q}`)
          .get("/review", ({ query }) => `query: ${query.q}`)
          .get("/award", ({ query }) => `query: ${query.q}`)
      );
  })
  .group("/title/:id", (app) => {
    return app
      .get("/", ({ params }) => `id: ${params.id}`)
      .get("/episodes", ({ params }) => `id: ${params.id}`)
      .get("/cast", ({ params }) => `id: ${params.id}`)
      .get("/reviews", ({ params }) => `id: ${params.id}`)
      .get("/awards", ({ params }) => `id: ${params.id}`);
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
