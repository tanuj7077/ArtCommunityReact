export const addUserToLocalStorage = (user) => {
  localStorage.setItem("userGodArt", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("userGodArt");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("userGodArt");
  const user = result ? JSON.parse(result) : null;
  return user;
};
