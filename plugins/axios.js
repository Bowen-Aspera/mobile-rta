import axios from 'axios';
axios.defaults.baseURL='http://192.168.0.174:8000/api/v1/' // url sa localhost  // mag vary ni sa end sa user
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios;
