import './App.css';
import { Components } from 'react';
import Header from'./Components/Header/Header';
import Banner from './Components/Banner/Banner';
import "./style/style.css"
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App contaier">
      <Header />
      <Banner/>
      <Shop/>
    </div>
  );
}

export default App;
