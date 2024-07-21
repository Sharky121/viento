import { NextResponse } from "next/server";
import vko from '../../../../data/vko.json';

export async function GET(request: Request) {
    return NextResponse.json(vko);
}