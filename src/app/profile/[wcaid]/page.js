export async function getUser(wcaid) {
    const url = `https://raw.githubusercontent.com/robiningelbrecht/wca-rest-api/master/api/persons/${wcaid}.json`
    const response = await fetch(url, {
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
        <main className="flex min-h-screen flex-col items-left justify-between p-24">
            <div className="size-1/4 flex items-center flex-col">
                <div>Profil: {data.name}</div> 
                <div>WCA ID: {data.id}</div>
                <div>Kraj: {data.country}</div>
                <div>Ilość odbytych zawodów: {data.numberOfCompetitions}</div>
            </div>
        </main>
        
    )
}
