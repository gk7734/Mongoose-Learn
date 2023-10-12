import Link from "next/link";

export default function Navbar() {
    return (
        <nav className={`flex justify-between items-center bg-slate-800 px-8 py-3 rounded-b-xl`}>
            <Link href={"/"} className={`text-white font-bold text-2xl`}><span className={`text-red-500`}>GK</span> Inside</Link>
            <Link href={"/addTopic"} className={`bg-white font-bold p-2 rounded-md`}>게시하기</Link>
        </nav>
    )
}