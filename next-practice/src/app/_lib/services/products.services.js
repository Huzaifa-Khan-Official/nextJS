export const getProducts = async () => {
    try {
        const fetchData = await fetch(`${process.env.NEXT_SERVER_URL}/products`);
        const data = await fetchData.json();
        return data;
    } catch (error) {
        throw error
    }
}

export const getProductDetail = async (id) => {
    try {
        const fetchData = await fetch(`${process.env.NEXT_SERVER_URL}/products/${id}`);
        const data = await fetchData.json();
        return data
    } catch (error) {
        throw error
    }
}