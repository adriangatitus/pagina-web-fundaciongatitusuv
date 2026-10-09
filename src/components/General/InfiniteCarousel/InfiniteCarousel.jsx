import { useCallback, useEffect, useMemo, useRef } from "react";

import "./InfiniteCarousel.css";

export default function InfiniteCarousel({
    items,
    renderItem,
    getKey,
    speed = 30,
    gap = 16,
    ariaLabel = "Carrusel",
}) {
    const track = useMemo(() => [...items, ...items, ...items], [items]);

    const keyFor = (item, i) =>
        getKey ? `${getKey(item, i)}-${i}` : `item-${i}`;

    const containerRef = useRef(null);
    const trackRef = useRef(null);

    const positionRef = useRef(0);
    const oneThirdRef = useRef(0);
    const pausedRef = useRef(false);
    const draggingRef = useRef(false);
    const dragStartXRef = useRef(0);
    const dragStartPosRef = useRef(0);
    const draggedRef = useRef(false);
    const rafRef = useRef(null);
    const lastTimeRef = useRef(null);
    const reducedMotionRef = useRef(false);

    const applyTransform = useCallback(() => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
        }
    }, []);

    const wrapPosition = useCallback(() => {
        const oneThird = oneThirdRef.current;
        if (!oneThird) return;
        // Mantiene position dentro de (-oneThird, 0], reciclando el track
        // triplicado para que el loop sea imperceptible en cualquier dirección.
        while (positionRef.current <= -oneThird) positionRef.current += oneThird;
        while (positionRef.current > 0) positionRef.current -= oneThird;
    }, []);


    useEffect(() => {
        const node = trackRef.current;
        if (!node) return;

        const measure = () => {
            oneThirdRef.current = node.scrollWidth / 3;
        };
        measure();

        const observer = new ResizeObserver(measure);
        observer.observe(node);
        return () => observer.disconnect();
    }, [track]);

    useEffect(() => {
        const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
        reducedMotionRef.current = mql.matches;
        const onChange = (e) => {
            reducedMotionRef.current = e.matches;
        };
        mql.addEventListener?.("change", onChange);
        return () => mql.removeEventListener?.("change", onChange);
    }, []);

    useEffect(() => {
        const speedPxPerSecond = () =>
            oneThirdRef.current > 0 ? oneThirdRef.current / speed : 0;

        const tick = (timestamp) => {
            if (lastTimeRef.current == null) lastTimeRef.current = timestamp;
            const dt = (timestamp - lastTimeRef.current) / 1000;
            lastTimeRef.current = timestamp;

            const shouldAutoplay =
                !pausedRef.current && !draggingRef.current && !reducedMotionRef.current;

            if (shouldAutoplay) {
                positionRef.current -= speedPxPerSecond() * dt;
            }

            wrapPosition();
            applyTransform();

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            lastTimeRef.current = null;
        };
    }, [speed, applyTransform, wrapPosition]);

    const handlePointerDown = (e) => {
        // Solo botón principal para mouse; touch/pen siempre disparan botón 0.
        if (e.button !== undefined && e.button !== 0) return;

        draggingRef.current = true;
        draggedRef.current = false;
        dragStartXRef.current = e.clientX;
        dragStartPosRef.current = positionRef.current;
        e.currentTarget.setPointerCapture?.(e.pointerId);
    };

    const handlePointerMove = (e) => {
        if (!draggingRef.current) return;
        const dx = e.clientX - dragStartXRef.current;
        if (Math.abs(dx) > 3) draggedRef.current = true;
        positionRef.current = dragStartPosRef.current + dx;
    };

    const endDrag = (e) => {
        if (!draggingRef.current) return;
        draggingRef.current = false;
        e.currentTarget.releasePointerCapture?.(e.pointerId);
    };

    const handleClickCapture = (e) => {
        if (draggedRef.current) {
            e.preventDefault();
            e.stopPropagation();
            draggedRef.current = false;
        }
    };

    return (
        <div
            ref={containerRef}
            className="carousel"
            role="region"
            aria-label={ariaLabel}
            style={{ "--carousel-speed": `${speed}s`, "--carousel-gap": `${gap}px` }}
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={endDrag}
            onClickCapture={handleClickCapture}
            onDragStart={(e) => e.preventDefault()}
        >
            <div className="carousel__track" ref={trackRef}>
                {track.map((item, i) => (
                    <div className="carousel__item" key={keyFor(item, i)}>
                        {renderItem(item, i)}
                    </div>
                ))}
            </div>
        </div>
    );
}