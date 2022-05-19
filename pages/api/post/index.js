import db from "../../../config/db";
import posts from "../../../models/posts";

db();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const posts = await posts.find({});
        res.status(200).json({ sucess: true, data: posts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const post = await posts.create(req.body);
        res.status(201).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
