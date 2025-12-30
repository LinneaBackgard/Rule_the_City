import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function Start({ setPage }) {
    return (
        <Container className="py-5 mx-auto" style={{ maxWidth: "1000px" }}>
            <Card className="border border-secondary-subtle p-4">
                <Card.Title className="text-center fs-2 mt-3 mb-4">Välkommen</Card.Title>
                <Card.Text className="fs-5">
                    Alla samhällen formas av beslut.
                    Vissa tas i mötesrum, andra i korridorer, på raster, i vardagen.
                    Det här är ett spel om hur val känns – inte bara hur de låter.
                    Du kommer att ställas inför situationer som på ytan kan verka enkla, men där varje vägval bär på konsekvenser. Det finns inga perfekta svar. Bara olika sätt att ta ansvar.
                </Card.Text>

                <details className="mb-3 mt-3">
                    <summary className="fs-4">Vad är det här?</summary>
                    <Card.Text className="fs-5">
                        Detta är ett interaktivt samhällsspel med vardagsnära scenarier om skola, trygghet, ansvar, makt och tillit.
                        Efter varje val får du feedback som visar hur beslutet kan landa i praktiken.
                    </Card.Text>
                </details>

                <details className="mb-3">
                    <summary className="fs-4">Karaktärer/ledartyper</summary>
                    <Card.Text className="fs-5">
                        I spelet finns flera ledartyper.
                        De är inspirerade av psykologiska arketyper och vanliga samhällsroller – alltså olika sätt människor brukar leda, skydda, kontrollera, lyssna eller driva förändring.
                        Vilken typ som växer fram beror på dina val.
                    </Card.Text>
                </details>

                <details className="mb-3">
                    <summary className="fs-4">Hur funkar det?</summary>
                    <Card.Text className="fs-5">
                        Du gör val i varje scenario och får direkt se hur andra kan uppleva det.
                        Efter flera val får du ett resultat som visar vilken ledartyp du mest liknar – och vad det ofta leder till över tid.
                    </Card.Text>
                </details>

                <Card.Img src={import.meta.env.BASE_URL + "startsida pic.png"} />

                <Card.Text className="text-center fs-4 mt-5">Redo?</Card.Text>
                <Card.Text className="fs-5">
                    Spela som du faktiskt gör – inte som du borde.
                </Card.Text>
                <button className="btn btn-info fs-5" onClick={() => setPage("question")}>Starta spelet</button>
            </Card>
        </Container>
    );
}