import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const db = await getDb();
    const result = await db
      .collection("linkClicks")
      .findOneAndUpdate(
        { linkId: params.id },
        { $inc: { count: 1 } },
        { upsert: true, returnDocument: "after" }
      );

    return NextResponse.json({ count: result?.count ?? 1 });
  } catch (error) {
    console.error("클릭 수 집계 실패:", error);
    return NextResponse.json(
      { error: "클릭 수 집계에 실패했습니다" },
      { status: 500 }
    );
  }
}
