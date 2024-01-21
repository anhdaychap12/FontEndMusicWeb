import axios from './setup/axios';


const getSong = () => {
    return axios.get('/song/top');
}

const getArtist = () => {
    return axios.get('/artist/top');
}

const getRsSearch = (keyword) => {
    return axios.get('/search?q='+keyword)
}

const getSongById = (id) => {
    return axios.get('/song/id/'+id)
}
const ex = {getSong, getArtist, getRsSearch, getSongById}

export default ex;