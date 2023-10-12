'use client'

import {HiOutlineTrash} from "react-icons/hi";
import {useRouter} from "next/navigation"

export default function RemoveBtn({ id }) {
    const router = useRouter()
    const removeTopic = async () => {
        const confirmed = confirm("Are you sure you want to remove?")

        if (confirmed) {
            const res = await fetch(`https://mongoose-learn.vercel.app/api/topics?id=${id}`, {
                method: 'DELETE'
            })
            if (res.ok) {
                router.refresh()
            }
        }
    }

    return (
        <div>
            <button onClick={removeTopic} className={`text-red-500`}><HiOutlineTrash size={24}/></button>
        </div>
    );
}