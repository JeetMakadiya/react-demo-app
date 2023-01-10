export const isUserExist = (users, email) => {
  const item = users.find((item) => item.email === email);
  if (item) {
    return true;
  }
  return false;
};

export const checkLogin = (users, formValues) => {
  const item = users.find(
    (item) =>
      item.email === formValues.email && item.password === formValues.password
  );
  if (item) {
    return true;
  }
  return false;
};
