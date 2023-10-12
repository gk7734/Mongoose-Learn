import EditTopicForm from "@/app/components/EditTopicForm";

const getTopicById = async (id) => {
    try {
        const res = await fetch(`https://mongoose-learn.vercel.app/api/topics/${id}`, {
            cache: "no-store"
        });
        if (!res.ok) {
            throw new Error("Failed to fetch topic")
        }
        return res.json()
    } catch (err) {
        console.log(err)
    }
}

export default async function EditTopic({params}) {
    const {id} = params;
    const {topic} = await getTopicById(id);
    const {title, description} = topic
    return <EditTopicForm id={id} title={title} description={description} />
}