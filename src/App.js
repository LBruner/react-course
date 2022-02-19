import React, {useCallback, useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import Demo from "./Demo/Demo";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log('APP running')

    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle)
            setShowParagraph(previousState => !previousState)
    }, [allowToggle])

    const allowToggleHandler = () => {
        setAllowToggle(true);
    }

    return (<div className="app">
        <h1>Hi there!</h1>
        <Demo show={showParagraph}/>
        <Button show={allowToggleHandler}>Allow Toggle</Button>
        <Button show={toggleParagraphHandler}>Toggle</Button>
    </div>);
}

export default App;
