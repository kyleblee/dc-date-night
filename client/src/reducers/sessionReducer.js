export default function sessionReducer(state = {
  session: !!sessionStorage.jwt
}, action) {
  switch(action.type) {
    case 'LOG_IN_SUCCESS':
      return {session: !!sessionStorage.jwt};
    case 'LOG_OUT':
      return {session: !!sessionStorage.jwt};
    default:
      return state;
  }
}
