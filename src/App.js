import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddMovie from './components/AddMovie';
import Header from './components/Header';
import DeleteMovie from './components/DeleteMovie';
import SearchMovie from './components/SearchMovie';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='' element={<AddMovie/>}/>
    <Route path='header' element={<Header/>}/>
    <Route path='delete' element={<DeleteMovie/>}/>
    <Route path='search' element={<SearchMovie/>}/>
    <Route path='view' element={<ViewAll/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
