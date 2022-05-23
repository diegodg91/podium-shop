
import './App.css';
import ItemListContainer from './components/ItemListContainer';

import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
    <Navbar/>
    <ItemListContainer greeting='Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'/>
    </div>
  );
}

export default App;
