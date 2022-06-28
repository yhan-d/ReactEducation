import axios  from "axios";
const KEY ="AIzaSyAQLgXguhv6LW2y4u1YKr1rudaO1qElES4"
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});  
