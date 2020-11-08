import React, { useState, useEffect } from 'react';
import styles from './DashBoard.module.scss';
import SearchBar from '../../components/SearchBar';
import Gallery from '../../components/Gallery';

const DashBoard = () => {
  const [searchInfo, setSearchInfo] = useState({});
  const [data, setData] = useState(null);

  const fetchData = (searchInfo) => {
    const searchArr = Object.entries(searchInfo);
    // make request Str from info
    let requestStr = Object.keys(searchInfo).length > 0 ? '' : '';
    requestStr = searchArr.length ? searchArr.map(entry => entry[1].length ? `${entry[0]}=${entry[1]}&` : null).join('&') : '';
    requestStr = requestStr.replace(/&$/, '');
    requestStr = requestStr ? `?${requestStr}` : '';

    const url = `https://api.punkapi.com/v2/beers${requestStr}`;

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
  };

  useEffect(() => {
    fetchData(searchInfo);
  }, [searchInfo]);

  return (
    <div className={styles.DashBoard}>
      <SearchBar searchInfo={searchInfo} setSearchInfo={setSearchInfo} />
      <Gallery data={data} />
    </div>

  );
};

export default DashBoard;
