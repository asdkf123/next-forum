import {connectDB} from "@/util/database";

export default async function handler(req,res) {
  if (req.method == 'POST') {
    if (!req.body.title || !req.body.content) {
      res.status(400).json({message : '데이터가 없습니다.'})
      return
    }
    try {
      let db = (await connectDB).db('forum');
      let result = await db.collection('post').insertOne(req.body);
      res.redirect(302,'/list')
    }
    catch (error){
      console.log('error')
    }
  }
}