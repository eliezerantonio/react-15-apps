import axis from 'axios';

const clientAxios = axis.create({
    baseURL:process.env.REACT_APP_BACKEND_URL
});

export default clientAxios;