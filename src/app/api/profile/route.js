import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic'

export async function GET(request) {
    const wcaid = request.nextUrl.searchParams.get('wcaid')
    const url = `https://raw.githubusercontent.com/robiningelbrecht/wca-rest-api/master/api/persons/${wcaid}.json`
    return NextResponse.json({
        id: 1,
        name: "Jakub Sopel"
    })
}
