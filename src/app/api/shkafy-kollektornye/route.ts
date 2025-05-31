import { NextResponse } from "next/server";
import data from '../../../../data/shkafy_kollektornye.json';

export async function GET(request: Request) {
    return NextResponse.json(data);
}