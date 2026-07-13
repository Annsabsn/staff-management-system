import axios from "axios";
import API_URL from "../config/api";

export const fetchEmployees = async () => {
  const response = await axios.get(`${API_URL}/getEmployees.php`);
  return response.data;
};

export const addEmployee = async (employee: any) => {
  const response = await axios.post(
    `${API_URL}/addEmployee.php`,
    employee
  );

  return response.data;
};