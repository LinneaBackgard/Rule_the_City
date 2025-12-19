export default function Options({ options, setOption, characterScores, setCharacterScores }) {
    return (
        <div>
            {options.map((option, index) => (
                <button onClick={() => {
                    setOption(index);
                    let scores = { ...characterScores };
                    for (let character in option.characters) {
                        if (scores[character]) {
                            scores[character] += option.characters[character];
                        } else {
                            scores[character] = option.characters[character];
                        }
                    }
                    setCharacterScores(scores);
                }}>{option.text}</button>
            ))}
        </div>
    );
}