import {useEffect, useState} from "react";

const useCounter = (increases = true) =>{
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (increases)
                setCounter((prevCounter) => prevCounter + 1);
            else 
                setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
    return counter;
}

export default useCounter;