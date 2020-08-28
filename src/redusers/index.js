export default (state, action) => {
  if (action.type === "Auth") {
    return { ...state, auth: action.auth };
  } else if (action.type === "AddImage") {
    return {
      ...state,
      images: { [action.src]: { className: action.className } }
    };
  }
  return state;
};
