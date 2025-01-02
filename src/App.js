import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

function App() {

  const [places,setplaces] = useState([]) ;
  const [isLoading,setisLoading] = useState(false) ;
  const [coordinates,setcoordinates] = useState({}) ;
  const [bounds,setbounds] = useState(null) ;
  const [childClicked , setChildClicked] = useState(null) ;
  const [type,settype] = useState('restaurants')
  const [rating,setrating] = useState('all')
  const [filteredPlaces,setFilteredPlaces] = useState([])
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setcoordinates({ lat: latitude, lng: longitude });
    }, (error) => {
      console.error('Error getting geolocation:', error);
    });
  }, []);
  
  useEffect(() => {
    const filteredPlaces = places.filter((place)=> place.rating > rating) ;

    setFilteredPlaces(filteredPlaces)
  }, [rating]);

  useEffect(() => {
    setFilteredPlaces([]) ;
    console.log(coordinates, bounds);
    fetchBlogPosts();
    setrating('all')
  }, [type]);

  useEffect(() => {
    setFilteredPlaces([]) ;
    console.log(coordinates, bounds);
    fetchBlogPosts();
    settype('restaurants')
    setrating('all')
  }, [bounds]);
  
  async function fetchBlogPosts() {
    if (!bounds) {
      console.error('Bounds are null');
      return;
    }
  
    setisLoading(true);
    const url = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary?bl_latitude=${bounds.sw.lat}&tr_latitude=${bounds.ne.lat}&bl_longitude=${bounds.sw.lng}&tr_longitude=${bounds.ne.lng}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const { data } = await response.json();
      console.log(data);
      setplaces(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setisLoading(false);
    }
  }
  

  return (
    <div className="h-screen ">
      <Header setcoordinates={setcoordinates} />
      <div className="grid grid-cols-12 gap-3 h-[89vh]">
        <div className="lg:col-span-4 col-span-12 h-[89vh]">
          <List places={filteredPlaces.length ? filteredPlaces : places}  isLoading={isLoading} childClicked={childClicked} setChildClicked={setChildClicked} type={type} settype={settype} rating={rating} setrating={setrating} />
        </div>
        <div className="lg:col-span-8 col-span-12 h-[89vh]">
          <Map setbounds={setbounds} setcoordinates={setcoordinates} coordinates={coordinates} places={filteredPlaces.length ? filteredPlaces : places} setChildClicked={setChildClicked}/>
        </div>
      </div>
    </div>
  );
}

export default App;
