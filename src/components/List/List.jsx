import React, { useState , useEffect, createRef } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Cardholder from "../Cardholder/Cardholder";
import Spinner from '../Spinner/Spinner'
function List({places,isLoading,childClicked,setChildClicked,type,settype,rating,setrating}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  console.log({childClicked})
  


  useEffect(() => {
    // Reset childClicked when places change
    setChildClicked(null);
  }, [places]);
  


  return (
    <div className="flex flex-col m-4 overflow-hidden ">
    
    <h1 className='text-black text-2xl font-semibold m-auto text-center mb-2'>Restaurants, Hotels & Attractions around you</h1>
    
      {isLoading ? (<Spinner />) : (
        <>
        <div className='flex justify-center'>
          <Menu as="div" className="relative inline-block text-center pr-5">
          <div className="text-sm text-black font-bold	 mx-1 ">
      Type :
    </div>
          <div>
            <Menu.Button className="inline-flex border border-black justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              {type}
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-black">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                      onClick={() => settype('restaurants')}
                    >
                      Restaurants
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                      onClick={() => settype('hotels')}
                    >
                      Hotels
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                      onClick={() => settype('attractions')}
                    >
                      Attractions
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
          </Menu>
          <Menu as="div" className="relative inline-block text-center">
            <div>
            <div className="text-sm text-black font-bold	 mx-1 ">
      Rating :
    </div>
              <Menu.Button className="inline-flex justify-center border border-black items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                {rating}
                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute border border-black right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                        onClick={() => setrating(0)}
                      >
                        All
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                        onClick={() => setrating(3)}
                      >
                        Above 3.0
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                        onClick={() => setrating(4)}
                      >
                        Above 4.0
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                        onClick={() => setrating(4.5)}
                      >
                        Above 4.5
                      </a>
                    )}
                  </Menu.Item>
                  
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        
        <div className='border-4 border-indigo-600 w-full overflow-scroll mt-5 h-[70vh]'>
  {places?.length === 0 ? (
    <div className="text-center">
      <img src='https://assets.materialup.com/uploads/b17ea0c7-df76-4ce1-bf82-4a2cf6ae866d/preview.jpg' className='m-auto' alt="No places found"/>
      <p className='text-xl font-semibold m-auto'>No places found</p>
      <p>Try searching for something else</p>
    </div>
  ) : (
    places?.map((place, i) => {
      if (!place.photo || !place.name) {
        return null; 
      }

      return (
        
        <Cardholder place={place} selected={Number(childClicked) === i} key={i} setChildClicked={setChildClicked} />
        
      );
    })
  )}
</div>

      </>
      )}
      </div>
    
  );
}

export default List;
