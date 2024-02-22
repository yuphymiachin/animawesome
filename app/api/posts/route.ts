import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
  request: Request, 
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { 
    description,
    imageSrc,
    category,
   } = body;

   console.log(body);

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const post = await prisma.listing.create({
    data: {
      description,
      imageSrc,
      category,
      userId: currentUser.id
    }
  });

  return NextResponse.json(post);
}