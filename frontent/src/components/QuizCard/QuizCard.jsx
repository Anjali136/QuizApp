import "./QuizCard.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useQuiz } from "../../context/quiz-context";
export const QuizCard=({quizcategorie})=>{
    const {image,title,description,category}=quizcategorie;
    const token=localStorage.getItem('token');
    const {quizDispatch}=useQuiz()
    const navigate=useNavigate();
    console.log(category);
    const handleStart=()=>{
        if(token){
            quizDispatch({
                type:"CATEGORY",
                payload:category
            })
            navigate("/quiz");
        }else{
            navigate("/auth/login");
        }
    }
    return(
        <div className="container">
            <div className="img-box">
                <img className="img" src={image} alt="card"/>
            </div>
            <div className="details">
                <h3 className="title">{category}</h3>
                <span className="description">{description}</span>
                </div><br/>
                <button className="button cursor" onClick={handleStart}>Start</button>
           
        </div>
    )
}