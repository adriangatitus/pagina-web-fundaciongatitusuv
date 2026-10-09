import "./InfographicItem.css";

export default function InfographicItem({ title, body, direction = "left", image }) {
    return (
        <section className={`infographic-item infographic-item--${direction}`}>
            <div className="infographic-item__inner">
                <div className="infographic-item__image-wrap">
                    <img
                        src={import.meta.env.BASE_URL + image}
                        alt={title}
                        className="infographic-item__image"
                        loading="lazy"
                    />
                </div>

                <div className="infographic-item__text-wrap">
                    <h3 className="infographic-item__title">{title}</h3>
                    <p className="infographic-item__body">{body}</p>
                </div>
            </div>
        </section>
    );
}
