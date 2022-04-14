import axios from "axios";

export const api = axios.create({
  baseURL: 'http://alunos.b7web.com.br:501'
})