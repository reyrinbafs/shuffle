import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";
// ye hai api ka route if request made this will fetch data from database and reutrn json data

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.find({creator: params.id}).populate("creator");

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts from API", { status: 500 });
  }
};
