import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        document.title = count;
    }, [count]);
    
    useEffect(() => {
        console.log('Creating timer');
        const interval = setInterval(() => {
            setTime(time => time + 1)
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);
  return (
    <div>
        <h1>Time is {time}</h1>
        <p>{count}</p>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            Increment counter
        </button>
    </div>
  )
}

export default UseEffectCounter