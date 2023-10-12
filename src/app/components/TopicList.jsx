import RemoveBtn from "@/app/components/RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";

const getTopics = async () => {
    try {
        const res= await fetch('https://mongoose-learn.vercel.app/api/topics', {
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error("Failed to fetch topics")
        }
        return res.json()
    } catch (err) {
        console.log("Error loading topics:", err)
    }
}

export default async function TopicsList() {
    const {topics} = await getTopics()

    return (
        <>
            {topics.map((topic) => (
                <div className={`p-4 border border-slate-300 my-3 justify-between gap-5 flex shadow-lg rounded-md`}>
                    <div>
                        <h2 className={`font-bold text-2xl`}>{topic.title}</h2>
                        <div>{topic.description}</div>
                    </div>
                    <div className={`flex gap-2 `}>
                        <RemoveBtn id={topic._id}/>
                        <Link href={`/editTopic/${topic._id}`}><HiPencilAlt size={24}/></Link>
                    </div>
                </div>
            ))}
        </>
    )
}