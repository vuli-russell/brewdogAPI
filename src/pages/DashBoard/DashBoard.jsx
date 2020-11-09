import React, { useState, useEffect } from 'react';
import styles from './DashBoard.module.scss';
import SearchBar from '../../components/SearchBar';
import Gallery from '../../components/Gallery';

const DashBoard = () => {
  const [searchInfo, setSearchInfo] = useState({});
  const [data, setData] = useState(null);
  const [requestStr, setRequestStr] = useState();
  const [resultsPage, setResultsPage] = useState(1);

  const fetchData = (searchInfo) => {
    const searchArr = Object.entries(searchInfo);
    // make request Str from info
    let newRequestStr = Object.keys(searchInfo).length > 0 ? '' : '';
    newRequestStr = (searchArr.length ? searchArr.map(entry => entry[1].length ? `${entry[0]}=${entry[1]}&` : null).join('&') : '').replace(/&$/, '');
    newRequestStr = newRequestStr ? `&${newRequestStr}` : '';
    setRequestStr(newRequestStr);
    const url = `https://api.punkapi.com/v2/beers?page=1&per_page=30${newRequestStr}`;

    fetch(url)
      .then(response => {
        if(response.ok){
          return response.json();
        }else{
          throw new Error(response.json())
        }
      })
      .then(data => {console.log(data);setData(data)})
      .catch(e => {
        alert("Error Fetching Beers Data, try a different search or try again later")
        console.log(e);
      })
    setResultsPage(1);
  };

  useEffect(() => {
    fetchData(searchInfo);
  }, [searchInfo]);

  const loadMoreBeers = () => {
    fetch(`https://api.punkapi.com/v2/beers?page=${resultsPage+1}&per_page=30${requestStr}`)
    .then(r => {
      if(r.ok){
        return r.json()
      }else{
        throw new Error(r.json())
      }
    })
    .then(d => {
      if(d.length){
        setData([...data,...d]);
      }else{
        alert("No more Beers to be Loaded")
      }
    })
    .catch(e => console.log(e))
    setResultsPage(resultsPage+1);
  }

  return (
    <div className={styles.DashBoard}>
      <SearchBar searchInfo={searchInfo} setSearchInfo={setSearchInfo} />
      <Gallery data={data} loadMoreBeers={loadMoreBeers} />
    </div>

  );
};

export default DashBoard;
