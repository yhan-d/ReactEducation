import React from 'react'

export default function VideoList(props) {
    console.log(props)
    const vList = props.videos.map((v) => {
        return (
            <tr key={v.id.videoId}>
            <td>{v.id.videoId}</td>
            <td>{v.snippet.title}</td>
            <td><img src = {v.snippet.thumbnails.medium.url} onClick = {console.log(v.id.videoId)}
            style = {{cursor: "pointer"}}/></td>
          </tr>
        )
    })
    return (
      <div>
        <h3>VideoList</h3>
        <table className='striped bordered hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Thumbnails</th>
            </tr>
          </thead>
          <tbody>
            {vList}
          </tbody>
        </table>
      </div>
    );
}
