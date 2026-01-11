import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Calculator,
  Globe2,
  Trophy,
  RotateCcw,
  ChevronRight,
  Timer,
  CheckCircle2,
  XCircle,
  Play
} from 'lucide-react';
import { quizData } from './quizData';
import './App.css';

const IconMap = {
  Code2: Code2,
  Calculator: Calculator,
  Globe2: Globe2
};

function App() {
  const [gameState, setGameState] = useState('start'); // start, playing, result
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const startQuiz = () => {
    if (!category || !difficulty) return;

    const rawQuestions = quizData.questions[category][difficulty];
    const shuffledQuestions = shuffleArray(rawQuestions).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));

    setQuestions(shuffledQuestions);
    setCurrentIndex(0);
    setScore(0);
    setGameState('playing');
  };

  const handleOptionSelect = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    if (option === questions[currentIndex].answer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        setGameState('result');
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setGameState('start');
    setCategory(null);
    setDifficulty(null);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {gameState === 'start' && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="screen start-screen"
          >
            <header className="hero">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="logo-icon"
              >
                <Trophy size={64} className="icon-gradient" />
              </motion.div>
              <h1>Dynamix Networks</h1>
              <p className="subtitle">INDIA’S GATEWAY TO TECH TALENT</p>

              <div className="about-section glass-card">
                <p>At Dynamix Networks, we specialize in building bold, human-centered solutions for real-world challenges. Whether it’s crafting standout brand identities, designing independent intern projects, or reimagining how tech talent is discovered and empowered, we believe in originality over convention and clarity over complexity.</p>
                <div className="mission-tag">
                  <strong>Mission:</strong> create systems that scale, stories that stick, and experiences that leave a mark.
                </div>
              </div>
            </header>

            <div className="selection-grid">
              <section className="selection-box">
                <h3>Select Category</h3>
                <div className="options-grid">
                  {quizData.categories.map((cat) => {
                    const Icon = IconMap[cat.icon];
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setCategory(cat.id)}
                        className={`selection-item glass-card ${category === cat.id ? 'active' : ''}`}
                      >
                        <Icon size={24} />
                        <span>{cat.name}</span>
                      </button>
                    );
                  })}
                </div>
              </section>

              <section className="selection-box">
                <h3>Difficulty</h3>
                <div className="difficulty-grid">
                  {quizData.difficulties.map((diff) => (
                    <button
                      key={diff.id}
                      onClick={() => setDifficulty(diff.id)}
                      className={`difficulty-item glass-card ${difficulty === diff.id ? 'active' : ''}`}
                      style={{ '--accent-color': diff.color }}
                    >
                      {diff.name}
                    </button>
                  ))}
                </div>
              </section>
            </div>

            <button
              className="btn-primary start-btn"
              onClick={startQuiz}
              disabled={!category || !difficulty}
            >
              <Play size={20} fill="currentColor" />
              Start Quiz
            </button>
          </motion.div>
        )}

        {gameState === 'playing' && (
          <motion.div
            key="playing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="screen quiz-screen"
          >
            <div className="quiz-header">
              <div className="progress-container">
                <div className="progress-text">
                  <span>Question {currentIndex + 1} of {questions.length}</span>
                  <span>{Math.round(((currentIndex + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="question-card glass-card">
              <h2>{questions[currentIndex].question}</h2>
              <div className="options-list">
                {questions[currentIndex].options.map((option, idx) => {
                  let status = '';
                  if (isAnswered) {
                    if (option === questions[currentIndex].answer) status = 'correct';
                    else if (option === selectedOption) status = 'incorrect';
                  }

                  return (
                    <motion.button
                      key={idx}
                      whileHover={!isAnswered ? { scale: 1.02 } : {}}
                      whileTap={!isAnswered ? { scale: 0.98 } : {}}
                      onClick={() => handleOptionSelect(option)}
                      className={`option-btn glass-card ${status} ${selectedOption === option ? 'selected' : ''}`}
                      disabled={isAnswered}
                    >
                      <span>{option}</span>
                      {status === 'correct' && <CheckCircle2 size={20} className="status-icon" />}
                      {status === 'incorrect' && <XCircle size={20} className="status-icon" />}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {gameState === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="screen result-screen"
          >
            <div className="result-card glass-card">
              <Trophy size={80} className="icon-gradient result-icon" />
              <h1>Quiz Completed!</h1>
              <div className="score-display">
                <div className="score-circle">
                  <span className="final-score">{score}</span>
                  <span className="total-score">/ {questions.length}</span>
                </div>
              </div>
              <p className="feedback">
                {score === questions.length ? "Perfect Score! You're a Genius! 🚀" :
                  score >= questions.length / 2 ? "Great job! Keep it up! ✨" :
                    "Good effort! Try again to improve! 💪"}
              </p>
              <div className="result-actions">
                <button className="btn-primary" onClick={resetQuiz}>
                  <RotateCcw size={20} />
                  Play Again
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
