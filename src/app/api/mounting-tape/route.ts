import { NextResponse } from 'next/server';
import mountingTape from '@/data/mounting-tape.json';

export async function GET() {
    return NextResponse.json(mountingTape);
} 