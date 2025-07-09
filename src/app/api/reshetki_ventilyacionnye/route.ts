import { NextResponse } from "next/server";
import data from '../../../data/reshetki_ventilyacionnye.json';

export async function GET(request: Request) {
    return NextResponse.json(data);
}