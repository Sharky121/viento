import { NextResponse } from "next/server";
import data from '../../../../data/ljuki_revizionnye.json';

export async function GET(request: Request) {
    return NextResponse.json(data);
}