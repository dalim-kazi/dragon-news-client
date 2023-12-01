import { useLoaderData } from "react-router-dom";
import NewsSamary from "../../Shared/newsSamary/NewsSamary";
import useTitle from "../../../Title/Title";

const Catagory = () => {
    const allNews = useLoaderData()
    useTitle('catagory')
    return (
        <div>
            {
                allNews.map(news => <NewsSamary
                    key={news._id}
                    news ={news}
                ></NewsSamary>)
             } 
        </div>
    );
};

export default Catagory;