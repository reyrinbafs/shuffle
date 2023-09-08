import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";
// ye hai api ka route if request made this will fetch data from database and reutrn json data

export const GET = async (request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts from API", { status: 500 });
  }
};
