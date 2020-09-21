import axios from "axios";

const request = axios.create({
  baseURL: "/detail", //配置基础路径
  timeout: 20000, //配置延迟时间
});

export default request;
