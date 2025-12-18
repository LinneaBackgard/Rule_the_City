//import { useState } from 'react'
import questions from '../data/questions.json'
import Options from './Options.jsx'

export default function Question() {

    //const [currentQuestion, setCurrentQuestion] = useState(0);

    return (
        <div>
            {questions.scenario}
        </div>
    )

}

