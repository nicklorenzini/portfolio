import React from 'react';

const BackgroundVideo = () => {
    const videoSource = './bg.mp4'
    return (
        <div>
            <video autoPlay="autoplay" loop="loop" muted className={classNames.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser doesn't support the video tag :(
            </video>
        </div>
    )
}
export default BackgroundVideo