import React, { useState } from "react";
import "./MealCard.css";

export default function MealCard({ meal }) {
    const [hovered, setHovered] = useState(false);
    const { image1, image2, title, price } = meal;

    return (
        <div className="meal-card">
            <div
                className="meal-card-image-wrap"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <img
                    src={import.meta.env.BASE_URL + image1}
                    alt={title}
                    className={`meal-card-image meal-card-image--base ${hovered ? "is-hidden" : ""
                        }`}
                />
                <img
                    src={import.meta.env.BASE_URL + image2}
                    alt={title}
                    className={`meal-card-image meal-card-image--hover ${hovered ? "is-visible" : ""
                        }`}
                />
            </div>

            <h3 className="meal-card-title">{title}</h3>
            <p className="meal-card-price">{price}</p>
        </div>
    );
}