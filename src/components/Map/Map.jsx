import React from 'react'
import GoogleMapReact from 'google-map-react'
import Rating from '@mui/material/Rating'
import MapStyles from './MapStyles'
function Map({setbounds,setcoordinates,coordinates,places,setChildClicked}) {
  return (
    <div className='lg:h-[100%] lg:overflow-hidden h-[100vh] relative'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={{disableDefaultUI: true, zoomControl: true , styles:  MapStyles}}
        onChange={(e) => {
          console.log('map data:' , e)
          setcoordinates({lat:e.center.lat , lng:e.center.lng})
          setbounds({ne:e.marginBounds.ne , sw:e.marginBounds.sw})
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => {
          if (!place.photo) {
            return null; 
          }

          return (<div className='absolute z-1 hover:z-10 transform translate-x-[-50%] translate-y-[-50%]' lat={Number(place.latitude)} lng={Number(place.longitude)} key={i}>
            {
              <div className='bg-white p-2 flex flex-col justify-center w-100 border-black border-2 align-middle text-center	'>
                <h1 className='font-medium mb-1 text-sm	'>{place.name}</h1>
                <img src={place.photo.images.large.url} className='h-[8vh] w-[8vh] m-auto mb-1 border-2	border-black' alt='picture'/>
                <Rating value={Number(place.rating)} readOnly size='small'/>
              </div>
            }
          </div>)
        })}
      </GoogleMapReact>
    </div>
  )
}

export default Map


