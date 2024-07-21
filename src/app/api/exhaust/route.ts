import { NextResponse } from "next/server";
import data from '../../../../data/exhaust_fan.json';

export async function GET(request: Request) {
    return NextResponse.json(data);
}