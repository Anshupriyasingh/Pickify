import React,{useState} from 'react'
import Layout from "./../../components/Layout/Layout";
import toast from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import "../../styles/AuthStyles.css";



const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  
  const navigate = useNavigate();
  
  //form function
const handleSubmit = async (e) =>{
e.preventDefault();
try{
 const res = await axios.post(`/api/v1/auth/forgot-password`,
  {email,newPassword,answer}
);
if(res && res.data.success){
  toast.success(res.data && res.data.message);
  
  
  navigate("/login");
}else{
  toast.error(res.data.message)
}
}catch(error){
  console.log(error)
  toast.error("Something went Wrong")
}
};
  return(
    <Layout title= {"Forgot Password"}>
      <div className="form-container">
                <h4>Reset Password</h4>
        <form onSubmit = {handleSubmit}> 
        
            <div className="mb-3">
             <input 
               type="email" 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="form-control" 
               id="exampleInputEmail1" 
               placeholder="Enter Your email"
               required 
             />
            </div>

            <div className="mb-3">
             <input 
               type="text" 
               value={answer}
               onChange={(e) => setAnswer(e.target.value)}
               className="form-control" 
               id="exampleInputEmail1" 
               placeholder="Enter Your favorite sport Name"
               required 
             />
            </div>
        
            <div className="mb-3">
             <input 
              type="password" 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control" 
              id="exampleInputPassword1" 
              placeholder="Enter Your Password" 
              required
             />
            </div>
           
           <button type="submit" 
            className="btn btn-primary">
            Reset
           </button>
        </form>
        
        </div>
    </Layout>
  );
};

export default ForgotPassword;