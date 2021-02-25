import axios from "axios";
import env from "../config/";

export default axios.create({
  baseURL: env.hostname,
  headers: { "Content-Type": "application/json" }
});
