import React, {useState} from 'react';

import JokeList from './components/MoviesList';
import './App.css';

function App() {
    const [jokes, setJokes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    async function FetchMoviesHandler() {
        setIsLoading(true)
        const url = 'https://v2.jokeapi.dev/joke/Any?type=single';
        const response = await fetch(url);
        const data = await response.json();
        setJokes(prevState => [...prevState,
            {
                id: data.id,
                text: data.joke,
                category: data.category
            }
        ])
        setIsLoading(false)
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={FetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {jokes.length > 0 && <JokeList jokes={jokes}/>}
                {jokes.length === 0 && !isLoading && <p>Found no movies...</p>}
                {isLoading && <p>Loading...</p>}
            </section>
        </React.Fragment>
    );
}

export default App;
