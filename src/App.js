import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [topHeadlines, setTopHeadlines] = useState([])

  const getNews = ()=>{
    console.log("clicked!")
    // fetch("https://pokeapi.co/api/v2/pokemon")
    //       .then(response => {
    //         return response.json();
    //     }).then(response => {
    //         console.log(response);
    //     }).catch(err=>{
    //         console.log(err);
    //     });
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=lkjlkjkl")
      .then(response => {
        console.log("**********")
        console.log(response)
        console.log("**********")
        return response.json()
      })
      .then(response =>{
        console.log("!!!!!!!!!!!!")
        console.log(response)
        console.log("!!!!!!!!!!!!")
        setTopHeadlines(response.articles)
      })
      .catch(err => {
        console.log(err)
      })
  }



  return (
    <div className="App">
      <button onClick ={getNews} >Get some news</button>
      {topHeadlines.map((newsArticle, idx)=>{
        return <div class="card">
        
        <div class="card-body">
          <h4 class="card-title">{newsArticle.title}</h4>
          <p class="card-text">
           {newsArticle.description}
          </p>
          <a href={newsArticle.url} class="btn btn-primary">Go to this new article</a>
        </div>
      </div>
      
      })}
    </div>
  );
}

export default App;
