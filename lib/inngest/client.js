import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ 
    id: "ElevAite",
    name: "ElevAite",
    credentials:{
        gemini:{
            api_key: process.env.GEMINI_API_KEY,
        },
    },
});
