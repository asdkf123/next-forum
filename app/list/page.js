import {connectDB} from "@/util/database";
import Link from "next/link";
export default async function List() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result)
  return (
    <div className="list-bg">
      {result.map(
        (post, i) => {
          return (
            <Link href={`/detail/${result[i].id}`}>
              <div className="list-item">
                <h4>{result[i].title}</h4>
                <p>{result[i].content}</p>
              </div>
            </Link>
          )
        }
      )}
    </div>
  )
}