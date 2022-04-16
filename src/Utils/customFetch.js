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
/*
export const getProduct = (time, data, id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (is_ok) {
        const product = data.find(item => (item.id === id));
        resolve(product);
      } else {
        reject("Error in the customFetch: ");
      }
    }, time);
  });
};

export const getProductByCategory = (time, data, category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (is_ok) {
        const products = data.filter(item => (item.category === category));
        resolve(products);
      } else {
        reject("Error in the customFetch: ");
      }
    }, time);
  });
}
*/