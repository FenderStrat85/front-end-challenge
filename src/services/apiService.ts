const apiService: { [key: string]: any } = {};

apiService.getProducts = async (pageNumber: string) => {
  return fetch(`http://localhost:3000/api/products?page=${pageNumber}`)
    .then((res) => res.json())
    .catch((err) => console.log("error", err));
};

export default apiService;
