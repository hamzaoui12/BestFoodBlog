import db from "../../../config/db";
import comments from "../../../models/comments";

db();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const comments = await comments.find({});
        res.status(200).json({ sucess: true, data: comments });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const comment = await comments.create(req.body);
        res.status(201).json({ success: true, data: comment });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
