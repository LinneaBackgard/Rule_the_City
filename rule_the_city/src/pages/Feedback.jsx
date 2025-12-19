export default function Feedback({ text, setOption, questionIndex, setQuestionIndex, setPage }) {
    return (
        <div>
            {text}
            <button onClick={() => {
                if (questionIndex === 1) { 
                    setPage("result")
                }
                setOption(-1);
                setQuestionIndex(questionIndex + 1);
            }}>Nästa</button>
        </div>
    );
}