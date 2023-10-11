import RemoveBtn from "@/app/components/RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";

export default function TopicsList() {
    return (
        <div className={`p-4 border border-slate-300 my-3 justify-between gap-5 flex shadow-lg rounded-md`}>
            <div>
                <h2 className={`font-bold text-2xl`}>Topic Title</h2>
                <div>Topic Description</div>
            </div>
            <div className={`flex gap-2 `}>
                <RemoveBtn />
                <Link href={'/editTopic/123'}><HiPencilAlt size={24}/></Link>
            </div>
        </div>
    )
}