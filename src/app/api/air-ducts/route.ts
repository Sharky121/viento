import { NextResponse } from 'next/server';
import airDucts from '@/data/air-ducts.json';

export async function GET() {
    return NextResponse.json(airDucts);
} 