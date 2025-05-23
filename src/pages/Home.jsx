// import React, { useEffect, useState } from 'react';
// import './Home.scss';
// import { useNavigate } from 'react-router-dom';
// import Footer from './Footer';
// import Navbar from '../pages/Navbar';
 
// const slides = [
//   {
//     img: './pictures/poster.jpg',
//     title: 'Wanted: The Lone Bounty',
//     desc: 'Track the most elusive outlaw across dusty canyons and midnight saloons.',
//   },
//   {
//     img: './pictures/poster2.jpg',
//     title: 'Midnight Train Heist',
//     desc: 'A crew of renegades races the clock to rob the Iron Stallion express.',
//   },
//   {
//     img: './pictures/poster3.jpg',
//     title: 'Desert Showdown',
//     desc: 'Two rivals settle a decades-old score under the scorching noon sun.',
//   },
//   {
//     img: './pictures/poster4.jpg',
//     title: 'Gold Rush Gamble',
//     desc: 'Strike it rich—or lose it all—in a boomtown full of secrets.',
//   },
// ];
 
// const sections = [
//   {
//     heading: 'Latest Releases',
//     items: [
//       { id: 1, title: 'Cactus Trail',   img: './pictures/ep1.jpg' },
//       { id: 2, title: 'Rustler’s Moon', img: './pictures/ep2.png' },
//       { id: 3, title: 'Frontier Code',  img: './pictures/ep3.jpg' },
//       { id: 4, title: 'Dust & Iron',    img: './pictures/ep4.jpg' },
//       { id: 1, title: 'Cactus Trail',   img: './pictures/ep7.jpg' },
//       { id: 2, title: 'Rustler’s Moon', img: './pictures/ep8.jpg' },
//       { id: 3, title: 'Frontier Code',  img: './pictures/ep9.jpg' },
//       { id: 4, title: 'Dust & Iron',    img: './pictures/ep10.jpg' },
//       { id: 1, title: 'Cactus Trail',   img: './pictures/ep11.jpg' },
//       { id: 2, title: 'Rustler’s Moon', img: './pictures/ep14.jpg' },
//       { id: 3, title: 'Frontier Code',  img: './pictures/ep15.png' },
//       { id: 4, title: 'Dust & Iron',    img: './pictures/ep16.png' },
//       { id: 1, title: 'Cactus Trail',   img: './pictures/ep18.jpg' },
//       { id: 2, title: 'Rustler’s Moon', img: './pictures/ep19.jpg' },
//       { id: 3, title: 'Frontier Code',  img: './pictures/ep20.jpg' },
//       { id: 4, title: 'Dust & Iron',    img: './pictures/ep21.jpg' }
//     ],
//   },
//   {
//     heading: 'Trending Now',
//     items: [
//      { id: 4, title: 'Dust & Iron',    img: './pictures/ep21.jpg' },
//       { id: 1, title: 'Cactus Trail',   img: './pictures/ep23.jpg' },
//       { id: 2, title: 'Rustler’s Moon', img: './pictures/ep24.jpg' },
//       { id: 3, title: 'Frontier Code',  img: './pictures/ep27.jpg' },
//       { id: 1, title: 'Cactus Trail',   img: './pictures/ep29.png' },
//       { id: 2, title: 'Rustler’s Moon', img: './pictures/ep30.png' },
//       { id: 3, title: 'Frontier Code',  img: './pictures/ep3.jpg' },
//       { id: 4, title: 'Dust & Iron',    img: './pictures/ep4.jpg' },
//       { id: 1, title: 'Cactus Trail',   img: './pictures/ep7.jpg' },
//       { id: 2, title: 'Rustler’s Moon', img: './pictures/ep8.jpg' },
//       { id: 3, title: 'Frontier Code',  img: './pictures/ep9.jpg' },
//       { id: 4, title: 'Dust & Iron',    img: './pictures/ep10.jpg' },
//       { id: 1, title: 'Cactus Trail',   img: './pictures/ep1.jpg' },
//       { id: 2, title: 'Rustler’s Moon', img: './pictures/ep2.png' },
//       { id: 3, title: 'Frontier Code',  img: './pictures/ep3.jpg' },
//     ],
//   },
//   {
//     heading: 'Top-Rated Gems',
//     items: [
//      { id: 4, title: 'Dust & Iron',    img: './pictures/ep4.jpg' },
//       { id: 1, title: 'Cactus Trail',   img: './pictures/ep7.jpg' },
//       { id: 2, title: 'Rustler’s Moon', img: './pictures/ep8.jpg' },
//       { id: 3, title: 'Frontier Code',  img: './pictures/ep9.jpg' },
//       { id: 1, title: 'Cactus Trail',   img: './pictures/ep1.jpg' },
//       { id: 2, title: 'Rustler’s Moon', img: './pictures/ep2.png' },
//       { id: 3, title: 'Frontier Code',  img: './pictures/ep3.jpg' },
//       { id: 4, title: 'Dust & Iron',    img: './pictures/ep4.jpg' },
//       { id: 1, title: 'Cactus Trail',   img: './pictures/ep7.jpg' },
//       { id: 2, title: 'Rustler’s Moon', img: './pictures/ep8.jpg' },
//       { id: 3, title: 'Frontier Code',  img: './pictures/ep9.jpg' },
//       { id: 4, title: 'Dust & Iron',    img: './pictures/ep10.jpg' },
//       { id: 1, title: 'Cactus Trail',   img: './pictures/ep1.jpg' },
//       { id: 2, title: 'Rustler’s Moon', img: './pictures/ep2.png' },
//       { id: 3, title: 'Frontier Code',  img: './pictures/ep3.jpg' },
//     ],
//   },
//   {
//     heading: 'Western Classics',
//     items: [
     
//        { id: 4, title: 'Dust & Iron',    img: './pictures/ep16.png' },
//       { id: 1, title: 'Cactus Trail',   img: './pictures/ep18.jpg' },
//       { id: 2, title: 'Rustler’s Moon', img: './pictures/ep19.jpg' },
//       { id: 3, title: 'Frontier Code',  img: './pictures/ep20.jpg' },
//       { id: 4, title: 'Dust & Iron',    img: './pictures/ep21.jpg' },
//       { id: 4, title: 'Dust & Iron',    img: './pictures/ep4.jpg' },
//       { id: 1, title: 'Cactus Trail',   img: './pictures/ep7.jpg' },
//       { id: 2, title: 'Rustler’s Moon', img: './pictures/ep8.jpg' },
//       { id: 3, title: 'Frontier Code',  img: './pictures/ep9.jpg' },
//       { id: 1, title: 'Cactus Trail',   img: './pictures/ep1.jpg' },
//       { id: 2, title: 'Rustler’s Moon', img: './pictures/ep2.png' },
//        { id: 1, title: 'Shane',         img: './pictures/poster.jpg' },
//       { id: 2, title: 'High Noon',     img: './pictures/poster2.jpg' },
//       { id: 3, title: 'The Searchers', img: './pictures/poster3.jpg' },
//       { id: 4, title: 'Stagecoach',    img: './pictures/poster4.jpg' },
//     ],
//   },
// ];
 
// export default function Home() {
//   const [slideIdx, setSlideIdx] = useState(0);
 
//   useEffect(() => {
//     const id = setInterval(() => setSlideIdx(p => (p + 1) % slides.length), 5000);
//     return () => clearInterval(id);
//   }, []);
 
//   const { img, title, desc } = slides[slideIdx];
//   const navigate = useNavigate()
//   return (
//     <div>
//         <Navbar />

//     <div>
//       <div className="poster">
//         <div className="poster1">
//           <img src={img} alt={title}  />
//           <div className="overlay" />
//         </div>
 
//         <div className="postercontent">
//           <h1>{title}</h1>
//           <p>{desc}</p>
//           <button>Watch Now</button>
//           <button>+ Save Later</button>
//         </div>
//       </div>
 
//       {sections.map(({ heading, items }) => (
//         <section key={heading} className="strip">
//           <div className="strip__header">
//             <h2>{heading}</h2>
//             <button className="view-all">View All</button>
//           </div>
 
//           <div className="strip__scroller">
//             {items.map(({ id, img, title }) => (
//               <div key={`${heading}-${id}`} className="card">
//                 <img src={img} alt={title} onClick={()=>{navigate('/video')}} />
//                 <p className="title">{title}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       ))}
//           <Footer />

//     </div>
//     </div>
//   );
// }
 
 
import React, { useEffect, useState } from 'react';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from '../pages/Navbar';

const slides = [
  {
    img: './pictures/poster.jpg',
    title: 'Wanted: The Lone Bounty',
    desc: 'Track the most elusive outlaw across dusty canyons and midnight saloons.',
  },
  {
    img: './pictures/poster2.jpg',
    title: 'Midnight Train Heist',
    desc: 'A crew of renegades races the clock to rob the Iron Stallion express.',
  },
  {
    img: './pictures/poster3.jpg',
    title: 'Desert Showdown',
    desc: 'Two rivals settle a decades-old score under the scorching noon sun.',
  },
  {
    img: './pictures/poster4.jpg',
    title: 'Gold Rush Gamble',
    desc: 'Strike it rich—or lose it all—in a boomtown full of secrets.',
  },
];

const sections = [
  // ... (Same section data as before)
   {
    heading: 'Latest Releases',
    items: [
      { id: 1, title: 'Cactus Trail',   img: './pictures/ep1.jpg' },
      { id: 2, title: 'Rustler’s Moon', img: './pictures/ep2.png' },
      { id: 3, title: 'Frontier Code',  img: './pictures/ep3.jpg' },
      { id: 4, title: 'Dust & Iron',    img: './pictures/ep4.jpg' },
      { id: 1, title: 'Cactus Trail',   img: './pictures/ep7.jpg' },
      { id: 2, title: 'Rustler’s Moon', img: './pictures/ep8.jpg' },
      { id: 3, title: 'Frontier Code',  img: './pictures/ep9.jpg' },
      { id: 4, title: 'Dust & Iron',    img: './pictures/ep10.jpg' },
      { id: 1, title: 'Cactus Trail',   img: './pictures/ep11.jpg' },
      { id: 2, title: 'Rustler’s Moon', img: './pictures/ep14.jpg' },
      { id: 3, title: 'Frontier Code',  img: './pictures/ep15.png' },
      { id: 4, title: 'Dust & Iron',    img: './pictures/ep16.png' },
      { id: 1, title: 'Cactus Trail',   img: './pictures/ep18.jpg' },
      { id: 2, title: 'Rustler’s Moon', img: './pictures/ep19.jpg' },
      { id: 3, title: 'Frontier Code',  img: './pictures/ep20.jpg' },
      { id: 4, title: 'Dust & Iron',    img: './pictures/ep21.jpg' }
    ],
  },
  {
    heading: 'Trending Now',
    items: [
     { id: 4, title: 'Dust & Iron',    img: './pictures/ep21.jpg' },
      { id: 1, title: 'Cactus Trail',   img: './pictures/ep23.jpg' },
      { id: 2, title: 'Rustler’s Moon', img: './pictures/ep24.jpg' },
      { id: 3, title: 'Frontier Code',  img: './pictures/ep27.jpg' },
      { id: 1, title: 'Cactus Trail',   img: './pictures/ep29.png' },
      { id: 2, title: 'Rustler’s Moon', img: './pictures/ep30.png' },
      { id: 3, title: 'Frontier Code',  img: './pictures/ep3.jpg' },
      { id: 4, title: 'Dust & Iron',    img: './pictures/ep4.jpg' },
      { id: 1, title: 'Cactus Trail',   img: './pictures/ep7.jpg' },
      { id: 2, title: 'Rustler’s Moon', img: './pictures/ep8.jpg' },
      { id: 3, title: 'Frontier Code',  img: './pictures/ep9.jpg' },
      { id: 4, title: 'Dust & Iron',    img: './pictures/ep10.jpg' },
      { id: 1, title: 'Cactus Trail',   img: './pictures/ep1.jpg' },
      { id: 2, title: 'Rustler’s Moon', img: './pictures/ep2.png' },
      { id: 3, title: 'Frontier Code',  img: './pictures/ep3.jpg' },
    ],
  },
  {
    heading: 'Top-Rated Gems',
    items: [
     { id: 4, title: 'Dust & Iron',    img: './pictures/ep4.jpg' },
      { id: 1, title: 'Cactus Trail',   img: './pictures/ep7.jpg' },
      { id: 2, title: 'Rustler’s Moon', img: './pictures/ep8.jpg' },
      { id: 3, title: 'Frontier Code',  img: './pictures/ep9.jpg' },
      { id: 1, title: 'Cactus Trail',   img: './pictures/ep1.jpg' },
      { id: 2, title: 'Rustler’s Moon', img: './pictures/ep2.png' },
      { id: 3, title: 'Frontier Code',  img: './pictures/ep3.jpg' },
      { id: 4, title: 'Dust & Iron',    img: './pictures/ep4.jpg' },
      { id: 1, title: 'Cactus Trail',   img: './pictures/ep7.jpg' },
      { id: 2, title: 'Rustler’s Moon', img: './pictures/ep8.jpg' },
      { id: 3, title: 'Frontier Code',  img: './pictures/ep9.jpg' },
      { id: 4, title: 'Dust & Iron',    img: './pictures/ep10.jpg' },
      { id: 1, title: 'Cactus Trail',   img: './pictures/ep1.jpg' },
      { id: 2, title: 'Rustler’s Moon', img: './pictures/ep2.png' },
      { id: 3, title: 'Frontier Code',  img: './pictures/ep3.jpg' },
    ],
  },
  {
    heading: 'Western Classics',
    items: [
     
       { id: 4, title: 'Dust & Iron',    img: './pictures/ep16.png' },
      { id: 1, title: 'Cactus Trail',   img: './pictures/ep18.jpg' },
      { id: 2, title: 'Rustler’s Moon', img: './pictures/ep19.jpg' },
      { id: 3, title: 'Frontier Code',  img: './pictures/ep20.jpg' },
      { id: 4, title: 'Dust & Iron',    img: './pictures/ep21.jpg' },
      { id: 4, title: 'Dust & Iron',    img: './pictures/ep4.jpg' },
      { id: 1, title: 'Cactus Trail',   img: './pictures/ep7.jpg' },
      { id: 2, title: 'Rustler’s Moon', img: './pictures/ep8.jpg' },
      { id: 3, title: 'Frontier Code',  img: './pictures/ep9.jpg' },
      { id: 1, title: 'Cactus Trail',   img: './pictures/ep1.jpg' },
      { id: 2, title: 'Rustler’s Moon', img: './pictures/ep2.png' },
       { id: 1, title: 'Shane',         img: './pictures/poster.jpg' },
      { id: 2, title: 'High Noon',     img: './pictures/poster2.jpg' },
      { id: 3, title: 'The Searchers', img: './pictures/poster3.jpg' },
      { id: 4, title: 'Stagecoach',    img: './pictures/poster4.jpg' },
    ],
  },
];

export default function Home() {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlideIdx(p => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const { img, title, desc } = slides[slideIdx];
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="poster">
        <div className="poster1">
          <div className="sunset" />
          <div className="tumbleweed" />
          <div className="horse" />
          <img src={img} alt={title} />
          <div className="overlay" />
        </div>

        <div className="postercontent">
          <h1>{title}</h1>
          <p>{desc}</p>
          <button>Watch Now</button>
          <button>+ Save Later</button>
        </div>
      </div>

      {sections.map(({ heading, items }) => (
        <section key={heading} className="strip">
          <div className="strip__header">
            <h2>{heading}</h2>
            <button className="view-all">View All</button>
          </div>

          <div className="strip__scroller">
            {items.map(({ id, img, title }) => (
              <div key={`${heading}-${id}`} className="card">
                <img src={img} alt={title} onClick={() => navigate('/video')} />
                <p className="title">{title}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}
