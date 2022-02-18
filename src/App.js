import React, {useCallback, useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import Demo from "./Demo/Demo";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);

    console.log('APP running')
    
    const toggleParagraphHandler = useCallback(()=>{
        setShowParagraph(previousState => !previousState)
    }, [])
    
    return (
        <div className="app">
            <h1>Hi there!</h1>
            <Demo show={false}/>
            <Button show={toggleParagraphHandler}>Toggle</Button>
        </div>
    );
}

export default App;
