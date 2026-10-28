import React, { useEffect, useRef, useState } from "react";

/**
 * Renders very large CMS photos smoothly.
 *
 * Browsers shrink an image to its display size in a single step. When the
 * source is many times bigger than the slot (e.g. a 4160px portrait in a
 * 480px card) that single step aliases fine detail into visible grain.
 * Here the image is halved repeatedly on a canvas (each step averages the
 * pixels cleanly) down to roughly `targetWidth`, then the canvas is shown in
 * place of the <img>. `object-fit` works on canvas, so the same classes apply.
 *
 * The canvas is display-only, so cross-origin images without CORS headers
 * still work (a "tainted" canvas can be drawn, just not exported).
 */

const cache = new Map(); // src -> Promise<HTMLCanvasElement | null>

const downscale = (src, targetWidth) => {
    const key = `${src}@${targetWidth}`;
    if (cache.has(key)) return cache.get(key);

    const job = new Promise((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
            let w = img.naturalWidth;
            let h = img.naturalHeight;
            // Small enough already: the browser handles <=2x scaling fine.
            if (!w || w <= targetWidth * 2) return resolve(null);

            let current = img;
            while (w / 2 >= targetWidth) {
                w = Math.round(w / 2);
                h = Math.round(h / 2);
                const step = document.createElement("canvas");
                step.width = w;
                step.height = h;
                const ctx = step.getContext("2d");
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = "high";
                ctx.drawImage(current, 0, 0, w, h);
                current = step;
            }
            resolve(current);
        };
        img.onerror = () => resolve(null);
        img.src = src;
    });

    cache.set(key, job);
    return job;
};

export default function SmoothImage({
    src,
    alt,
    className = "",
    targetWidth = 1000,
    ...imgProps
}) {
    const canvasRef = useRef(null);
    const [source, setSource] = useState(null);

    useEffect(() => {
        let cancelled = false;
        setSource(null);
        downscale(src, targetWidth).then((result) => {
            if (!cancelled) setSource(result);
        });
        return () => {
            cancelled = true;
        };
    }, [src, targetWidth]);

    // Copy the cached, downscaled bitmap into this instance's canvas.
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!source || !canvas) return;
        canvas.width = source.width;
        canvas.height = source.height;
        canvas.getContext("2d").drawImage(source, 0, 0);
    }, [source]);

    if (source) {
        return (
            <canvas
                ref={canvasRef}
                role="img"
                aria-label={alt}
                className={className}
            />
        );
    }

    return <img src={src} alt={alt} className={className} {...imgProps} />;
}

