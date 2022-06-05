export const fetchData = (apiRoute, action, method, data, query = {}, callback) => {
    // debugger
    let url = 'http://localhost:5002/';
    if (method) {
        url += apiRoute;
    } else {
        url = new URL(url + apiRoute);
        url.search = new URLSearchParams({
            user: JSON.stringify({data}),
            filters: JSON.stringify({...query})
        }).toString()
    }
    return async dispatch => {
        // debugger
        const response = await fetch(url, (data && method) ? {
            method: method.toUpperCase(),
            body: JSON.stringify(data), //string or object
            headers: {
                'Content-Type': 'application/json',
            },
        } : {});

        let responseData = await response.json();
        // debugger
        try {
            if (!responseData.success) {
                if (responseData.status === 403) {
                    localStorage.setItem('token', '')
                    return alert('user_unauthorized')
                }
                throw new Error(responseData.message);
            }

            if (action) {
                let dataResult = {
                    data: responseData.data || []
                };
                if (callback) {
                    callback(dataResult)
                }
                return dispatch(action(dataResult));
            }

        } catch (error) {
            // debugger
            throw new Error(error);
        }
    }
}