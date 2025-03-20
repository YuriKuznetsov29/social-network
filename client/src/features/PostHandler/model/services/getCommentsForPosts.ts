import { IComment } from '../types/comment'

interface RequestData {
    postId: string
}

interface ResponseData {
    comments: IComment[]
}

// export const getCommentsForPost = createAsyncThunk<
//     ResponseData,
//     RequestData,
//     { rejectValue: string }
// >('post/getCommentsForPost', async ({ postId }) => {
//     try {
//         const response = await $api.post<ResponseData>(`${API_URL}/post/getCommentsForPost`, {
//             postId,
//         })
//         return response.data
//     } catch (e: unknown) {
//         console.log(e)
//     }
// })
