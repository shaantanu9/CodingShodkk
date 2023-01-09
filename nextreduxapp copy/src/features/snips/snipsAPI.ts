import axios from "axios";
// const BACKEND_URL = process.env.BACKEND_URL;
const BACKEND_URL = "https://camel-bedclothes.cyclic.app";

export async function getSnips(): Promise<{ data: string }> {
  const response = await axios.get("/api/getsnips");
  return response;
}

// Like this snippet?
export async function likeHandler(id: string, token: string) {
  const BACKEND_URL = "https://camel-bedclothes.cyclic.app";
  console.log(BACKEND_URL + `/bookmarks/${id}/like`, "url");
  return axios
    .patch(BACKEND_URL + `/bookmarks/${id}/like`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.log("error", error);
    });
}

// Add your comment here!
