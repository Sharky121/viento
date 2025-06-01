import { NextResponse } from 'next/server';
import anemostats from '@/data/anemostats.json';

export async function GET() {
    return NextResponse.json(anemostats);
} 