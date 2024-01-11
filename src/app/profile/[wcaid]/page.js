export async function getUser(wcaid) {
    const response = await fetch(`http://localhost:3000/api/profile/?wcaid=${wcaid}`, {
        cache: "no-store",
        next: {
            revalidate: 0
        }
    })
    const data = await response.json()
    return data
}

export default async function ProfilePage({params}) {
    const data = await getUser(params.wcaid)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="size-1/4 flex items-center flex-col">
                <div>Profile: {data.name}</div> 
            </div>
        </main>
        
    )
}
