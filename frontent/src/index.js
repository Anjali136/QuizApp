import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {AuthProvider} from "./context/auth-context"
import { QuizProvider } from './context/quiz-context';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
  <QuizProvider>
<App />
</QuizProvider>
  </AuthProvider>  
    </BrowserRouter>
    </React.StrictMode>
);

