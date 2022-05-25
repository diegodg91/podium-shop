
import './App.css';
import ItemListContainer from './components/ItemListContainer';

import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
    <Navbar/>
    <ItemListContainer greeting='WELCOME!'/>
    </div>
  );
}

export default App;
