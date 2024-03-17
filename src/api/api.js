import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.post['Content-Type'] = 'application/json';


export const getquerys = async ({ url, params }) => {
  axios.get(`/${url}`, {
    params
  })
    .then(res => { return res.data.json() })
}

export const postquerys = async ({ url, data }) => {
  axios.post(`/${url}`, data)
    .then(res => {
      console.log(res.data);
      return res.json();
    })
    .catch(err => console.error(err));
}