import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Zero Youth 식당</h1>
        <button>장바구니🛒</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="맛있는 음식으로 가득찬 테이블" />
      </div>
    </Fragment>
  );
};

export default Header;