import axios from "axios";
import Cookies from "js-cookie";

const BASE = "http://alunos.b7web.com.br:501";

export const api = axios.create({
  baseURL: "http://alunos.b7web.com.br:501",
});

// const fetchFile = async (endpoint: string, body: any) => {
//   // if (!body.token) {
//   //   let token = localStorage.getItem('token')
//   //   if (token) {
//   //     body.append("token", token);
//   //   }
//   // }
//   const res = await fetch(BASE + endpoint, {
//     method: "POST",
//     body,
//   });
//   const json = await res.json();

//   if (json.notaloowed) {
//     window.location.href = "/";
//   }

//   return json;
// };

// const fetchAddFile = {
//   addAds: async (formData: any) => {
//     const json = await fetchFile("/ad/add", formData);

//     return json;
//   },
// };

// export default fetchAddFile;
