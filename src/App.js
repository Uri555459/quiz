import { useState } from 'react';
import './App.css';

function App() {

  const questions = [
    {
      questionText: 'Столица США ?',
      answerOptions: [
        { answerText: 'Бостон', isCorrect: false },
        { answerText: 'Вашингтон', isCorrect: true },
        { answerText: 'Нью-Йорк', isCorrect: false },
        { answerText: 'Лос-Анджелес', isCorrect: false },
      ]
    },
    {
      questionText: 'Что не является языком программирования ?',
      answerOptions: [
        { answerText: 'GO', isCorrect: false },
        { answerText: 'HTML', isCorrect: true },
        { answerText: 'JavaScript', isCorrect: false },
        { answerText: 'Python', isCorrect: false },
      ]
    },
    {
      questionText: 'Какая компания разработала React ?',
      answerOptions: [
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Mail', isCorrect: false },
        { answerText: 'Facebook', isCorrect: true },
        { answerText: 'Google', isCorrect: false },
      ]
    },
    {
      questionText: 'Что не относиться ко вселенной Marvel ?',
      answerOptions: [
        { answerText: 'Бетмэн', isCorrect: true },
        { answerText: 'Халк', isCorrect: false },
        { answerText: 'Железный человек', isCorrect: false },
        { answerText: 'Мстители', isCorrect: false },
      ]
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const answerOptionsHandler = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const resetHandler = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  return (
    <div className="app">
      {
        showScore
          ? <div className='section__score'>
            <div className='section__score-text'>Правильных ответов {score} из {questions.length}</div>
            <button onClick={resetHandler}>Повторить</button>
          </div>

          : <div className='quiz'>
            <div className='question__section'>
              <div className='question__count'>
                <span>Вопрос {currentQuestion + 1} </span> / {questions.length}
              </div>
              <div className='question__text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer__section'>
              {
                questions[currentQuestion].answerOptions.map(answer => (
                  <button
                    key={answer.answerText}
                    onClick={() => answerOptionsHandler(answer.isCorrect)}
                  >{answer.answerText}</button>
                ))
              }
            </div>
          </div>
      }
    </div>
  );
}

export default App;
