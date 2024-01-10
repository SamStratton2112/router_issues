import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const GIPHY_URL = 'https://api.giphy.com/v1'
// we do not need to pass anything to food() becuase we can obtain the information from the url
function Food(){
  // useParams takes the value in the url and we destructre it
  const {name} = useParams()
  const [src, setSrc] = useState(null)
  useEffect(()=>{
    async function fetchGif(searchTerm){
      try{
        let res = await axios.get(`${GIPHY_URL}/gifs/search`, {
          params: {
            q: searchTerm,
            api_key: "PW91LGmcQlI4A6CcSONIG9J9l6JAO91B"
          }
        })
        setSrc(res.data.data[0].images.original.url);
      }catch(e){
        console.log(e)
      }}
    fetchGif(name);
  }, [name]);
  let img = src? <img src={src} alt={name} /> : null

  return(
    <div>
      <h1>Here is a gif of {name}</h1>
      {img}
    </div>
  )
}
export default Food;