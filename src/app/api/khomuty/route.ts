import { NextResponse } from "next/server";
import data from '../../../../data/lenta_montazhnaya_khomuty_metallicheskie.json';

export async function GET(request: Request) {
    return NextResponse.json(data);
}