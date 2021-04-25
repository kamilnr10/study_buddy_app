import React, { useState, useEffect } from 'react';
import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResults } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import axios from 'axios';

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState([]);

  useEffect(() => {
    axios
      .post('/students/search', {
        searchPhrase: inputValue,
      })
      .then(({ data }) => setMatchingStudents(data.students))
      .catch((err) => console.log(err));
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(matchingStudents);
  };

  const findStudents = () => {
    axios
      .get('/students')
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input name="search" id="search" autoComplete="off" value={inputValue} onChange={handleInputChange} list="students" />
        {matchingStudents.length > 0 ? (
          <SearchResults>
            {matchingStudents.map((matchingStudent) => (
              <li key={matchingStudent.id}>{matchingStudent.name}</li>
            ))}
          </SearchResults>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
