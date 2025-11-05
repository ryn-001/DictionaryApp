import {useState} from "react"; 

function App() {
  const [word,setWord] = useState('');
  const [definition,setDefinition] = useState('');
  const [showDefinition,setShowDefinition] = useState(false);

  const data = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]

  const handleSearch = () => {
    const item = data.find((i) => i.word.toLowerCase() === word.toLowerCase());
    if(item) setDefinition(item.meaning);
    else setDefinition('Word not found in the dictionary.');
    setShowDefinition(true);
  }


  return (
    <div className="App">
      <h1>Dictionary App</h1>

      <div className="search-box">
        <input type="text" placeholder='Search for a word...' onChange={(e) => setWord(e.target.value)}></input>
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className='definition'>
        <h4>Definition:</h4>
        <p>{showDefinition ? definition : ''}</p>
      </div>
    </div>
  );
}

export default App;
