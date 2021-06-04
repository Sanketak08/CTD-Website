import React from 'react';

const PersonalDetails = ({ name, icon }) => {
  return (
    <div className='d-flex align-items-center iconWrapper justify-res'>
      <i className={icon}></i>
      <p className='ml-3 mt-2'>{name}</p>
    </div>
  );
};

export default PersonalDetails;
