import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;
      return { ... state, [action.payload.data.id]: action.payload.data }
      // this is key interpolation. so whaterever the variable action.payload.data.id is, make a new key on this object using
      // the value here, and set its value eqaul to action.payload.data.
      // So over time as the user starts to look at more show routes in the applciation, we'll fetch each of these additional posts,
      // and we'll add them to the overall state object.

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
