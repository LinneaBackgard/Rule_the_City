import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import characters from "../data/characters.json"

export default function Result({ characterScores }) {
    let maxKey, maxValue = 0;

    for (const [key, value] of Object.entries(characterScores)) {
        if (value > maxValue) {
            maxValue = value;
            maxKey = key;
        }
    }
    return (
        <Container className="py-5 mx-auto" style={{ maxWidth: "1000px" }}>
            <div className="p-4 rounded-2 border bg-body-tertiary mb-4 border border-secondary">
                <h1 className="text-center fs-3 mb-2">Resultat</h1>
            </div>
            <Card className="border border-secondary-subtle">
                <div className="row g-0">
                    <div className="col-md-6">
                        <Card.Img
                            src={import.meta.env.BASE_URL + characters[maxKey].image}
                            alt=""
                            style={{
                                width: "100%",
                                height: "100%",
                                minHeight: "320px",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    <div className="col-md-6">
                        <Card.Body className="p-4 text-start">
                            <Card.Title className="fs-4 mt-3 mb-4 text-center">{maxKey}</Card.Title>
                            <Card.Text className="fs-5" dangerouslySetInnerHTML={{ __html: characters[maxKey].text }}></Card.Text>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </Container>
    )
}