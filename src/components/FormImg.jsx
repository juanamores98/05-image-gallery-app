import React from 'react';
import PropTypes from 'prop-types';

const FormImg = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className='w-100'>
          Buscar: <input className='w-75' type='text' name='inputText' />
          <button className='btn btn-warning mx-2' type='submit'>
            <span class='material-symbols-outlined'>search</span>
          </button>
        </label>
      </form>
    </>
  );
};

FormImg.propTypes = {
  handleSubmit: PropTypes.func,
};

export default FormImg;
