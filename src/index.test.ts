import { describe, expect, test, beforeAll,it } from "bun:test";
import { Elysia, t } from "elysia";

beforeAll(() => {
    // Setup Test
});

describe('Elysia', () => {
    it('return a response', async () => {
        const app = new Elysia()
              .get('/', () => 'hi')

        const response = await app.handle(
            new Request('http://localhost/')
        ).then(res => res.text())

        expect(response).toBe('hi')
    })
})