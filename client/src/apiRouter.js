import axios from 'axios'

const headers = {
    'Content-Type': 'application/json',
    "ngrok-skip-browser-warning": "69420"
}

// class apiRouter {
//     get(url) {
//         return axios.get(url, {
//             headers: headers
//         })
//     }
//     post(url, data) {
//         return axios.post(url, data, {
//             headers: headers
//         })
//     }
//     put(url, data) {
//         return axios.put(url, data)
//     }
//     delete(url, data) {
//         return axios.delete(url, data)
//     }
// }

class apiRouter {
    get(url) {
        return fetch(url, {method: 'get', headers: new Headers({
            "ngrok-skip-browser-warning": "69420",
          })}).then((response) => response.json())
    }
    post(url, data) {
        return fetch(url, {method: 'post', headers: {
            'Content-Type': 'application/json', "ngrok-skip-browser-warning": "69420"
        }, body: JSON.stringify(data)})
    }
    put(url, data) {
        return fetch(url, {method: 'put', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)})
    }
    delete(url, data) {
        return fetch(url, {method: 'delete', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)})
    }
}

export default new apiRouter();