import {createSlice} from "@reduxjs/toolkit";

// const getId = state =>
//   state.ratings.reduce((maxId, rat) => Math.max(rat.id, maxId), -1) + 1;

const detailProductSlice = createSlice({
    name: 'detailProduct',
    initialState: {
        detailData: {
            product_id: null,
            product_price: null,
            product_discount: null,
            product_description: '',
            sizes: [],
            active_colors: [],
            image_main: null,
            image_main_id: null,
            images: [],
            selected_size_id: null,
            selected_color_id: null
        },
        reviews: [],
        ratingAvg: 0,
        isLoaded: false
    },
    reducers: {

        detailProduct(state, action) {
            // debugger
            const data = {...action.payload.data};
            let main_image_object = data.images.filter(image => image.image_main)[0];
            data.image_main = main_image_object?.image_url;
            data.image_main_id = main_image_object?.image_id;
            data.active_colors = data.sizes.filter(color => color.colors)[0]?.colors;

            return {
                ...state,
                detailData: {
                    ...data,
                    selected_color_id: data.active_colors[0].color_color_id,
                    selected_size_id: data.sizes[0].size_id
                },
                reviews: [...action.payload.data.reviews],
                isLoaded: true,

            }
        },

        setMainSliderImage(state, action) {
            const data = {...state.detailData};
            data.image_main = action.payload.image_main;
            return {
                ...state,
                detailData: data
            }
        },

        setSizes(state, action) {
            const data = {...state.detailData};
            return {
                ...state,
                detailData: {
                    ...data,
                    selected_size_id: data.sizes.filter(size => size.size_id === action.payload.size.size_id)[0].size_id,
                }
            }
        },

        setColors(state, action) {
            const data = {...state.detailData};
            data.active_colors = action.payload.colors;
            return {
                ...state,
                detailData: {
                    ...data,
                    selected_color_id: data.active_colors[0].color_color_id
                }
            }
        },

        setRatingAvg(state, action) {
            debugger
            state.ratingAvg = action.payload.data.average
        },

        setReviews(state, action) {
            return {
                ...state,
                reviews: [
                    action.payload.data.result,
                    ...state.reviews
                ]
            }
        }
    }
})

export const detailProductSliceActions = detailProductSlice.actions;
export default detailProductSlice.reducer;