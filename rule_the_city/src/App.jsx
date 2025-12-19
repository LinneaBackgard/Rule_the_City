import { useState } from 'react';
import './App.css';
import Question from './pages/Question.jsx';
import Result from './pages/Result.jsx';

export default function App() {
    const [characterScores, setCharacterScores] = useState({});
    const [Page, setPage] = useState("question")

    return (
        <div>
            {Page === "question" ?
                <Question
                    characterScores={characterScores}
                    setCharacterScores={setCharacterScores}
                    setPage={setPage}
                ></Question> : null}
            {/*{Object.keys(characterScores).map(key => (<p>{key}: {characterScores[key]}</p>))}: null*/}
            {Page === "result" ?
                <Result
                    characterScores={characterScores}>
                </Result>: null
            }
        </div>
    );
}