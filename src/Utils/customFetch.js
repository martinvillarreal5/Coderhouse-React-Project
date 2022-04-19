let is_ok = true;

export const getProducts = (time, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (is_ok) {
        resolve(data);
      } else {
        reject("Error in the customFetch");
      }
    }, time);
  });
};