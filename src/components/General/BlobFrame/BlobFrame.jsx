import { useId } from "react";
import "./BlobFrame.css";

export default function BlobFrame({ children, className = "", ratio = "1 / 1", blobPath }) {
    const rawId = useId().replace(/:/g, "");
    const clipId = `blob-clip-${rawId}`;

    return (
        <div className={`blob-frame ${className}`} style={{ aspectRatio: ratio }}>
            <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
                <defs>
                    <clipPath id={clipId} clipPathUnits="objectBoundingBox">
                        <path transform="scale(0.005) translate(100 100)" d={blobPath} />
                    </clipPath>
                </defs>
            </svg>

            <div className="blob-frame__content" style={{ clipPath: `url(#${clipId})` }}>
                {children}
            </div>
        </div>
    );
}