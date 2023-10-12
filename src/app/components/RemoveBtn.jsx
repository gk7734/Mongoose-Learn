'use client'

import {HiOutlineTrash} from "react-icons/hi";
import {useRouter} from "next/navigation"

export default function RemoveBtn({ id }) {
    const router = useRouter()
    const removeTopic = async () => {
        const confirmed = confirm("설마 지울 거냐 게이야?")

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