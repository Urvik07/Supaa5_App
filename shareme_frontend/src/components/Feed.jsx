// import React,{useState,useEffect} from 'react';
// import { useParams } from 'react-router-dom'; //we use this to find the currently passed in parameters(find out what is the category person is looking at)

// import { client } from '../client';
// import MasonryLayout from './MasonryLayout'; //its a type of layout like instagram feeds
// import { feedQuery,searchQuery } from '../utils/data';
// import Spinner from './Spinner';

// const Feed = () => {
//   const [loading, setLoading] = useState(true);
//   const [pins,setPins]=useState(null);
//   const {categoryId} = useParams(); //use effects everytime category changes
//   useEffect(()=>{
//       if(categoryId){
//         const query = searchQuery(categoryId);
//         client.fetch(query)
//         .then((data)=>{
//           setPins(data);
//           setLoading(false);//stop the loading
//         })

//       }else{
//         client.fetch(feedQuery)
//         .then((data)=>{
//           setPins(data);
//           setLoading(false);
//         });
//       }
//   },[categoryId]) //will see at the start of the application

//   if(loading) return <Spinner message="We are adding new ideas to your feed" />
//   return (
//     <div>{pins && (<MasonryLayout pins={pins}/>
//     )}
//     </div>
//   );
// };

// export default Feed;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [pins, setPins] = useState();
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      setLoading(true);

      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);
  const ideaName = categoryId || 'new';
  if (loading) {
    return (
      <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
    );
  }
if(!pins?.length) return <h2>No pins available!</h2>

  return (
    <div>
      {pins && (
        <MasonryLayout pins={pins} />
      )}
    </div>
  );
};

export default Feed;