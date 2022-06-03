import './App.css';
import SearchBar from './components/SearchBar';
import BookData from './Data.json';
function App() {
  return (
    <div className='App'>
      <h3>Advanced Search</h3>
      <SearchBar placeholder='Enter the book' data={BookData} />
      <SearchBar placeholder='Enter the book' data={BookData} />
      <SearchBar placeholder='Enter the book' data={BookData} />
    </div>
  );
}

export default App;
