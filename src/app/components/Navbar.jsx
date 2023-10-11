import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={`flex justify-between items-center bg-slate-800 px-8 py-3 rounded-b-xl`}>
            <Link href={"/"} className={`text-white font-bold`}>GK</Link>
            <Link href={"/addTopic"} className={`bg-white font-bold p-2 rounded-md`}>Add Topic</Link>
        </nav>
    )
}