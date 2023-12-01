import React from 'react';
import './NewSummary.css'
import { FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt} from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
const NewsSamary = ({ news }) => {
    const {_id,details,image_url,title,author,total_view,rating}=news
    return (
      <Card className='mb-5 border-0'>
        <Card.Header className='d-flex justify-content-between align-items-center'> 
          <div className='d-flex align-items-center'>
            <Image
              roundedCircle
              src={author.img}
              style={{height:'60px'}}
            ></Image>
            <div className='ms-3'>
              <small className='d-block'>{author.name? author.name: 'N/O'}</small>
              <small>{author.published_date? author.published_date: 'data...'}</small>
            </div>
          </div>
          <div>
            <FaShareAlt style={{marginRight:'20px'}}></FaShareAlt>
            <FaRegBookmark></FaRegBookmark>
          </div>
       </Card.Header>
       <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" className='img' src={image_url} />
        <Card.Text>
                    {details.length > 250 ?
                        <>{details.slice(0, 250) + '....'}<Link to={`/news/${_id}`}>read more</Link></> :
                        <>{details}</>
                    }
        </Card.Text>
        </Card.Body>
        <Card.Footer style={{backgroundColor:'white'}}>
          <div className='d-flex justify-content-between align-items-center'>
          <div>
              <p>{rating.number}
                <FaRegStar className='ms-2 text-warning'></FaRegStar>
                <FaRegStar className='text-warning'></FaRegStar>
                <FaRegStar className='text-warning'></FaRegStar>
                <FaRegStar className='text-warning'></FaRegStar>
                <FaRegStar className='text-warning'></FaRegStar>
              </p>
            </div>
            <div>
              <p>{total_view}
              <FaRegEye className='ms-2'></FaRegEye>
              </p>
            </div>
         </div>
        </Card.Footer>
  </Card>
    );
};

export default NewsSamary;