import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const logoutApi = async () => {
  try {
    const access_token = localStorage.getItem("access_token");

    await axios.post(
      "http://localhost:8000/logout/",
      { access_token },
      { headers: { "Content-Type": "application/json" } },
      { withCredentials: true, Authorization: null }
    );

    localStorage.removeItem("access_token");
  } catch (error) {
    console.error("logout not working", error);
    throw error;
  }
};

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        logoutApi();
        navigate("/login");
    }, [navigate]);
};

export default Logout;