import db from "../../../config/db";
import users from "../../../models/users";

db();
export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const users = await users.find({});
        res.status(200).json({ sucess: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const user = await users.create(req.body);
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
