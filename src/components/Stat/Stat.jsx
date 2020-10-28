import React from "react";
import styles from "./Stat.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Stat = (props) => {

  const {abv,ibu,fg,og,ebc,srm,ph} = props.stats;
  return (
    <div className={styles.stats}>
      <div>
        abv:{abv}
      </div>
    </div>
  );
};

export default Stat;
