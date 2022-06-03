import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import React, {useState} from 'react';
const SearchBar = ({placeholder, data}) => {
  const [filterData, setfilterData] = useState([]);
  const [wordEntered, setwordEntered] = useState(['']);
  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setwordEntered(searchWord);
    const newFilter = data.filter(value => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === '') {
      setfilterData([]);
    } else {
      setfilterData(newFilter);
    }
  };
  const clearInput = () => {
    setfilterData([]);
    setwordEntered(['']);
  };
  return (
    <div className='search'>
      <div className='searchInput'>
        <input
          type='text'
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <span className='searchIcons'>
          {filterData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id='clearBtn' onClick={clearInput} />
          )}
        </span>
      </div>
      {filterData.length != 0 && (
        <div className='dataResult'>
          {filterData.slice(0, 5).map((value, key) => {
            return (
              <a href={value.link} target='_blank'>
                <p className='search-result-data'>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
