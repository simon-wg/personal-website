import Navbar from "./Navbar.svelte";

export default {
    component: Navbar,
    title: "Navbar",
    tags: ["autodocs"],
    render: () => ({
        Component: Navbar,
        props: {
            // Add any props you want to pass to the Navbar component
        },
    }),
};

export const Default = {
    args: {
        // Define default args for the Navbar component
    },
};