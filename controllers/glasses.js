import { ctrlWrapper } from "../utils/index.js";

const getAll = async (req, res) => {
  const data = "some glasses data";
  res.json(data);
};

export default {
  getAll: ctrlWrapper(getAll),
};
