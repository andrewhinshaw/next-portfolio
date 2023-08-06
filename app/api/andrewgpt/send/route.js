import { NextResponse } from "next/server";

import { OpenAI } from "langchain/llms/openai";
import { loadQAStuffChain } from "langchain/chains";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";

const generateResponse = async (messageText) => {
  // Initialize openai llm and langchain stuff chain
  const llmA = new OpenAI({});
  const chainA = loadQAStuffChain(llmA);

  // Load PDF file
  const loader = new PDFLoader("data/Resume.pdf");
  const docs = await loader.load();

  // Submit the documents and question for response
  const resA = await chainA.call({
    input_documents: docs,
    question: messageText,
  });

  return resA;
}

export async function POST(request) {
	const requestBody = await request.json();
  const responseMessage = await generateResponse(requestBody.messageText);
  return NextResponse.json({ responseMessageText: responseMessage.text });
}
