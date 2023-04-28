import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagories, setCatagories]=useState([])
    useEffect(()=>{
        fetch('https://the-dragon-server-iamlikhon1.vercel.app/catagory')
        .then(res=>res.json())
        .then(data=>setCatagories(data))
        .catch(error=>console.error(error))
    },[])
    return (
        <div>
           <h4>All Category</h4>
          <div className='ps-4'>
          {
            catagories.map(category=> <p
            key={category.id}
            >
                <Link to={`/category/${category.id}`} className=' text-black text-decoration-none'>{category.name}</Link>

            </p>)
           }
          </div>
            
        </div>
    );
};

export default LeftNav;