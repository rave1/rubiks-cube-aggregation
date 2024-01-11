import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic'

export async function GET(request) {
    const wcaid = request.nextUrl.searchParams.get('wcaid')
    const url = `https://raw.githubusercontent.com/robiningelbrecht/wca-rest-api/master/api/persons/${wcaid}.json`
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    if(!res.ok) {
        throw new Error("Failed to fetch data")
    }
    // console.log(res.json())
    return new NextResponse(data).json()
}
