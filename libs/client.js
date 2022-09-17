import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "yudi-blog-next",
    apiKey: process.env.API_KEY,
});

