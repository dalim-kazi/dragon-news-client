import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSamary from '../../Shared/newsSamary/NewsSamary';
import useTitle from '../../../Title/Title';

const Home = () => {
    useTitle('home')
    const allNews = useLoaderData()
    return (
        <div>
            {
                allNews.map(news => <NewsSamary
                    key={news._id}
                    news={news}
                ></NewsSamary>)
            }
        </div>
    );
};

export default Home;