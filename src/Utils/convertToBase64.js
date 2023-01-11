export const convertToBase64 = async (fileObject) => {
  const data = await new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = async () => {
      return resolve(reader.result);
    };
    reader.readAsDataURL(fileObject);
  });
  return data;
};
