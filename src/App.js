import React, {useState} from 'react';

import JokeList from './components/MoviesList';
import './App.css';

function App() {
    const [jokes, setJokes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)

    async function FetchMoviesHandler() {
        setIsLoading(true)
        setHasError(null)
        try {
            const url = 'https://v2.jokeapi.dev/joke/Any?type=single';
            const response = await fetch(url);
            const data = await response.json();

            if (data.error) {
                throw new Error('Something went wrong...')
            }

            setJokes(prevState => [...prevState,
                {
                    id: data.id,
                    text: data.joke,
                    category: data.category
                }
            ])
            setIsLoading(false)
        } catch (e) {
            setHasError(e.message)
        }
        setIsLoading(false)
    }

    let content;
    if (jokes.length > 0)
        content = <JokeList jokes={jokes}/>
    if (hasError)
        content = <p>{hasError}</p>
    if (isLoading)
        content = <p>Loading...</p>


    return (
        <React.Fragment>
            <section>
                <button onClick={FetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </React.Fragment>
    );
}

export default App;
