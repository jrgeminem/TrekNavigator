import React, { useEffect, useRef } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { Button } from '@material-tailwind/react';
import Rating from '@mui/material/Rating';

function Cardholder({ place, selected, setChildClicked }) {
  const refProp = useRef(null);
  
  useEffect(() => {
    if (selected && refProp.current) {
      refProp.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setChildClicked(refProp.current);
    }
  }, [selected, setChildClicked]);

  return (
    <div className='w-[95%]  m-auto my-2 border-red-500 border-4' ref={refProp}>
      <img src={place.photo.images.large.url} className='h-[30vh] w-[100vh] m-auto mb-2' alt='picture' />
      <h1 className='m-2 font-medium text-xl underline underline-offset-4'>{place.name}</h1>
      <div className='flex justify-between mx-2'>
        <Rating value={Number(place.rating)} readOnly />
        <span>out of {place.num_reviews} reviews</span>
      </div>
      <div className='flex justify-between mx-2'>
        <span>Price</span>
        <span>{place.price_level}</span>
      </div>
      <div className='flex justify-between mx-2'>
        <span>Ranking</span>
        <span>{place.ranking}</span>
      </div>
      <div className='flex flex-wrap'>
        {place?.cuisine?.map(({ name }) => (
          <p className='bg-slate-300 border-dashed rounded-lg p-0.5 m-2' key={name}>
            {name}
          </p>
        ))}
      </div>
      {place?.address && (
        <div className='flex justify-between mx-2 mt-1'>
          <IoLocationSharp className='h-5 w-5' />
          <span>{place.address}</span>
        </div>
      )}
      {place?.phone && (
        <div className='flex justify-between mx-2 mt-1'>
          <FaPhoneAlt className='h-3 w-3 ml-1' />
          <span>{place.phone}</span>
        </div>
      )}
      <div className='flex'>
        <Button variant="outlined" className='bg-black text-white p-1 m-2' onClick={() => { window.open(place.web_url, '_blank') }}>
          Travel Advisor
        </Button>
        <Button variant="outlined" className='bg-black text-white p-1 m-2' onClick={() => { window.open(place.website, '_blank') }}>
          Website
        </Button>
      </div>
    </div>
  );
}

export default Cardholder;
