export default function({ $axios }, inject) {

    // Create a custom axios instance
    const securedAxiosInstance = $axios.create({
        baseURL: process.env.API_UR,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const plainAxiosInstance = $axios.create({
        baseURL: process.env.API_UR,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        }
    })

    securedAxiosInstance.setToken(localStorage.getItem('csrf'), 'X-CSRF-TOKEN', ['post', 'delete', 'update'])


    securedAxiosInstance.onError(error => {
        if (error.response.status === 401) {
            return plainAxiosInstance.post('/refresh', {}, { 'headers': { 'X-Refresh-Token': localStorage.getItem('csrf') } })
                .then(response => {
                    localStorage.setItem('csrf', response.data.csrf);
                    localStorage.setItem('signedIn', true);

                    let retryConfig = error.response.config;
                    retryConfig.headers['X-CSRF-TOKEN'] = localStorage.getItem('csrf');
                    return plainAxiosInstance.request(retryConfig);
                }).catch(error => {

                    localStorage.removeItem('csrf');
                    localStorage.removeItem('signedIn');

                    location.replace('/')
                    return Promise.reject(error)
                });
        } else {
            return Promise.reject(error)
        }

    })


    // Inject to context as $api
    inject('plain', plainAxiosInstance)
    inject('secured', securedAxiosInstance)


}