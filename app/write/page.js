import {connectDB} from "@/util/database";


export default async function Write() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  let resultLength = result.length;
  const newId = resultLength + 1;

  return (
    <div className="p-20">
      <form action="api/post/new" method="POST">
        <input type="hidden" name="id" value={newId} />
        <input name="title" placeholder="제목"/>
        <input name="content" placeholder="내용"/>
        <button type="submit">전송</button>
      </form>
    </div>
  )
}