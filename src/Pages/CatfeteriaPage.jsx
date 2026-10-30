import { Navbar, Footer, Catalog, ParallaxSection, ScreenSlider, InfiniteCarousel, MealCard, ImagePair } from "../components"

import { PRODUCTS, SLIDER_CATFETERIA_ITEMS } from "../data";

import "./CatfeteriaPage.css";

const CatfeteriaPage = () => {
    return (
        <>
            <Navbar />
            <ScreenSlider items={SLIDER_CATFETERIA_ITEMS} />
            <Catalog />
            <section id="catfeteria_content">
                <div className="section__header">
                    <p className="eyebrow">Nuestros</p>
                    <h2 className="section__title">Productos</h2>
                </div>
            </section>
            <ImagePair
                firstImage={{ src: "img/Menu1.png", alt: "Menu 1" }}
                secondImage={{ src: "img/Menu2.png", alt: "Menu 2" }}
            />
            <Footer />
        </>
    )
}

export default CatfeteriaPage
