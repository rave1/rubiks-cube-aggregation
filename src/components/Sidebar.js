import Link from "next/link"

export default function Sidebar() {
    return (
        <div className="bg-black min-w-64 text-white flex flex-col gap-4 p-6">
            <Link href='/'>Strona główna</Link>
            <Link href='/solves'>Ułożenia</Link>
            <Link href='/profile/2013SOPE01'>Twój profil</Link>
        </div>
    )
}
