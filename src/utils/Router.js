import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Subtwocategory from "../pages/Subtwocategory"
import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import BlogList from "../pages/BlogList"
import BlogDetails from "../pages/BlogDetails"

const RoutesData = [
    {
        path: "/",
        element: <Home />
    }, {
        path: "/about",
        element: <About />
    }, {
        path: "/contact",
        element: <Contact />
    }, {
        path: "/:category/:subcategory",
        element: <Subtwocategory />
    }, {
        path: "/:category/:subcategory/:subtwocategory",
        element: <ProductList />
    }, {
        path: "/:category/:subcategory/:subtwocategory/:product",
        element: <ProductDetails />
    }, {
        path: "/cart",
        element: <Cart />
    }, {
        path: "/checkout",
        element: <Checkout />
    }, {
        path: "/blogs",
        element: <BlogList />
    }, {
        path: "/:blogname",
        element: <BlogDetails />
    }

]

export default RoutesData;