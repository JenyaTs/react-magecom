import { combineReducers } from 'redux'
import task from './task'
import categories from './categories'

export default combineReducers({
    task,
    categories
})