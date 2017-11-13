import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beingAjaxCall} from "./ajaxStatusActions";

export function loadAuthorsSuccess(authors) {
  return{ type:types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return dispatch => {
    dispatch(beingAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error =>{
      throw(error);
    });
  };
}
