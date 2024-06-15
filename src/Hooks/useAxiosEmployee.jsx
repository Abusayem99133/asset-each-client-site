import axios from "axios";

const axiosEmployee = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosEmployee = () => {
  return axiosEmployee;
};

export default useAxiosEmployee;
