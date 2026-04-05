import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  console.log("nextjs-backend-api-check request", request);
  return Response.json({message: "Hello"})
}