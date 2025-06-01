import { NextResponse } from "next/server";
import data from '../../../data/ploshchadki_torcevye.json';    

export async function GET(request: Request) {
    return NextResponse.json(data);
}