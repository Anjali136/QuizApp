import { useNavigate } from "react-router-dom";
import "./question.css";
import { useQuiz } from "../../context/quiz-context"; 
import { useEffect } from "react";

export const Question = ({quizData}) => {
    console.log(quizData);
    const [currentQuiz] = quizData;
    console.log(currentQuiz);
    const { Title, quiz } = currentQuiz;
    console.log(quiz);
    console.log(Title);
    const navigate = useNavigate();

    const { index, score, quizDispatch, selectedOption } = useQuiz();
    console.log(selectedOption);
    const handleNextQuestionClick = () => {
        localStorage.setItem("index", index + 1);
        if (index !== quiz.length - 1){
            quizDispatch({
                type: "NEXT_QUESTION"
            })
        }else{
            quizDispatch({
                type: "SUBMIT"
            })
            navigate("/result");
        } 
    }

    const handleAnswerClick = (optionId, isCorrect) => {
        console.log("clicked");
            quizDispatch({
                type: "SET_SELECTED_OPTION",
                payload: { optionId, isCorrect }
            })
    }

    const handleQuitClick = () => {
       
        quizDispatch({
            type: "QUIT",
        })
        navigate("/")
    }

    useEffect(() => {
        localStorage.setItem("Option", selectedOption);
        localStorage.setItem("score", score);
    }, [selectedOption])


    return (
        <main className=" qns-main">
            <section className="question-dialog container-flex">
                <h2 className=" qns-title">
                    {Title}
                </h2>
                <div className="qsn_scr">
                    <span>Question: {index + 1}/{quiz?.length}</span>
                    <span className="score">Score: {score}</span>
                </div>
                <div className="question">
                    <span>Q{index + 1}: {quiz[index]?.question}</span>
                </div>
                <div className="options-box">
                    {
                        quiz[index].options.map(({id, Option, isCorrect}) => 
                        <button key={id} className={`button option d-flex justify-center ${selectedOption&&isCorrect? "success":""} ${selectedOption === id && !isCorrect ? "error" : ""}`}
                             onClick={() => handleAnswerClick(id, isCorrect)} disabled={selectedOption}>{Option}</button>
                        )
                    }
                    
                </div>
                <div className="nxt-btn-container">
                    <div className="d-flex gap">
                        <button className="play-btn button btn-secondary cursor" onClick={handleQuitClick}>Stop</button>
                        <button className="nxt-qstn play-now-btn button btn-primary cursor" onClick={handleNextQuestionClick}>
                            {index === quiz.length - 1 ? "Submit": "Next Question"}</button>
                    </div>
                </div>
            </section>
        </main>
    )
}