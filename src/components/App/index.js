
import './styles.css';
import '../SearchForm';
import SearchForm from '../SearchForm';
import List from '../List';
import {useEffect, useState} from 'react'

import {getUser} from '../../api'

function App() {
  const APPNAME = "Contact me!";
  const [message, setMessage] = useState("Wellcome")
  const [personL, setPersonL] = useState([])

  useEffect(()=>{
    document.title = `${message}`;
  })

  const controller = (letter) => {
    getUser().then((response)=>{
      setMessage(`loaded ${letter}`)
      const data = response.data;
      setPersonL(data.filter((item)=>{
        return item.name.last[0] === letter;
      })
      )
    })
  }

  return (
    <div className="container">
      <header className="App-header jumbotron">
        <h1>{APPNAME}</h1>
        <h3>{message}</h3>
      </header>
      <div className="buttons">
        <SearchForm getUser={controller}/>
      </div>
      <div class="clearfix"></div>
      <div className="row">
        <List list={personL}/>
      </div>
    </div>
  );
}

export default App;
