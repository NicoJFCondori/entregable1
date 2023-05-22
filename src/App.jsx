import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import PhrasesCard from './components/PhrasesCard'
import phrases from './utils/phrases.json'
import randomElementFromArray from './utils/randomElementFromArray'
import AddPhraseInput from './components/AddPhraseInput'


const arrBackground = [1,2,3,4]

function App() {

  const initialPhrase = randomElementFromArray(phrases)
  const initialImage= randomElementFromArray(arrBackground)

  const [phraseRandom, setphraseRandom] = useState(initialPhrase)

  const [backRandom, setbackRandom] = useState(initialImage)

  const objStyle = {
    backgroundImage : `url(/imgs/fondo${backRandom}.jpg)`
  }

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      console.log('Frase agregada:', inputValue);
      setInputValue('');
    }
  };


  return (
      <div style={objStyle} className='app'>
        <h1>GALLETAS DE LA FORTUNA</h1>
        <PhrasesCard phraseRandom= {phraseRandom}/>
        <Button setphraseRandom= {setphraseRandom}
                setbackRandom= {setbackRandom}
                arrBackground= {arrBackground}
        />

        <AddPhraseInput
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onAddClick={handleAddClick}
      />

        <footer><h5>Entregable 1 creado por Nicolás Condorí</h5></footer>

      </div>


  )
}

export default App
