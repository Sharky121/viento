import { NextResponse } from 'next/server';
import commercialAxialFans from '@/data/commercial-axial-fans.json';

export async function GET() {
    return NextResponse.json(commercialAxialFans);
}