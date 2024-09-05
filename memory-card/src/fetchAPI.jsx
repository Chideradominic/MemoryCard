import './FetchAPI.css'
import React, {useState, useEffect} from "react";


const DataFetchingComponent = ({ score, setScore })=>{
  // State to store fetched data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleUlClick = () => {
    setScore((prevScore) => prevScore + 1);}
  const apiKey = '7csRy0k3yDjnpFupQFUlCEmadvOR1bRx';
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&offset=0&rating=g`);
      const result = await response.json();
      setData(result.data);  // Save the fetched data into state
    } catch (error) {
      setError(error.message);  // Set error if fetch fails
    } finally {
      setLoading(false);  // Stop the loading state
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);  // Empty dependency array to run only on mount

  // Render loading message if still loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render the fetched data once available
  return (
    <div className="Container grid_arranged">
   
      <ul onClick={handleUlClick} style={{cursor:"pointer"}}>
        <div className="eachGif">
        {data.map((gif) => (
          <li key={gif.id} className="gif-item">
            <img src={gif.images.fixed_height.url} alt={gif.title} />
            <p className="gif-title">{gif.title}</p>
          </li> ))}
          </div>
      </ul>
    </div>
  );
}



export default DataFetchingComponent