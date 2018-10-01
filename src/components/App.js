import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const API_KEY = 'AIzaSyBsRiC2eJkaCuZ4P4imZ182hrZn24m6BjI';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('popcorn');
  }

  onVideoSelect = selectedVideo => {
    this.setState({
      selectedVideo
    });
  };

  videoSearch = term => {
    YTSearch(
      {
        key: API_KEY,
        term: term
      },
      videos => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      }
    );
  };

  onSearchTermChange = _.debounce(term => {
    this.videoSearch(term);
  }, 400);

  render() {
    return (
      <div className="container">
        <SearchBar onSearchTermChange={this.onSearchTermChange} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
