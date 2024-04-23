export const getProducts = async () => {
    try {
        const fetchData = await fetch('https://dummyjson.com/products');
        const data = await fetchData.json();
        return data;
    } catch (error) {
        throw error
    }
}

export const getProductDetail = async (id) => {
    try {
        const fetchData = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await fetchData.json();
        return data
    } catch (error) {
        throw error
    }
}