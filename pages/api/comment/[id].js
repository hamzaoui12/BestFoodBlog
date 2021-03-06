import db from "../../../config/db";
import comments from "../../../models/comments";

db();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;
  switch (method) {
    case "GET":
      try {
        const comment = await comments.findById(id);

        if (!comment) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: comment });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const comment = await comments.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!comment) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: comment });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedComment = await comments.deleteOne({ _id: id });

        if (!deletedComment) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
