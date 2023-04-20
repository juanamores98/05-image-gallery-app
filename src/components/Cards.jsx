import React, { useEffect, useState, useCallback } from 'react';
import Card from './Card';
import Loading from './Loading';
import FormImg from './FormImg';
import { useFetchImages } from '../hooks/useFetchImages';

const Cards = () => {
  const [images, loading, handleSubmit] = useFetchImages();
  return (
    <>
      <FormImg handleSubmit={handleSubmit} />
      <hr />

      {loading ? <Loading /> : null}

      <div className='row'>
        {images.map((img) => {
          return (
            <div className='col'>
              <Card key={img.id} img={img.urls.regular} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
