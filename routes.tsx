import Home from "@/pages";

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter ([

    {
        path: "/home",
        element: <Home />
    }
]);

export default router; 