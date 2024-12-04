import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {toggleSort} from "../../state/actions/moviesActions"
import {sortSelector} from "../../state/selectors/moviesSelectors";
import { SORT_DEFAULT, SORT_ALPHA } from "../../constants";

import "./ListControls.scss";

function ListControls() {
  const dispatch = useDispatch();
  const sort = useSelector(sortSelector);

  const handleClick = () => {
    const newSort = sort === SORT_DEFAULT ? SORT_ALPHA : SORT_DEFAULT;
    dispatch(toggleSort(newSort));
  }

  return (
    <div>
      <section className="list-controls">
      <span>Sort set to: {sort}</span>
      <button className="list-controls__button" onClick={handleClick}>Sort</button>
    </section>

    <div className="cards-section">
      <img src={} width={}height={} alt={}/>
        <div className="rating"></div>. 
        <p className="description"></p> 
    </div>
    
  )
}

export default ListControls;
