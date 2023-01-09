import axios from "axios";
import type { NextApiHandler } from "next";

const BACKEND_URL = process.env.BACKEND_URL;

const login: NextApiHandler = async (request, response) => {
  const { email, password, keepMeLogin } = request.body;
  axios
    .post(`${BACKEND_URL}/users/login`, { email, password, keepMeLogin })
    .then((res) => {
      console.log(res.data);
      response.json(res.data);
    })
    .catch((err) => {
      console.log(err);
      response.json(err);
    });
};

export default login;
