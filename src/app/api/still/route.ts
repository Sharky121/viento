import { NextResponse } from "next/server";
import data from '../../../../data/still.json';

export async function GET(request: Request) {
    return NextResponse.json(data);
}