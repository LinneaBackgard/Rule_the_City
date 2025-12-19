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
        <div>
            <h1>Resultat</h1>
            <h2>{maxKey}</h2>
            <img src={import.meta.env.BASE_URL + characters[maxKey].image } />
            <p dangerouslySetInnerHTML={{ __html: characters[maxKey].text }}>
                {/*image*/}
                {/*{characters[maxKey].text}*/}
            </p>{ }
        </div>
    )
}