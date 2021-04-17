
import { BrowserRouter } from 'react-router-dom'
import './style/App.css';
import './style/Header.css';
import './style/Main.css';
import './style/Footer.css';
import './style/Slider.css';
import './style/Pokedex.css';
import './style/Favorite.css';
import './style/Search.css';
import './style/PokemonCard.css';
import './style/media.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/Main';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='app_container'> 
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
