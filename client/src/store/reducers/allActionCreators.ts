import { fileActionCreators } from './file/actionCreators'
import {userActionCreators} from './user/actionCreators'

export const allActionCreators = {
    ...userActionCreators,
    ...fileActionCreators
}