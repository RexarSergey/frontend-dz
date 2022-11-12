import {combineReducers} from 'redux'
import {getArticles} from "../../components/helpers/get-articles"

export const rootReducer = combineReducers({
    getArticles,
})