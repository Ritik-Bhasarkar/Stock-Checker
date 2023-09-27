import './App.css';
import StockDetailPage from './Pages/StockDetailPage';
import StockOverviewPage from './Pages/StockOverviewPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//cka334hr01qpia5gt9s0cka334hr01qpia5gt9sg

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<StockOverviewPage/>}/>
          <Route path='/detail/:stock' element={<StockDetailPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 