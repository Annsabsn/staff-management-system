import axios from "axios";
import API_URL from "../config/api";

export const fetchHierarchy = async () => {
  const response = await axios.get(
    `${API_URL}/getHierarchy.php`
  );

  return response.data;
};