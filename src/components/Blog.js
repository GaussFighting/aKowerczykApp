import React, {useEffect} from 'react';
import TopImage from './TopImage';
import { CardColumns } from 'reactstrap';
import data from '../data/news.json';
import NewsBlog from './NewsBlog';
import blogPageImage from '../styles/images/desk-g42426e823_1920.jpg';

function Blog() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    const allData = data.news.sort((a, b) => {
        return a.data > b.data ? -1 : 1
    });
    return (
       <div>
      <TopImage image={blogPageImage} position={68} />
        <div className="container page-container py-5 ">
            <h1>BLOG</h1>
            {allData.map((news) => {
                return (<CardColumns>
                    <NewsBlog
                        id={news.id}
                        src={news.srcMax}
                        title={news.title}
                        data={news.data} 
                        description={news.descriptionLong} 
                        position={news.position} />
                </CardColumns>)
            })}
        </div>
 </div>
    )
};

export default Blog;
