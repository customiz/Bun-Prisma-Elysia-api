import { Elysia } from "elysia";

const app = new Elysia()

  .get("/", () => "Hello Elysia")
  .get("/search",({query}) => `query: ${query.q}`)
  .get("/search/movie",({query}) => `query: ${query.q}`)
  .get("/search/tv",({query}) => `query: ${query.q}`)
  .get("/search/person",({query}) => `query: ${query.q}`)
  .get("/search/company",({query}) => `query: ${query.q}`)
  .get("/search/episode",({query}) => `query: ${query.q}`)
  .get("/search/review",({query}) => `query: ${query.q}`)
  .get("/search/award",({query}) => `query: ${query.q}`)

  .get("/title/:id",({params}) => `id: ${params.id}`)
  .get("/title/:id/episodes",({params}) => `id: ${params.id}`)
  .get("/title/:id/cast",({params}) => `id: ${params.id}`)
  .get("/title/:id/reviews",({params}) => `id: ${params.id}`)
  .get("/title/:id/awards",({params}) => `id: ${params.id}`)



  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
