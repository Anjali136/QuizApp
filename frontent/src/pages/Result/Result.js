import { useQuiz } from "../../context/quiz-context";
import { Navbar } from "../../components/Navbar/Navbar";
import { Fragment } from "react";
import "./Result.css";

export const Result = () => {

    const { score } = useQuiz();

    return (
        <Fragment>
            <Navbar route="result"/>
            <main className="results">
                <h2>Result</h2>
                <div>
                    <span>Your score is 🤩🥳{score}</span>
                </div>
            </main>
            
        </Fragment>
    )
}