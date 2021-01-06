import * as BookmarkAPIUtil from '../util/bookmark_api_util';

export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

const receiveBookmarks = bookmarks => {
  return {
    type: RECEIVE_BOOKMARKS,
    bookmarks
  }
}

const receiveBookmark = bookmark => {
  return {
    type: RECEIVE_BOOKMARK,
    bookmark
  }
}

const removeBookmark = bookmark => {
  return {
    type: REMOVE_BOOKMARK,
    bookmark
  }
}

export const fetchBookmarks = userId => dispatch => {
  debugger
  return BookmarkAPIUtil.fetchBookmarks(userId)
    .then(bookmarks => dispatch(receiveBookmarks(bookmarks)))
}

export const createBookmark = eventId => dispatch => {
  debugger
  return BookmarkAPIUtil.createBookmark(eventId)
    .then(bookmark => dispatch(receiveBookmark(bookmark)))
}

export const deleteBookmark = eventId => dispatch => {
  debugger
  return BookmarkAPIUtil.deleteBookmark(eventId)
    .then(bookmark => dispatch(removeBookmark(bookmark)))
}