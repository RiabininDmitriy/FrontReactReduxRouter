export const sendApi = (method) => (data, url) => {
    let motherOption = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : undefined
        },
        method: method
    }

    motherOption = data ? {...motherOption, body:JSON.stringify(data)} : motherOption

    return fetch(`http://localhost:3001/${ url }`,motherOption
    )
    .then(res => res.json())
}

export default {
    sendApiPost: sendApi("POST"),
    sendApiGet: sendApi("GET")
}
