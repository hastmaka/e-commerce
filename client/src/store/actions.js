import {ecommerceSliceActions} from "./ecommerce-slice";

let url = 'http://localhost:5002/api';

export const fetchLinksData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch(url + '/link');

            if (!response.ok) {
                throw new Error('Could not fetch cart data!')
            }

            return await response.json();
        };

        try {
            const linksData = await fetchData();
            dispatch(ecommerceSliceActions.savedLinks({
                /* have to send the same structure */
                dbLinks: linksData.data || []
            }))
        } catch (error) {
            // dispatch(uiActions.showNotification({
            //     status: 'error',
            //     title: 'Error',
            //     msg: 'Fetching cart data Failed' + error
            // }))
        }
    };
};
export const fetchProductsData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch(url + '/product/1');

            if (!response.ok) {
                throw new Error('Could not fetch cart data!')
            }

            return await response.json();
        };

        try {
            const productsData = await fetchData();
            let data = productsData.data;
            data.image_main = data.images.filter(image => image.image_main)[0]?.image_url;
            data.active_colors = data.sizes.filter(color => color.colors)[0]?.colors;
            data.sizes[0].active = true;

            data = Array.isArray(data) ? data : [data];

            dispatch(ecommerceSliceActions.savedProducts({
                /* have to send the same structure */
                dbProducts: data || []
            }))
        } catch (error) {
            // dispatch(uiActions.showNotification({
            //     status: 'error',
            //     title: 'Error',
            //     msg: 'Fetching cart data Failed' + error
            // }))
        }
    };
};

// export const sendPostData = (post) => {
//     /* return another function */
//     return async dispatch => {
//         // dispatch(
//         //     uiActions.showNotification({
//         //         status: 'pending',
//         //         title: 'Sending..',
//         //         msg: 'Sending cart data'
//         //     })
//         // );
//
//         const sendRequest = async () => {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     /* have to get the same structure */
//                     post: post,
//                 })
//             });
//
//             if (!response.ok) {
//                 throw new Error('Sending card data Failed!')
//             }
//         }
//
//         try {
//             await sendRequest();
//             // setTimeout(() => {
//             //     dispatch(uiActions.showNotification({
//             //         status: 'success',
//             //         title: 'Success',
//             //         msg: 'Send cart data successfully!!'
//             //     }))
//             // }, 500);
//         } catch (error) {
//             dispatch(uiActions.showNotification({
//                 status: 'error',
//                 title: 'Error',
//                 msg: error
//             }))
//         }
//     };
// };