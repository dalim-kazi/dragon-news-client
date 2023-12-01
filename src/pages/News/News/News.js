import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const News = () => {
    const AllNews = useLoaderData()
    const {category_id,image_url,details}=AllNews
    console.log(AllNews)
    return (
        <Card style={{ width: '100%',border:'0' }}>
        <Card.Img style={{height:'100%'}} variant="top" src={image_url} />
        <Card.Body>
          <Card.Text>
             {details}
                </Card.Text>
                <Link to={`/catagory/${category_id}`}><Button variant="success">Back to home</Button></Link>
        </Card.Body>
      </Card>
    );
};

export default News;