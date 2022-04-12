import { useNavigate } from "react-router-dom";
import qs from 'qs'
import Cookies from "js-cookie";
import axios from "axios";
const baseURL = "http://alunos.b7web.com.br:501";

export const api = axios.create({
  baseURL: 'http://alunos.b7web.com.br:501'
})

// const goLogin = useNavigate();

// interface ApiType {
//   token: string
//   error: string
// }

// const apiFetcGet = async (
//   endpoint: string,
//   body: { token: any }
// ) => {
//   if (!body.token) {
//     const token = Cookies.get("token");

//     if (token) {
//       body.token = token;
//     }
//   }

//   const res = await fetch(`${baseURL}${endpoint}?${qs.stringify(body)}`, {
//   });

//   const json = await res.json();
//   if (json.notallowed) {
//     goLogin("/login");
//   }
// };






// const apiFetchPost = async (
//   endpoint: string,
//   body: { email?: string; password?: string; token?: any }
// ) => {
//   if (!body.token) {
//     const token = Cookies.get("token");

//     if (token) {
//       body.token = token;
//     }
//   }

//   const res = await fetch(`${baseURL}${endpoint}`, {
//     method: "POST",
//     headers: {
//       Accept: "appication/json",
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });

//   const json = await res.json();
//   if (json.notallowed) {
//     goLogin("/login");
//     return
//   }

//   return json
// };

// const OlxApi = {
//   login: async (email: string, password: string): Promise<ApiType> => {
//     const json = await apiFetchPost("user/signin", { email, password });
//     return json
//   },


// };

// export default () => OlxApi