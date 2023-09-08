import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

// GET

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts from API", { status: 500 });
  }
};

// patch
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDB();

    const existingprompt = await Prompt.findById(params.id);
    if (!existingprompt)
      return new Response("Prompt not found", { status: 404 });

    existingprompt.prompt = prompt;
    existingprompt.tag = tag;

    await existingprompt.save();
    return new Response(JSON.stringify(existingprompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to Update prompt", { status: 500 });
  }
};

// Detele

export const DELETE = async (request, { params }) => {

    try {
      await connectToDB();
  
      const existingprompt = await Prompt.findById(params.id);
      if (!existingprompt)
        return new Response("Prompt not found", { status: 404 });
  
      await existingprompt.remove();

      return new Response("Prompt is Deteled successfully", { status: 200 });
    } catch (error) {
      return new Response("Failed to Delete prompt", { status: 500 });
    }
  };