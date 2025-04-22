import { envConfig } from "@/src/config/envConfig";
import { delay } from "@/src/utils/delay";

export const getRecentPosts = async () => {
    const res = await fetch(`${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`)
    const data = await res.json();

    await delay(5000); // Simulate a delay of 5 seconds
    return data;
}