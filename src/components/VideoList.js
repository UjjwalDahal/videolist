import React, { Fragment } from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map(video => (
    <VideoListItem
      onVideoSelect={onVideoSelect}
      key={video.etag}
      video={video}
    />
  ));

  return (
    <Fragment>
      <ul className="col-md-4 list-group">{videoItems}</ul>
    </Fragment>
  );
};

export default VideoList;
