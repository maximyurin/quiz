import "./App.css";
import QuizProvider from "./components/QuizProvider";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

function App() {
  return (
    <QuizProvider>
      <Quiz />
      <Result />
    </QuizProvider>
  );
}

export default App;
