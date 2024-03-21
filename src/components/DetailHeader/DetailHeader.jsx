import React from 'react';
import './DetailHeader.css';
import propTypes from 'prop-types';

function DetailHeader({data}) {

  const {title} = data;
  return (
    <div className="detail__header">
      <p className="detail__header__content" >
        Detalhes do filme: {title}
      </p>
      
    </div>
  );
}

export default DetailHeader;

DetailHeader.propTypes = {
  data : propTypes.shape({})
}.isRequired;
