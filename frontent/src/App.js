import './App.css';
import {Home} from "./pages/Home/Home";
import { Route,Routes } from 'react-router-dom';
import { QuizCard } from './components/QuizCard/QuizCard';
import { Quiz } from './pages/Quiz/Quiz';
import { Login } from './pages/Login/Login';
import { Question } from './components/questions/question';
import { Result } from './pages/Result/Result';
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/auth/login' element={ <Login /> }/>
      <Route path='/quiz' element={<Quiz />}/>
      <Route path='/result' element={<Result />}/>
      </Routes>   
    </div>
  );
}
export default App;
