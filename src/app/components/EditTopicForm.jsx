'use client'

import {useState} from "react";
import {useRouter} from "next/navigation";

export default function EditTopicForm({id, title, description}) {

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`https://mongoose-learn.vercel.app/api/topics/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({newTitle, newDescription})
            });

            if (!res.ok) {
                throw new Error("Failed to update topic")
            }
            router.push("/")
            router.refresh()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={`flex flex-col gap-3`}>
            <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} type={`text`} placeholder="이름" className={`border border-slate-500 px-8 py-2`}/>
            <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} type={`text`} placeholder="게시글" className={`border border-slate-500 px-8 py-2`}/>
            <button className={`bg-green-300 font-bold text-white py-3 px-6 w-fit rounded-lg`}>Update Topic</button>
        </form>
    );
}