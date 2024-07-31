import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../api/axios'

const UPLOAD_URL = '/upload'


const initialState = {
    loading: false,
    image: null,
    orderstatus : "Started",
    data: {
        "valid" : null,
        "reason" : [],
    },
    error : ''
}


export const uploadImage = createAsyncThunk('image/uploadImage', (payload) => {
    return axios.post(UPLOAD_URL, payload,
    )
        .then((response) => response.data)
})

const imageSlice = createSlice({
    name: 'image',
    initialState,

    reducers:  {
        setImage : (state, action)=>{
            state.image = action.payload
            state.data.valid = null
        },
        setOrderstatus : (state, action)=>{
            state.orderstatus = action.payload
        }
    },


    extraReducers: (builder) => {
        builder.addCase(uploadImage.pending, (state) => {
            state.loading = true
        })

        builder.addCase(uploadImage.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload.data
            state.error = ''
            if(action.payload.data.valid){
                state.orderstatus = "Completed"
            }
        })

        builder.addCase(uploadImage.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default imageSlice.reducer
export const {
    setImage, changeErrorState
} = imageSlice.actions