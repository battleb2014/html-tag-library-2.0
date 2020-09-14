import React from 'react';

const AudioVideo = () => {
    return (
        <div className='audioVideo'>
            <span><strong>&lt;audio&gt;</strong>: Defines sound content</span><br /><br />
            <span><strong>&lt;source&gt;</strong>: Defines multiple media resources for media
                elements(<em>&lt;video&gt;</em>, <em>&lt;audio&gt;</em> and <em>&lt;picture&gt;</em>)</span><br /><br />
            <span><strong>&lt;track&gt;</strong>: Defines text tracks for media elements(video and audio)</span><br /><br />
            <span><strong>&lt;video&gt;</strong>: Defines a video or movie</span><br /><br />
        </div>
    );
}

export default AudioVideo;