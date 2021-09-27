import './App.css';
import { Row, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import News from './Components/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(()=> {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-27&sortBy=publishedAt&apiKey=412452f969bb4a658dd867bc3397cf1e')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  } ,[]);
  return (
    <div className="App">

{/* Spninner ami kno dekhabo, karon joto khn data load live server a hobe, totokhn er moddhei, eta k bole holo conditional formatting, orthat sorto sapekkhe jare dekhano lagbe tare dekhachhi. 
news.length jodi sotto hoi tahole dekhaba (===0) ar jodi na hoi (mane eta?), r jodi na hoi tahole(mane eta:) tarpor <Row er ongso tuk*/}
     
     { news.length ===0 ? <Spinner animation="border" /> : 
     <Row xs={1} md={3} className="g-4">
      {
        news.map(nw => <News news={nw}></News>)
      }
    </Row>
    }
    </div>
  );
}

export default App;
