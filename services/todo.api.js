import axios from "axios";

const fetchTodos = async () => {
  let resp = await axios.get("https://dummyjson.com/todos");
  let data = await resp.data;
  return data;
};

export default fetchTodos;
