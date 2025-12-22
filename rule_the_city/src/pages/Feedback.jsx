export default function Feedback({ feedbackText, option, setOption, questionIndex, maxQuestionIndex, setQuestionIndex, setPage }) {
    return (
        <div>
            <p>{option.button}</p>
            <img src={import.meta.env.BASE_URL + "feedbackimages/" + option.image } />
            <p><b>{feedbackText}</b></p>
            <button onClick={() => {
                if (questionIndex >= maxQuestionIndex) {
                    setPage("result")
                }
                setOption(-1);
                setQuestionIndex(questionIndex + 1);
            }}>Nästa</button>
        </div>
    );
}