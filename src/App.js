import React, {useState} from 'react';

import JokeList from './components/MoviesList';
import './App.css';

function App() {
    const [jokes, setJokes] = useState([])
    const [hasJokes, setHasJokes] = useState(false);

    function FetchMoviesHandler() {
        const url = 'https://v2.jokeapi.dev/joke/Any?type=single';
        fetch(url)
            .then(res => res.json())
            .then(data => setJokes(prevState => [...prevState,
                {
                    id: data.id,
                    text: data.joke,
                    category: data.category
                }
            ]))
        setHasJokes(true)
        console.log(jokes)
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={FetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                <JokeList jokes={jokes}/>
            </section>
        </React.Fragment>
    );
}

export default App;
