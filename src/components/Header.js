import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [isToggle, setToggle] = useState(false);
    const [isKart, setKart] = useState(false);
    const [scrollTop, setScrollTop] = useState(false);
    const [loginModel, setLoginModel] = useState(false);
    const [modelId, setModelId] = useState(1);
    const [searchModel, setSearchModel] = useState(false);
    const [Y, setY] = useState(0)


    const handleToggleModel = (id) => {
        setModelId(id);
    }


    const handleKartToggle = () => {
        setKart(!isKart);
    }

    const handleToggle = () => {
        setToggle(!isToggle);
    }

    const handleLoginModel = () => {
        setLoginModel(!loginModel);
        setModelId(1);
    }

    const handleScroll = () => {
        if (window.scrollY >= 250) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        setY(window.scrollY);
        if (Y > window.scrollY) {
            console.log("up");
            setScrollTop(true);
        } else {
            console.log("down");
            setScrollTop(false);
        }
    }


    const handleScrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [Y])


    return (
        <>
            <div class="header-area header-area--default bg-white">

                {/* <!-- Header Bottom Wrap Start --> */}
                <header class={`header-area header_absolute header_height-90 header-sticky  ${isSticky ? "is-sticky" : ""}`}>
                    <div class="container-fluid container-fluid--cp-100">
                        <div class="row align-items-center">

                            <div class="col-lg-3 col-lg-3 col-6">
                                <div class="logo text-start">
                                    <a href="#"><img src="/assets/images/logo/logo.svg" alt="" /></a>
                                </div>
                            </div>

                            <div class="col-lg-6 col-lg-6  d-none d-lg-block">
                                {/* <!-- navigation menu --> */}
                                <div class="header__navigation d-none d-lg-block">
                                    <nav class="navigation-menu">
                                        <ul class="justify-content-center">
                                            <li class="">
                                                <Link to="/"><span>Home</span></Link>
                                            </li>

                                            <li class="has-children">
                                                <a href="#"><span>Category</span></a>
                                                {/* <!-- mega menu --> */}
                                                <ul class="megamenu megamenu--mega">
                                                    <li>
                                                        <h2 class="page-list-title"><Link to="/category/subcategory">Sub Category</Link></h2>
                                                        <ul>
                                                            <li><a href="shop-3-column.html"><span><Link to="/category/subcategory/subtwocategory">Sub two category</Link></span></a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <h2 class="page-list-title"><Link to="/category/subcategory">Sub Category</Link></h2>
                                                        <ul>
                                                            <li><a href="shop-3-column.html"><span><Link to="/category/subcategory/subtwocategory">Sub two category</Link></span></a></li>
                                                        </ul>
                                                    </li><li>
                                                        <h2 class="page-list-title"><Link to="/category/subcategory">Sub Category</Link></h2>
                                                        <ul>
                                                            <li><a href="shop-3-column.html"><span><Link to="/category/subcategory/subtwocategory">Sub two category</Link></span></a></li>
                                                        </ul>
                                                    </li>

                                                </ul>
                                            </li>


                                            <li class="has-children">
                                                <a href="#"><span>Category</span></a>
                                                {/* <!-- mega menu --> */}
                                                <ul class="megamenu megamenu--mega">
                                                    <li>
                                                        <h2 class="page-list-title"><Link to="/category/subcategory">Sub Category</Link></h2>
                                                        <ul>
                                                            <li><a href="shop-3-column.html"><span><Link to="/category/subcategory/subtwocategory">Sub two category</Link></span></a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <h2 class="page-list-title"><Link to="/category/subcategory">Sub Category</Link></h2>
                                                        <ul>
                                                            <li><a href="shop-3-column.html"><span><Link to="/category/subcategory/subtwocategory">Sub two category</Link></span></a></li>
                                                        </ul>
                                                    </li><li>
                                                        <h2 class="page-list-title"><Link to="/category/subcategory">Sub Category</Link></h2>
                                                        <ul>
                                                            <li><a href="shop-3-column.html"><span><Link to="/category/subcategory/subtwocategory">Sub two category</Link></span></a></li>
                                                        </ul>
                                                    </li>

                                                </ul>
                                            </li>


                                            <li class="has-children">
                                                <a href="#"><span>Category</span></a>
                                                {/* <!-- mega menu --> */}
                                                <ul class="megamenu megamenu--mega">
                                                    <li>
                                                        <h2 class="page-list-title"><Link to="/category/subcategory">Sub Category</Link></h2>
                                                        <ul>
                                                            <li><a href="shop-3-column.html"><span><Link to="/category/subcategory/subtwocategory">Sub two category</Link></span></a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <h2 class="page-list-title"><Link to="/category/subcategory">Sub Category</Link></h2>
                                                        <ul>
                                                            <li><a href="shop-3-column.html"><span><Link to="/category/subcategory/subtwocategory">Sub two category</Link></span></a></li>
                                                        </ul>
                                                    </li><li>
                                                        <h2 class="page-list-title"><Link to="/category/subcategory">Sub Category</Link></h2>
                                                        <ul>
                                                            <li><a href="shop-3-column.html"><span><Link to="/category/subcategory/subtwocategory">Sub two category</Link></span></a></li>
                                                        </ul>
                                                    </li>

                                                </ul>
                                            </li>


                                            <li class="">
                                                <Link to="/blogs"><span>Blog</span></Link>
                                            </li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div class="col-lg-3 col-lg-3 col-6">
                                <div class="header-right-side text-end">
                                    <div class="header-right-items  d-none d-md-block">
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleLoginModel}>
                                            <i class="icon-user"></i>
                                        </a>
                                    </div>


                                    <div class="header-right-items">
                                        <a href="javascript:void(0)" class=" header-cart minicart-btn toolbar-btn header-icon" onClick={handleKartToggle}>
                                            <i class="icon-bag2"></i>
                                            <span class="item-counter">3</span>
                                        </a>
                                    </div>
                                    <div class="header-right-items ">
                                        <a href="javascript:void(0)" class="search-icon" id="search-overlay-trigger" onClick={() => setSearchModel(!searchModel)}>
                                            <i class="icon-magnifier"></i>
                                        </a>
                                    </div>
                                    <div class="header-right-items">
                                        <a href="javascript:void(0)" class="mobile-navigation-icon" id="mobile-menu-trigger" onClick={handleToggle}>
                                            <i class="icon-menu"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <!-- Header Bottom Wrap End --> */}

            </div>














            {/* Mobile Menu Bar  */}
            <div class={`mobile-menu-overlay ${isToggle ? "active" : ""}`} id="mobile-menu-overlay">
                <div class="mobile-menu-overlay__inner">
                    <div class="mobile-menu-close-box text-start">
                        <span class="mobile-navigation-close-icon" id="mobile-menu-close-trigger" onClick={handleToggle}> <i class="icon-cross2"></i></span>
                    </div>
                    <div class="mobile-menu-overlay__body">

                        <nav class="offcanvas-navigation">
                            <ul>
                                <li class="has-children">
                                    <a href="#">Home</a>
                                </li>
                                <li class="has-children">
                                    <a href="#">Category</a>
                                    <ul class="sub-menu">
                                        <li class="has-children">
                                            <a href="#"><span>Sub category</span></a>
                                            <ul class="sub-menu">
                                                <li><a href="shop-3-column.html"><span>Sub two category</span></a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#"><span>Sub category</span></a>
                                            <ul class="sub-menu">
                                                <li><a href="shop-3-column.html"><span>Sub two category</span></a></li>
                                            </ul>
                                        </li>
                                        <li class="has-children">
                                            <a href="#"><span>Sub category</span></a>
                                            <ul class="sub-menu">
                                                <li><a href="shop-3-column.html"><span>Sub two category</span></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="has-children">
                                    <a href="#">Blogs</a>
                                </li>
                                <li class="has-children">
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </nav>

                        <div class="mobile-menu-contact-info section-space--mt_60">
                            <p>69 Halsey St, Ny 10002, New York, United States <br />support.center@unero.co <br />(0091) 8547 632521</p>
                        </div>

                        <div class="mobile-menu-social-share section-space--mt_60">
                            <h6>Follow US On Socials</h6>
                            <ul class="social-share">
                                <li><a href="#"><i class="social social_facebook"></i></a></li>
                                <li><a href="#"><i class="social social_twitter"></i></a></li>
                                <li><a href="#"><i class="social social_googleplus"></i></a></li>
                                <li><a href="#"><i class="social social_linkedin"></i></a></li>
                                <li><a href="#"><i class="social social_pinterest"></i></a></li>
                            </ul>
                        </div>


                    </div>


                </div>


            </div>

            {/* Mini Cart  */}
            <div class={`offcanvas-minicart_wrapper ${isKart ? "open" : ""}`} id="miniCart">
                <div class="offcanvas-menu-inner">
                    <div class="close-btn-box">
                        <a href="#" class="btn-close" onClick={handleKartToggle}><i class="icon-cross2"></i></a>
                    </div>
                    <div class="minicart-content">
                        <ul class="minicart-list">
                            <li class="minicart-product">
                                <a class="product-item_remove" href="javascript:void(0)"><i class="icon-cross2"></i></a>
                                <a class="product-item_img">
                                    <img class="img-fluid" src="assets/images/product/small/cart-01.webp" alt="Product Image" />
                                </a>
                                <div class="product-item_content">
                                    <a class="product-item_title" href="product-details.html">Plant pots</a>
                                    <label>Qty : <span>1</span></label>
                                    <label class="product-item_quantity">Price: <span> $20.00</span></label>
                                </div>
                            </li>
                            <li class="minicart-product">
                                <a class="product-item_remove" href="javascript:void(0)"><i class="icon-cross2"></i></a>
                                <a class="product-item_img">
                                    <img class="img-fluid" src="assets/images/product/small/cart-02.webp" alt="Product Image" />
                                </a>
                                <div class="product-item_content">
                                    <a class="product-item_title" href="product-details.html">Teapot with black tea</a>
                                    <label>Qty : <span>1</span></label>
                                    <label class="product-item_quantity">Price: <span> $20.00</span></label>
                                </div>
                            </li>
                            <li class="minicart-product">
                                <a class="product-item_remove" href="javascript:void(0)"><i class="icon-cross2"></i></a>
                                <a class="product-item_img">
                                    <img class="img-fluid" src="assets/images/product/small/cart-03.webp" alt="Product Image" />
                                </a>
                                <div class="product-item_content">
                                    <a class="product-item_title" href="product-details.html">Simple Chair</a>
                                    <label>Qty : <span>1</span></label>
                                    <label class="product-item_quantity">Price: <span> $20.00</span></label>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div class="minicart-item_total">
                        <span class="font-weight--reguler">Subtotal:</span>
                        <span class="ammount font-weight--reguler">$60.00</span>
                    </div>
                    <div class="minicart-btn_area">
                        <a href="cart.html" class="btn btn--full btn--border_1">View cart</a>
                    </div>
                    <div class="minicart-btn_area">
                        <a href="checkout.html" class="btn btn--full btn--black">Checkout</a>
                    </div>
                </div>

                <div class={`global-overlay ${isKart ? "overlay-open" : ""}`}></div>
            </div>

            {/* Scroll To Top  */}
            <a href="javascript:void(0)" class={`scroll-top ${scrollTop ? "show" : ""}`} id="scroll-top"
                onClick={handleScrollToTop}>
                <i class="arrow-top icon-arrow-up"></i>
                <i class="arrow-bottom icon-arrow-up"></i>
            </a>

            {/* Login and Register Model  */}
            <div class={`header-login-register-wrapper modal fade ${loginModel ? "show" : ""}`} id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true" style={loginModel ? { display: "block", backgroundColor: "rgb(0 0 0 / 50%)" } : {}}>
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-box-wrapper">
                            <div class="helendo-tabs">
                                <ul class="nav" role="tablist">
                                    <li class={`tab__item nav-item ${modelId == 1 ? "active" : ""}`} style={{ width: "40%" }}>
                                        <a class={`nav-link ${modelId == 1 ? "active" : ""}`} data-bs-toggle="tab" href="javascript:void(0)" role="tab" onClick={() => handleToggleModel(1)}>Login</a>
                                    </li>
                                    <li class={`tab__item nav-item ${modelId == 2 ? "active" : ""}`} style={{ width: "40%" }}>
                                        <a class={`nav-link ${modelId == 2 ? "active" : ""}`} data-bs-toggle="tab" href="javascript:void(0)" role="tab" onClick={() => handleToggleModel(2)}>Our Register</a>
                                    </li>
                                    <li class="tab__item nav-item" style={{ width: "20%" }}>
                                        <a class="nav-link" data-bs-toggle="tab" href="javascript:void(0)" role="tab" onClick={handleLoginModel}><i class="fa-solid fa-xmark"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content content-modal-box">

                                {
                                    modelId == 1 && (
                                        <div class="tab-pane fade show active" id="tab_list_06" role="tabpanel">
                                            <form action="#" class="account-form-box">
                                                <h6>Login your account</h6>
                                                <div class="single-input">
                                                    <input type="text" placeholder="Username" />
                                                </div>
                                                <div class="single-input">
                                                    <input type="password" placeholder="Password" />
                                                </div>
                                                <div class="checkbox-wrap mt-10">
                                                    <label class="label-for-checkbox inline mt-15">
                                                        <input class="input-checkbox" name="rememberme" type="checkbox" id="rememberme" value="forever" /> <span>Remember me</span>
                                                    </label>
                                                    <a href="#" class=" mt-10">Lost your password?</a>
                                                </div>
                                                <div class="button-box mt-25">
                                                    <a href="#" class="btn btn--full btn--black">Log in</a>
                                                </div>
                                            </form>
                                        </div>
                                    )
                                }


                                {
                                    modelId == 2 && (
                                        <div class="tab-pane fade show active" id="tab_list_07" role="tabpanel">

                                            <form action="#" class="account-form-box">
                                                <h6>Register An Account</h6>
                                                <div class="single-input">
                                                    <input type="text" placeholder="Username" />
                                                </div>
                                                <div class="single-input">
                                                    <input type="text" placeholder="Email address" />
                                                </div>
                                                <div class="single-input">
                                                    <input type="password" placeholder="Password" />
                                                </div>

                                                <div class="button-box mt-25">
                                                    <a href="#" class="btn btn--full btn--black">Register</a>
                                                </div>
                                            </form>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div >


            {/* Search Model  */}
            <div class={`search-overlay ${searchModel ? "active" : ""}`} id="search-overlay">
                <div class="search-overlay__header">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-8">
                                <div class="search-title">
                                    <h4 class="font-weight--normal">Search</h4>
                                </div>
                            </div>
                            <div class="col-md-6 ms-auto col-4">
                                {/* <!-- search content --> */}
                                <div class="search-content text-end">
                                    <span class="mobile-navigation-close-icon" id="search-close-trigger" onClick={() => setSearchModel(!searchModel)}><i class="icon-cross"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="search-overlay__inner">
                    <div class="search-overlay__body">
                        <div class="search-overlay__form">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-9 m-auto">
                                        <form action="#">
                                            <div class="product-cats section-space--mb_60 text-center">
                                                <label> <input type="radio" name="product_cat" value="" checked="checked" /> <span class="line-hover">All</span> </label>
                                                <label> <input type="radio" name="product_cat" value="decoration" /> <span class="line-hover">Decoration</span> </label>
                                                <label> <input type="radio" name="product_cat" value="furniture" /> <span class="line-hover">Furniture</span> </label>
                                                <label> <input type="radio" name="product_cat" value="table" /> <span class="line-hover">Table</span> </label> <label> <input type="radio" name="product_cat" value="chair" /> <span class="line-hover">Chair</span> </label>
                                            </div>
                                            <div class="search-fields">
                                                <input type="text" placeholder="Search" />
                                                <button class="submit-button"><i class="icon-magnifier"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header