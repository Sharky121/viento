import { NextResponse } from 'next/server';
import ventilationValves from '@/data/ventilation-valves.json';

export async function GET() {
    return NextResponse.json(ventilationValves);
} 