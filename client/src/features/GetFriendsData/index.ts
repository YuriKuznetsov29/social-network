export { friendsReducer } from './model/slice/friendsSlice'
export { getAllFriends } from './model/services/getAllFriends'
export type { FriendsSchema } from './model/types/friendSchema'
export { getFriendsState } from './model/selectors/getFriendsState'
export { addFriend } from './model/services/addFriend'
export { removeFriend } from './model/services/removeFriend'
export { getFriendsData } from './model/selectors/getFriendsData'
export { getFriendsLoadingStatus } from './model/selectors/getFriendsLoadingStatus'
export { getInitFriendsStatus } from './model/selectors/getInitFriendsStatus'
