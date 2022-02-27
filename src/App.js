import React, {useCallback, useEffect, useState} from 'react';


import JokeList from './components/JokeList';
import './App.css';
import AddJoke from "./components/AddJoke";

function App() {
    const [jokes, setJokes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    
    const FetchMoviesHandler = useCallback(async() => {
        setIsLoading(true)
        setHasError(null)
        try {
            const url = 'https://http-react-8179f-default-rtdb.firebaseio.com/jokes.json';
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
    }, [])
    
    useEffect(() => {
        FetchMoviesHandler()
    }, [FetchMoviesHandler])

    function addJokeHandler(joke) {
        console.log(joke);
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
                <AddJoke onAddJoke={addJokeHandler}/>
            </section>
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
