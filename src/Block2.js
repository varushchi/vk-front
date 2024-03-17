import {useState, useRef} from 'react';

const Block2 = () => {
  const [data, setData] = useState({});
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const [click, setClick] = useState(false)

  const handleClick = async (e) => {
    setIsLoading(true);
    setClick(true)
    e.preventDefault()

    try {
      const response = await fetch('https://api.agify.io/', {
        method: 'POST',
        body: JSON.stringify({
          name: name
        })
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result)

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    
      {err && <h2>{err}</h2>}

      <button onClick={handleClick}>Fetch data</button>

      {isLoading && <h4>Loading...</h4>}

      <input onChange={(e) => setName(e.target.value)}/>

      {click && <div>{data.age}</div>}

    
    </>
  );
};

export default Block2;
