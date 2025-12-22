import { useState } from 'react';
import questions from '../data/questions.json';
import Options from './Options.jsx';
import Feedback from './Feedback.jsx';

export default function Question({ characterScores, setCharacterScores, setPage }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOption, setCurrentOption] = useState(-1);

    return (
        <div>
            <h1>{questions[currentQuestionIndex].category}</h1>
            <h2>{questions[currentQuestionIndex].scenario}</h2>
            {currentOption < 0 ?
                <Options
                    options={questions[currentQuestionIndex].options}
                    setOption={setCurrentOption}
                    characterScores={characterScores}
                    setCharacterScores={setCharacterScores}
                ></Options> :
                <Feedback
                    feedbackText={questions[currentQuestionIndex].options[currentOption].feedback}
                    option={questions[currentQuestionIndex].options[currentOption]}
                    setOption={setCurrentOption}
                    questionIndex={currentQuestionIndex}
                    maxQuestionIndex={questions.length - 1}
                    setQuestionIndex={setCurrentQuestionIndex}
                    setPage={setPage}
                ></Feedback>
            }
        </div>
    );
}