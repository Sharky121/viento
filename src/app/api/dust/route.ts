import { NextResponse } from "next/server";
import data from '../../../../data/sistemy_metallicheskikh_vozdukhovodov.json';

export async function GET(request: Request) {
    return NextResponse.json(data);
}