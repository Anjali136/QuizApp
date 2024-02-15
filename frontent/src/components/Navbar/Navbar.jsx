import { Link, useNavigate } from "react-router-dom"
import { useQuiz } from "../../context/quiz-context";
import "./Navbar.css"
export const Navbar=({route})=>
{ 
    const {quizDispatch}=useQuiz()
    const token=localStorage.getItem("token");
    const navigate=useNavigate();
    const handleClick=()=>{
        if(token){
            localStorage.clear();
        }
        navigate("/auth/login");
    }
    const goHome=()=>{
        quizDispatch({
            type: "QUIT",
        })
        navigate("/")
    }
    return(
        <header className=" nav-heading">
            <div className="nav-heading-title-icon">
        <h1 className="heading-title">
            Start Quiz
        </h1>
        </div>
        <nav className="nav-navigation">
            <ul className="nav-list-non-bullet">
                <li className="nav-list-item-inline">
                    <Link to="/" className="nav-link" onClick={goHome}>Home</Link>
                </li>
                <li className="nav-list-item-inline">
                    <Link to="/auth/login" className="nav-link" onClick={handleClick}>{token?"Logout":"Login"}</Link>
                </li>
            </ul>
        </nav>
        </header>
    )
}