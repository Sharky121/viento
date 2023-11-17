import { NextResponse } from "next/server";
import categories from '../../../../data/category.json';

export async function GET(request: Request) {
    return NextResponse.json(categories);
}