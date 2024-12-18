import { NextResponse } from "next/server";
import data from '../../../../data/vozdukhovody_gibkie.json';

export async function GET(request: Request) {
    return NextResponse.json(data);
}