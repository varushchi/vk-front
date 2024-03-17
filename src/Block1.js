import {useState, useRef} from 'react';

const Block1 = () => {
  const [data, setData] = useState({fact: ["press again"]});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const inputRef = useRef(null);
  const [click, setClick] = useState(0)

  const handleClick = async () => {
    setIsLoading(true);
    setClick(prev => prev + 1)

    try {
      const response = await fetch('https://catfact.ninja/fact', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
      inputRef.current.focus()
      inputRef.current.defaultValue = data.fact
      const firstWord = click === 0 ? 0 : data.fact.split(" ")[0].length
      inputRef.current.setSelectionRange(firstWord,firstWord)
    }
  };

  return (
    <div>
      {err && <h2>{err}</h2>}

      <button onClick={handleClick}>Fetch data</button>

      {isLoading && <h4>Loading...</h4>}

      <input ref={inputRef} type='text' size={data.fact.length}/>

    </div>
  );
};

export default Block1;
