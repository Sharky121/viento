import { NextResponse } from "next/server";
import roof from '../../../../data/roof.json';

export async function GET(request: Request) {
    return NextResponse.json(roof);
}