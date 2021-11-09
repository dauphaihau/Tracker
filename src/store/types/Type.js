
// ------------------------------------ User
export const USER_LOGIN_SAGA = 'USER_LOGIN_SAGA'
export const LOGIN = 'LOGIN';
export const USER_REGISTER_SAGA = 'USER_REGISTER_SAGA'
export const DELETE_USER_FROM_PROJECT_SAGA = 'DELETE_USER_FROM_PROJECT_SAGA';
export const DELETE_USER_SAGA = 'DELETE_USER_SAGA';
export const CREATE_USER_SAGA = 'CREATE_USER_SAGA'
export const EDIT_USER = 'EDIT_USER'
export const EDIT_USER_SAGA = 'EDIT_USER_SAGA';
export const GET_USER_BY_PROJECT_ID_SAGA = 'GET_USER_BY_PROJECT_ID_SAGA';
export const GET_USER_BY_PROJECT_ID = 'GET_USER_BY_PROJECT_ID';
export const GET_USER_SAGA = 'GET_USER_SAGA';
export const GET_USER = 'GET_USER';
export const ADD_USER_SAGA = 'ADD_USER_SAGA';
export const ASSIGN_USER_TASK_SAGA = 'ASSIGN_USER_TASK_SAGA';


// ------------------------------------ Project
export const GET_ALL_PROJECT_SAGA = 'GET_ALL_PROJECT_SAGA';
export const GET_ALL_PROJECT = 'GET_ALL_PROJECT';
export const GET_PROJECT_CATEGORY_SAGA = 'GET_PROJECT_CATEGORY_SAGA';
export const GET_PROJECT_CATEGORY = 'GET_PROJECT_CATEGORY';
export const EDIT_PROJECT = 'EDIT_PROJECT'
export const CREATE_PROJECT_SAGA = 'CREATE_PROJECT_SAGA';

export const GET_DETAIL_PROJECT_SAGA = 'GET_DETAIL_PROJECT_SAGA';
export const GET_DETAIL_PROJECT = 'GET_DETAIL_PROJECT';

export const UPDATE_PROJECT_SAGA = 'UPDATE_PROJECT_SAGA';
export const DELETE_PROJECT_SAGA = 'DELETE_PROJECT_SAGA';


// ------------------------------------- task
export const GET_ALL_TASK_TYPE_SAGA = 'GET_ALL_TASK_TYPE_SAGA';
export const GET_ALL_TASK_TYPE = 'GET_ALL_TASK_TYPE';

export const GET_ALL_PRIORITY = 'GET_ALL_PRIORITY';
export const GET_ALL_PRIORITY_SAGA = 'GET_ALL_PRIORITY_SAGA';

export const GET_ALL_STATUS_SAGA = 'GET_ALL_STATUS_SAGA';
export const GET_ALL_STATUS = 'GET_ALL_STATUS';

export const GET_TASK_DETAIL = 'GET_TASK_DETAIL';
export const GET_TASK_DETAIL_SAGA = 'GET_TASK_DETAIL_SAGA';

export const REMOVE_TASK_SAGA = 'REMOVE_TASK_SAGA';
export const CREATE_TASK_SAGA = 'CREATE_TASK_SAGA';
export const UPDATE_STATUS_TASK_SAGA = 'UPDATE_STATUS_TASK_SAGA';

export const CHANGE_TASK_MODAL = 'CHANGE_TASK_MODAL';
export const CHANGE_ASSIGN = 'CHANGE_ASSIGN';
export const REMOVE_USER_ASSIGN = 'REMOVE_USER_ASSIGN';

export const HANDLE_CHANGE_POST_API_SAGA = 'HANDLE_CHANGE_POST_API_SAGA'

// --------------------------------------- comment
export const GET_ALL_COMMENT = 'GET_ALL_COMMENT'
export const GET_ALL_COMMENT_SAGA = 'GET_ALL_COMMENT_SAGA'
export const INSERT_COMMENT_SAGA = 'INSERT_COMMENT_SAGA'
export const UPDATE_COMMENT_SAGA = 'UPDATE_COMMENT_SAGA'
export const DELETE_COMMENT_SAGA = 'DELETE_COMMENT_SAGA'


// --------------------------------------- loading, notification
export const DISPLAY_LOADING = 'DISPLAY_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'
export const DISPLAY_ALERT = 'DISPLAY_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'


// ---------------------------------------- Others
export const DRAG_HAPPENED = 'DRAG_HAPPENED'

export const OPEN_DRAWER = 'OPEN_DRAWER'
export const CLOSE_DRAWER = 'CLOSE_DRAWER'

export const CLEAR_FIELD_COMMENT = 'CLEAR_FIELD_COMMENT'
export const ERROR_FROM_SERVER = 'ERROR_FROM_SERVER'


export const OPEN_USER_MODAL = 'OPEN_USER_MODAL'
export const CLOSE_USER_MODAL = 'CLOSE_USER_MODAL'

export const OPEN_FORM_EDIT_USER = 'OPEN_FORM_EDIT_USER'
export const OPEN_FORM_CREATE_USER = 'OPEN_FORM_CREATE_USER'

export const OPEN_FORM_EDIT_PROJECT = 'OPEN_FORM_EDIT_PROJECT'
export const OPEN_FORM_CREATE_PROJECT = 'OPEN_FORM_CREATE_PROJECT'
export const SET_SUBMIT_CONTENT = 'SET_SUBMIT_CONTENT'
export const SET_SUBMIT_CONTENT_MODAL = 'SET_SUBMIT_CONTENT_MODAL'

export const OPEN_FORM_EDIT_TASK = 'OPEN_FORM_EDIT_TASK'
export const OPEN_FORM_CREATE_TASK = 'OPEN_FORM_CREATE_TASK'