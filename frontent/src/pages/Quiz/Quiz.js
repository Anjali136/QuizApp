import { Fragment,useState,useEffect } from "react"
import { Navbar } from "../../components/Navbar/Navbar"
import axios from "axios";
import { Question } from "../../components/questions/question"
import { useAuth } from "../../context/auth-context";
import { useQuiz } from "../../context/quiz-context";
export const Quiz=()=>{
    const [quiz,setQuiz]=useState([]);
    const {quizCategory}=useQuiz();
    console.log(quizCategory);
    console.log(quiz);
    useEffect(()=>{
        (async()=>{
            try{
                const {data}=await axios.get("http://localhost:3000/quiz",{
                    headers:{authorization:localStorage.getItem("token")}
                });
                console.log(data);
                const filteredData=data.filter(({category})=>category===quizCategory)
                setQuiz(filteredData);
                console.log(filteredData);
            }catch(err){
                console.log(err);
            }
        })()
    },[quizCategory])
 return(
<Fragment>
    <Navbar route="quiz"/>
    {
        quiz && quiz.length>0 && <Question  quizData={quiz}/>
    }
    
</Fragment>   
 )
}