import axios from "axios";
import API_URL from "../config/api";

export const fetchDashboardStats = async () => {
  const response = await axios.get(
    `${API_URL}/getDashboardStats.php`
  );

  return response.data;
};