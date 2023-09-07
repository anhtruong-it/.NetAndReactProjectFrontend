import { createBrowserRouter } from "react-router-dom";
import ContactPage from "../../features/contact/ContactPage";
import Catalog from "../../features/catalog/Catalog";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";
import AboutPage from "../../features/about/AboutPage";
import ProductDetails from "../../features/catalog/ProductDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'catalog/', element: <Catalog />},
            {path: 'catalog/:id', element: <ProductDetails />},
            {path: 'contact', element: <ContactPage />},
            {path: 'about', element: <AboutPage />},
        ]
    }
])