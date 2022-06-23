import React from 'react'

export default function Video(props) {
    if(!props.selectedVideo)
        return <div>Loading....</div>
    const source = `http://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;   
    return (
    <div className='position-fixed'>
        <h3>{props.selectedVideo.snippet.title}</h3>
        <div>
            <iframe src={source} height = "400" width="400"></iframe>
        </div>
        <p>{props.selectedVideo.snippet.description}</p>
    </div>
  )
}
