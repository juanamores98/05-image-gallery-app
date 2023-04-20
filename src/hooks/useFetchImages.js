import React, { useEffect, useState, useCallback } from 'react';
export const useFetchImages = () => {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);

  useCallback();

  const peticion = useCallback(async () => {
    const key = 'client_id=2pZ0IO7wBFpUB2hqmDcLCZHKKGfgWV8qfq-KhPwCo0c&';

    let route = `https://api.unsplash.com/photos/?${key}`;

    //console.log(input);
    if (input !== '') {
      route = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}&${key}`;
    }

    setLoading(true);

    //console.log(route);

    const res = await fetch(route);
    const data = await res.json();

    //console.log(data);

    if (data.results) {
      setImages(data.results);
    } else {
      setImages(data);
    }
    setLoading(false);
  }, [input]);

  useEffect(() => {
    peticion();
  }, [peticion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    setInput(text);
  };
  return [images, loading, handleSubmit];
};
