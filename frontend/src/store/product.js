import { create } from "zustand";

//: Same as using useState, but it creates a global state
export const useProductStore = create(set => ({
    products: [],
    isLoading: false,
    setProducts: products => set({ products }),
    createProduct: async newProduct => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return {
                success: false,
                message: "Please fill in all the fields.",
            };
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });
        const data = await res.json();
        set(state => ({ products: [...state.products, data.data] }));
        return {
            success: true,
            message: "Product created successfully",
        };
    },
    getProducts: async () => {
        set({ isLoading: true });
        const res = await fetch("/api/products");
        const data = await res.json();
        set({ products: data.data, isLoading: false });
    },
    deleteProduct: async pid => {
        const res = await fetch(`/api/products/${pid}`, { method: "DELETE" });
        const data = await res.json();

        if (!data.success) return { success: false, message: data.message };
        set(state => ({
            products: state.products.filter(product => product._id !== pid),
        }));
        return { success: true, message: data.message };
    },
    updateProduct: async (pid, updatedProduct) => {
        if (
            !updatedProduct.name ||
            !updatedProduct.image ||
            !updatedProduct.price
        ) {
            return {
                success: false,
                message: "Please fill in all the fields.",
            };
        }
        const res = await fetch(`/api/products/${pid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        });
        const data = await res.json();

        if (!data.success) return { success: false, message: data.message };
        set(state => ({
            products: state.products.map(product =>
                product._id === pid
                    ? { ...product, ...updatedProduct }
                    : product
            ),
        }));
        return { success: true, message: data.message };
    },
}));

// const [state, setState] = useState([]);
