import { createAction } from './helpers';
import { CHANGE_NAME, CHANGE_EMAIL } from './constants';

export const changeName = createAction(CHANGE_NAME);
export const changeEmail = createAction(CHANGE_EMAIL);