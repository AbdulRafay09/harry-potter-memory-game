import { useState } from 'react';
import './App.css';
import imagesCard from './imagesettings/imagesCard'

const hpImages = [
  {"src": "/img/dumble.png"},
  {"src": "/img/granger.png"},
  {"src": "/img/harry.png"},
  {"src": "/img/snape.png"},
  {"src": "/img/sortings.png"},
  {"src": "/img/wolde.png"}
]

function App() {
  const [imagesHP, setImages] = useState([])
  const [turns, setTurns] = useState(0)
  const shuffleImages = () => {
    const shuffledImages = [...hpImages, ...hpImages]
      .sort(() => Math.random() - 0.5)
      .map((imageHP) => ({...imageHP, id: Math.random()}))
    setImages(shuffledImages)
    setTurns(0)
  }

  return (
    <div className="App">
      <h1>Harry Potter Memory Game</h1>
      <button onClick={shuffleImages}>New Game</button>
      
      <div className="image-grid">
        {imagesHP.map(imageHP => (
          <imagesCard key={imageHP.id} imageHP={imageHP}/>
        ))}
      </div>
    </div>
  );
}
export default App;
