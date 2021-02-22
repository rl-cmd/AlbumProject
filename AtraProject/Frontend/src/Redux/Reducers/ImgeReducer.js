import produce from 'immer';
import createReducer from "./reducerUtils";
const initialState = {
    image: {
        _id: "",
        user_id: "",
        albumId: "",
        id: "",
        title: "",
        url: "",
        thumbnailUrl: ""
    },
    images: [{}]
}
const imges = {
    addImage(state, action) {
        state.image._id = action.payload._id;
        state.image.user_id = action.payload.user_id;
        state.image.id = action.payload.id;
        state.image.albumId = action.payload.albumId;
        state.image.title = action.payload.title
        state.image.url = action.payload.url
        state.image.thumbnailUrl = action.payload.thumbnailUrl
        console.log(state.imge);
    },
    setAlbumId(state, action) {
        state.image.albumId = action.payload;
    },
    setId(state, action) {
        state.image.id = action.payload;
    },
    setTitle(state, action) {
        state.image.title = action.payload;
    },
    setUrl(state, action) {
        state.image.url = action.payload;
    },
    setThumbnailUrl(state, action) {
        state.image.thumbnailUrl = action.payload;
    }
}
export default produce((state, action) => createReducer(state, action, imges), initialState);