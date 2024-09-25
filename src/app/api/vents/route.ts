import { NextResponse } from "next/server";
import vents from '../../data/vents.json';

export async function GET(request: Request) {
    return NextResponse.json(vents);
}