import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';

const Cetagory = () => {
    const {id}=useParams()
    const categoryNews= useLoaderData()
    return (
        <div>
            { id && <h2>The Category: {categoryNews.length}</h2>}
            {
                categoryNews.map(news=> <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
            
        </div>
    );
};

export default Cetagory;