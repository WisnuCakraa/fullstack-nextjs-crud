import axios from "axios";

const apiUrl = 'http://localhost:3000/api'

export const getNovels = () => {
  return axios.get(`${apiUrl}/post`)
}

export const addNovels = (data) => {
  return axios.post(`${apiUrl}/post/create`, data?.params)
}

export const updateNovels = (data) => {
  return axios.put(`${apiUrl}/post/update/${data.id}`, data?.params)
}

export const deleteNovels = (data) => {
  return axios.delete(`${apiUrl}/post/delete${data}`)
}