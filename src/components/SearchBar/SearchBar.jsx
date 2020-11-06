import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = (props) => {
  const { searchInfo, setSearchInfo } = props;

  const onChangeHandler = (e) => {
    const newSearchInfo = { ...searchInfo };

    let formattedValue = null;

    switch (e.target.type) {
      case 'text':
        formattedValue = e.target.value.replace(' ', '_');
        break;
      case 'date':
        const date = /(\d{4})-(\d{2})-(\d{2})/.exec(e.target.value);
        formattedValue = `${date[2]}-${date[1]}`;
        break;
      case 'number':
      default:
        formattedValue = e.target.value;
    }
    newSearchInfo[e.target.id] = formattedValue;
    setSearchInfo(newSearchInfo);
  };

  const searchItems = [
    ['beer_name', 'text', 'Name:'],
    ['abv_gt', 'number', 'ABV above:'],
    ['abv_lt', 'number', 'ABV below:'],
    ['ibu_gt', 'number', 'IBU above:'],
    ['ibu_lt', 'number', 'IBU below:'],
    ['ebc_gt', 'number', 'EBC above:'],
    ['ebc_lt', 'number', 'EBC below:'],
    ['yeast', 'text', 'Yeast Name:'],
    ['brewed_before', 'date', 'Brewed Before:'],
    ['brewed_after', 'date', 'Brewed After:'],
    ['hops', 'text', 'Hops Name:'],
    ['malt', 'text', 'Malt Name:'],
    ['food', 'text', 'Food Match:']
  ];

  return (
    <section className={styles.searchBar}>
      {searchItems.map(item =>
        <label className={styles.input} key={item[0]}>
          {item[2]}
          <br />
          <input type={item[1]} id={item[0]} onChange={onChangeHandler} />
        </label>
      )}
    </section>
  );
};

export default SearchBar;
