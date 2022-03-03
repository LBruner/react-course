import { useState, useEffect } from 'react';

const useCounter = () => {
    const BackwardCounter = () => {
        const [counter, setCounter] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000);

            return () => clearInterval(interval);
        }, []);
    };

    export default BackwardCounter
}

export default useCounter;