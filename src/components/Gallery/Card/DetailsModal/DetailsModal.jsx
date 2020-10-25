import React from "react";
import styles from "./DetailsModal.module.scss";

const DetailsModal = (props) => {
  
  const {setDetailsShown} = props;
  const {name,tagline,first_brewed,description,image_url,abv,ibu,target_fg,target_og,ebc,srm,ph,attenuation_level} = props.beer;

  return (
    <section className={styles.modal} onClick={e=> {e.stopPropagation()}}>
      <h1>{name}</h1>
      <h2>{tagline}</h2>
      <h3>First Brewed: {first_brewed}</h3>
      <p>{description}</p>
    </section>
  );
};

export default DetailsModal;
