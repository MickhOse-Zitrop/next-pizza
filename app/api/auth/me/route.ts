import { NextResponse } from "next/server";
import { getUserSession } from "@/shared/lib/get-user-session";
import { prisma } from "@/prisma/prisma-client";

export const dynamic = "force-dynamic";

export async function GET() {
  //   req: any, res: any
  try {
    const user = await getUserSession();
    // const user = await getServerSession(req, res, authOptions)

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    const data = prisma.user.findUnique({
      where: {
        id: Number(user.id), // user.user.id
      },
      select: {
        fullName: true,
        email: true,
        password: false,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error occurred" }, { status: 500 });
  }
}
