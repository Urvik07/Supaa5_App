// import React from 'react'
// import Masonry from 'react-masonry-css';
// import Pin from './Pin';

// //we have to create an object containing the options for breakpoint

// const breakpointObj={
// default:4,
// 3000:6, //3000 pixel pe 6,2000 pe 5
// 2000:5,
// 1200:3,
// 1000:2,
// 500:1,

// }


// const MasonryLayout = ({pins}) => {
//   return (
//     <Masonry className='flex animate-slide-fwd' breakpointCols={breakpointObj}>
//       {pins?.map((pin)=><Pin key={pin._id} pin={pin} className="w-max"/>)}

//     </Masonry>// we have to loopthroug our pins we will get an individual pin by map,we will pass the id and the pin itself
//   )
// }

// export default MasonryLayout

import React from 'react';
import Masonry from 'react-masonry-css';
import Pin from './Pin';

const breakpointColumnsObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = ({ pins }) => (
  <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointColumnsObj}> 
    {pins?.map((pin) => <Pin key={pin._id} pin={pin} className="w-max" />)}
  </Masonry>//we are mapping over the pins getting individual pins and adding breakpoint
);

export default MasonryLayout;