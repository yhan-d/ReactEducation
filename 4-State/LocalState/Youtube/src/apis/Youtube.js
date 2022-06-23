import axios  from "axios";
const KEY ="AIzaSyCEtG6gLpLFjAqaQr_Xf04OnIC6Fr78f_E"
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});  
