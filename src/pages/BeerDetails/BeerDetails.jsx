import React, { useState, useEffect } from "react";
import styles from "./BeerDetails.module.scss";
import Stat from "../../components/Stat/Stat";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BeerDetails = (props) => {

  const beerID = /\d+$/.exec(props.beerID)

  const [beer, setBeer] = useState(null)

  const getData = () => {
    fetch(`https://api.punkapi.com/v2/beers/${beerID}`)
      .then(response => response.json())
      .then(data => setBeer(data[0]))
      .catch(error => console.log(error))
  }

  useEffect(getData, [])


  const toggleHeading = (target) => {
    console.log(target)
    target.style.height = (target.clientHeight ? "0px" : `${target.scrollHeight}px`);
  }

  let detailsJSX = <h1> Loading </h1>;

  if (beer) {
    const { name, tagline, first_brewed, description, image_url, abv, ibu, target_fg, target_og, ebc, srm, ph} = beer;



    detailsJSX = (
      <main className={styles.flexContainer}>
        <img src={image_url} alt={name} />
        <div className={styles.modalInfo}>
          <h1>{name} - {abv}% ABV</h1>
          <h2>{tagline}</h2>
          <h3>First Brewed: {first_brewed}</h3>
          <p>{description}</p>
          <h3 onClick={(e)=>toggleHeading(e.target.nextElementSibling)}>Stats</h3>
          <div id="stats" className={styles.statsContainer}>
            <Stat stats={{abv:abv,ibu:ibu,target_fg:target_fg,target_og:target_og,ebc:ebc,srm:srm,ph:ph}}/>
          </div>
        </div>
      </main>
    );
  }



  return (
    <>
      {detailsJSX}
    </>
  );
};

export default BeerDetails;
