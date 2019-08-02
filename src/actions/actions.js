import { createAction } from './helpers';
import { ADD_CATEGORY } from './constants';
import { TASKS_SHOW } from './constants';
import { TASK_ADD } from './constants';
import { ADD_SUB_CATEGORY } from './constants';
import { REMOVE_CATEGORY } from './constants';

export const addCategory = createAction(ADD_CATEGORY);
export const showTasks = createAction(TASKS_SHOW);
export const addTask = createAction(TASK_ADD);
export const removeCategory = createAction(REMOVE_CATEGORY);
export const addSubCat = createAction(ADD_SUB_CATEGORY);