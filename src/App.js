import React, {useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);

    console.log('APP running')
    
    const toggleParagraphHandler = ()=>{
        setShowParagraph(previousState => !previousState)
    }
    return (
        <div className="app">
            <h1>Hi there!</h1>
            {showParagraph && <p>New thingy thing</p>}
            <Button show={toggleParagraphHandler}>Toggle</Button>
        </div>
    );
}

export default App;
