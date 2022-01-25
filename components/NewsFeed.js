import {useEffect, useState} from 'react';
import axios from 'axios';
import './NewsFeed.css'

const NewsFeed = () => {

  const [articles,setArticles] = useState([]);

  useEffect(() => {


    const options = {
      method: 'GET',
      url: 'https://crypto-news-live3.p.rapidapi.com/news',
      headers: {
        'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
        'x-rapidapi-key': '31f64af2fdmsh0efa7a13119006bp13f01ajsn0a6be6fce7f7'
      }
    };

    axios.request(options).then( (response) => {
      console.log(response.data)
      setArticles(response.data);
    }).catch( (error) => {
      console.error(error)
    });
    
    console.log(articles)

  }, [])
   
  const firstsevenarticles = articles.slice(0,7);
  return (
        <div className="news__feed">
            <h2 className='headi'>News Feed</h2>
           {firstsevenarticles.map((article,_index) => <div className='news__container'>
            <a href={article.url}><p key={_index}>{article.title}</p></a>
           </div>   )}
        </div>
  )
};

export default NewsFeed;
