import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import youtube from './apis/Youtube'
import VideoList from './components/VideoList';
import Video from './components/Video';





export default function App() {
 const [videos, setVideos] = useState([])
 const [selectedVideo, setSelectedVideo] = useState(null)
 useEffect(() => {
   GetText();
 },[])
 const selectVideo = (video) => {
  setSelectedVideo(video)
}
 const GetText = async (text) => {
  const response = await youtube.get('/search',{
   params:{
    q: text
   }
  });
  setVideos(response.data.items);
  setSelectedVideo(response.data.items[0])
 
 
}


  return (
    <div>
      <Search GetText = {GetText}/>
      <div className='row'>
        <div className='col-md-4'>
           <VideoList videos = {videos} selectVideo = {selectVideo} />
        </div>
        <div className='col-md-7'>
          <Video selectedVideo = {selectedVideo}/>
        </div>
      </div>
    </div>
  )
}
