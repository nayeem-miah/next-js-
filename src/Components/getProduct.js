const getProduct = async () => {
    try {
        const response = await fetch('https://quick-bazz.vercel.app/products');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const product = await response.json(); // Parse JSON data
        return product; // Return the product data if needed
    } catch (error) {
        console.error('Error fetching product:', error); // Handle errors
    }
};

export default getProduct;
