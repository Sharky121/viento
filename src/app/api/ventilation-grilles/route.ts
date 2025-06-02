import { NextResponse } from 'next/server';
import ventilationGrilles from '@/data/ventilation-grilles.json';

export async function GET() {
    return NextResponse.json(ventilationGrilles);
} 