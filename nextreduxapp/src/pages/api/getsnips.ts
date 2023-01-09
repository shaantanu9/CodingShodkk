import axios from "axios";
import type { NextApiHandler } from "next";

const BACKEND_URL = process.env.BACKEND_URL;

const getsnips: NextApiHandler = async (request, response) => {
  axios
    .get(`${BACKEND_URL}/bookmarks`)
    .then((res) => {
      console.log(res.data);
      response.json(res.data);
    })
    .catch((err) => {
      console.log(err);
      response.json(err);
    });
};

export default getsnips;
