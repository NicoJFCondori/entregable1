import randomElementFromArray from "../utils/randomElementFromArray"
import phrase from "../utils/phrases.json"


const Button = ({setphraseRandom, setbackRandom, arrBackground}) => {

    const handleRandomPhrase = () => {
        const newRandomPhrase = randomElementFromArray(phrase)
        setphraseRandom(newRandomPhrase)

    
        const newRandomImage = randomElementFromArray(arrBackground)
        setbackRandom(newRandomImage)
    }

        
    return (
    <button onClick = {handleRandomPhrase}> Ver Otro</button>
)
}

export default Button