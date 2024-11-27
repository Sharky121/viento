import { NextResponse } from "next/server";
import vents from './../../../../data/reshetki_ventilyaczionnye.json';

export async function GET(request: Request) {
    return NextResponse.json(vents);
}