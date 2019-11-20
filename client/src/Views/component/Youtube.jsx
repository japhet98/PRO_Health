import React from 'react';
import YouTube from 'react-youtube';
 
class YouTubePage extends React.Component {
   videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
      videoOnPlay (event) {
    // access to player in all event handlers via event.target
    event.target.playVideoAt(50) // 50 seconds
    //const player = event.target
    //console.log(player.getCurrentTime())
  }

  render() {
    const opts = {
      height: '550',
      width: '1515',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 const {videoId} = this.props
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
        onPlay={this.videoOnPlay}
      />
    );
  }
 
  
}

export default YouTubePage;