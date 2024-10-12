import { create } from "zustand";

export const useUserStore = create(set => ({
    user: null,
    setUser: user => set({ user }),
    // Create a function to register a user
    registerUser: async user => {
        const res = await fetch("/api/users/register", {
            method: "POST",
            body: JSON.stringify(user),
        });
        const data = await res.json();
        set({ user: data.data });
    },
    // Create a function to login a user
    loginUser: async user => {
        const res = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify(user),
        });
        const data = await res.json();
        set({ user: data.data });
    },
}));
