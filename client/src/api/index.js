import axios from "axios";

const url = "http://localhost:5000/employees";

export const fetchEmployees = async () =>
  await axios
    .get(url)
    .then(({ data }) => data)
    .catch((error) => console.log(error));
export const createEmployee = async (newEmployee) =>
  axios
    .post(url, newEmployee)
    .then(({ data }) => data)
    .catch((error) => console.log(error));
export const deleteEmployee = async (id) => await axios.delete(`${url}/${id}`);
export const updateEmployee = async (id, updatedEmployee) => {
  await axios
    .put(`${url}/${id}`, updatedEmployee)
    .then(({ data }) => data)
    .catch((error) => console.log(error));
};
