import { openai } from "@/config/OpenAiModel";
import { ignoreListAnonymousStackFramesIfSandwiched } from "next/dist/next-devtools/server/shared";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { notes } = await req.json();
  try {
    const completion = await openai.chat.completions.create({
      model: "google/gemini-2.5-flash-lite",
      messages: [
        {
          role: "system",
          content: "JSON.stringify(AIDoctorAgents)",
        },
        {
          role: "user",
          content:
            "User notes/symptoms:" +
            notes +
            ".Based on the user notes/symptoms, please suggest the doctors list. And respond in JSON format only.",
        },
      ],
    });

    const rawResponse = completion.choices[0].message.content;
    const Resp = (rawResponse || "")
      .trim()
      .replace("```json", "")
      .replace("```", "");
    const jsonResponse = JSON.parse(Resp);
    return NextResponse.json(jsonResponse);
  } catch (e) {
    return NextResponse.json(e);
  }
}
