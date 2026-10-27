import { Navbar, Footer, Catalog, ParallaxSection, ScreenSlider, InfiniteCarousel, MealCard } from "../components"

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
            <InfiniteCarousel
                items={PRODUCTS}
                getKey={(cat) => cat.title}
                ariaLabel=""
                speed={25}
                renderItem={(cat) => <MealCard meal={cat} />}
            />
            <Footer />
        </>
    )
}

export default CatfeteriaPage
