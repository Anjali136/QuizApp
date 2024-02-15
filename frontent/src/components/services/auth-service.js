import axios from "axios";
export const loginHandler = async (email, password) => {
  try {
    const {data:{token},status}=await axios.post("http://localhost:3000/auth/login", {
      email: email,
      password: password,
    });
  
    if (status === 200) {
      localStorage.setItem("token", token);
      return token;
      
    }
  } catch (err) {
    console.error(err);
  }
};
