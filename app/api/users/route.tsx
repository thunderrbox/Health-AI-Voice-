import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const user = await currentUser();

  try {
    //* Check if user already exists
    const users = await db
      .select()
      .from(usersTable)
      //@ts-ignore
      .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));

    //* If not found, create a new one
    if (users?.length === 0) {
      const result = await db
        .insert(usersTable)
        .values({
          name: user?.fullName ?? "Unknown User",
          email: user?.primaryEmailAddress?.emailAddress ?? "",
          credits: 100,
        })
        .returning({
          id: usersTable.id,
          name: usersTable.name,
          email: usersTable.email,
          credits: usersTable.credits,
        });

      return NextResponse.json({ usersTable: result[0] });
    }

    return NextResponse.json({ usersTable: users[0] });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
