import { NextResponse } from "next/server";

export async function POST(request) {
	const requestBody = await request.json();
	const responseMessageText = requestBody.messageText;

	return NextResponse.json({ responseMessageText });
}
