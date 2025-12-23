import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function Feedback({
    feedbackText,
    option,
    setOption,
    questionIndex,
    maxQuestionIndex,
    setQuestionIndex,
    setPage,
}) {
    const handleNext = () => {
        if (questionIndex >= maxQuestionIndex) {
            setPage("result");
            return; // viktigt så ni inte ökar index efter result
        }
        setOption(-1);
        setQuestionIndex(questionIndex + 1);
    };

    return (
        <Container className="min-vh-100 d-flex justify-content-center align-items-center">
            <Card style={{ width: "100%", maxWidth: "42rem" }}>
                <Card.Img
                    variant="top"
                    src={import.meta.env.BASE_URL + "feedbackimages/" + option.image}
                    style={{ width: "100%", height: "auto" }}
                />


                <Card.Body className="p-4">
                    {/* om ni vill visa knapptexten också som innan */}
                    {/* <Card.Title className="mb-3">{option.button}</Card.Title> */}

                    <Card.Text className="fs-5">{feedbackText}</Card.Text>

                    <div className="d-flex justify-content-end mt-3">
                        <Button variant="primary" onClick={handleNext}>
                            Nästa
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}




//export default function Feedback({ feedbackText, option, setOption, questionIndex, maxQuestionIndex, setQuestionIndex, setPage }) {
//    return (
//        <div>
//            <p>{option.button}</p>
/*//            <img src={import.meta.env.BASE_URL + "feedbackimages/" + option.image } />*/
//            <p><b>{feedbackText}</b></p>
//            <button onClick={() => {
//                if (questionIndex >= maxQuestionIndex) {
//                    setPage("result")
//                }
//                setOption(-1);
//                setQuestionIndex(questionIndex + 1);
//            }}>Nästa</button>
//        </div>
//    );
//}