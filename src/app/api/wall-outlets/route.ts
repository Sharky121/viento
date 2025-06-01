import { NextResponse } from 'next/server';
import wallOutlets from '@/data/wall-outlets.json';

export async function GET() {
    return NextResponse.json(wallOutlets);
} 