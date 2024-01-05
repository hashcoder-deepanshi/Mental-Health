import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MainPage from './Main Page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/mainpage" element={<MainPage/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
