import React from "react";
import styles from "./Gallery.module.scss";
import Card from "./Card"

const Gallery = (props) => {

  const {data} = props;

  return (
    <section className={styles.gallery}>
      {data ? data.map(beer => <Card key={beer.id} beer={beer}/>) : <p>Loading Beers</p>}
    </section>
  );
};

export default Gallery;
