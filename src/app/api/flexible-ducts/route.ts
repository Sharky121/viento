import { NextResponse } from 'next/server';
import flexibleDucts from '@/data/flexible-ducts.json';

export async function GET() {
    return NextResponse.json(flexibleDucts);
} 