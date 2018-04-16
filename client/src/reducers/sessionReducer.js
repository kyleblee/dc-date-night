export default function sessionReducer(state = {
  session: !!sessionStorage.jwt,
  error: undefined
}, action) {
  switch(action.type) {
    case 'LOG_IN_SUCCESS':
      return {session: !!sessionStorage.jwt, error: undefined};
    case 'LOG_IN_ERROR':
      return {session: false, error: "That doesn't seem to be the correct email and password information."};
    case 'LOG_OUT':
      return {session: !!sessionStorage.jwt};
    default:
      return state;
  }
}
