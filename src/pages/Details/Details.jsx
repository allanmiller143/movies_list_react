import React from 'react';
import { useParams } from 'react-router-dom';
import DetailHeader from '../../components/DetailHeader/DetailHeader';
import DetailBody from '../../components/DetailBody/DetailBody';

function Details() {
  const { title } = useParams();

  return (
    <div>
      <DetailHeader data = {{title}}/>
      <DetailBody data = {{title}}/>

    </div>
  );
}

export default Details;
