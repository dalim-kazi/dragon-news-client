import React from 'react';
import './Videos.css'
import vidoes2 from '../../../assets/vidoes/vidoes2.mp4'
import vidoes1 from '../../../assets/vidoes/vidoes1.mp4'
const Vidoes = () => {
    return (
        <div>
            <video width="320" height="240" controls>
                <source src={vidoes2} type="video/mp4" />
                
           {/* <source src="movie.ogg" type="video/ogg"/> */}
           Your browser does not support the video tag.
        </video>
            <video
             width="320" height="240"
            src={vidoes1}
                controls
                autoplay
             ></video>
        </div>
    );
};

export default Vidoes;