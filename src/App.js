import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [topHeadlines, setTopHeadlines] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  



  useEffect(()=>{

  axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=APIKEYTAKENOUTFORSECURITYRESONS")
        .then(response => {
          console.log("**********")
          console.log(response)
          console.log("**********")
          let filteredResult = response.data.articles.filter(newsObj => newsObj.title.toLowerCase().includes(searchTerm.toLowerCase())) //filter function returns an array
          setTopHeadlines(filteredResult)
         
        })
        .catch(err=>{
          console.log(err)
        })
  }, [searchTerm])
  
  const getNews = ()=>{
    console.log("clicked!")

  //   fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=lkjlkjkl")
  //     .then(response => {
  //       console.log("**********")
  //       console.log(response)
  //       console.log("**********")
  //       return response.json()
  //     })
  //     .then(response =>{
  //       console.log("!!!!!!!!!!!!")
  //       console.log(response)
  //       console.log("!!!!!!!!!!!!")
  //       setTopHeadlines(response.articles)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=dc3063ef0bce4718a88a3ac000ec7448")
  //       .then(response => {
  //         console.log("**********")
  //         console.log(response)
  //         console.log("**********")
  //         setTopHeadlines(response.data.articles)
         
  //       })
  //       .catch(err=>{
  //         console.log(err)
  //       })

      }

  return (
    <div className="App">
      <button onClick ={getNews} >Get some news</button>
      <div className="col-sm-8 mx-auto">
          <div className="form-group r">
            <input type="text" name="" id="" className="form-control" onChange= {e=>setSearchTerm(e.target.value)}/>
          </div>
      </div>
      {topHeadlines.map((newsArticle, idx)=>{
        return <div key = {idx} className="card">
        
        <div className="card-body">
          <h4 className="card-title">{newsArticle.title}</h4>
          <p className="card-text">
           {newsArticle.description}
          </p>
          <a href={newsArticle.url} className="btn btn-primary">Go to this new article</a>
        </div>
      </div>
      
      })}
    </div>
  );
}

export default App;
