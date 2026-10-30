import "./ImagePair.css";

export default function ImagePair({
    firstImage,
    secondImage,
    gap = "1.5rem",
    radius = "1.25rem",
    maxWidth = "900px",
    staggered = true,
    className = "",
}) {
    const images = [firstImage, secondImage];

    return (
        <div
            className={`image-pair ${staggered ? "image-pair--staggered" : ""} ${className}`}
            style={{
                "--pair-gap": gap,
                "--pair-radius": radius,
                "--pair-max-width": maxWidth,
            }}
        >
            {images.map((img, i) =>
                img?.src ? (
                    <figure className="image-pair__item" key={i}>
                        <img
                            className="image-pair__img"
                            src={img.src}
                            alt={img.alt || ""}
                            loading="lazy"
                            decoding="async"
                        />
                    </figure>
                ) : null
            )}
        </div>
    );
}
