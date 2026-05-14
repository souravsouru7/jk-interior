"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";

const FRAME_COUNT = 40;
const FRAME_PATH = "/4k_wallpapers_enhanced";
const MAX_CANVAS_WIDTH = 1920;
const MAX_CANVAS_HEIGHT = 1080;
const MOBILE_QUERY = "(max-width: 767px)";

function frameSrc(index) {
  return `${FRAME_PATH}/ezgif-frame-${String(index).padStart(3, "0")}_4k_enhanced.jpg`;
}

function getCanvasContext(canvas) {
  return canvas.getContext("2d", { alpha: false, desynchronized: true });
}

function drawCover(ctx, image, canvas) {
  const canvasRatio = canvas.width / canvas.height;
  const imageRatio = image.naturalWidth / image.naturalHeight;

  let drawWidth = canvas.width;
  let drawHeight = canvas.height;

  if (imageRatio < canvasRatio) {
    drawHeight = canvas.width / imageRatio;
  } else {
    drawWidth = canvas.height * imageRatio;
  }

  const x = (canvas.width - drawWidth) / 2;
  const y = (canvas.height - drawHeight) / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "medium";
  ctx.drawImage(image, x, y, drawWidth, drawHeight);
}

const storyBeats = [
  {
    title: "BUILT FOR PRECISION.",
    subtitle: "Every material, curated.",
    className: "items-start text-left md:pl-[5vw]",
    titleOpacity: [0, 0, 0.18, 0.3],
    isOpening: true,
  },
  {
    title: "WE ARCHITECT SPACE.",
    subtitle: "Light, proportion, and function come first.",
    className: "items-start text-left md:pl-[7vw]",
    titleOpacity: [0.26, 0.34, 0.5, 0.58],
  },
  {
    title: "LAYERED DESIGN.",
    subtitle: "Function meets form.",
    className: "items-end text-right md:pr-[7vw]",
    titleOpacity: [0.55, 0.62, 0.8, 0.87],
  },
  {
    title: "YOUR MASTERPIECE.",
    subtitle: "Ready for living.",
    className: "items-center text-center",
    titleOpacity: [0.84, 0.91, 1, 1],
  },
];

function StoryBeat({ beat, progress }) {
  const opacity = useTransform(progress, beat.titleOpacity, [0, 1, 1, 0]);
  const y = useTransform(progress, beat.titleOpacity, beat.isOpening ? [0, 0, 0, -18] : [28, 0, 0, -20]);

  return (
    <motion.div
      style={{ opacity, y }}
      className={`pointer-events-none absolute inset-x-5 z-20 flex flex-col md:inset-x-10 ${
        beat.isOpening ? "top-[12vh] md:top-[11vh]" : "top-[18vh] md:top-[20vh]"
      } ${beat.className}`}
    >
      <div className={beat.isOpening ? "max-w-[920px]" : "max-w-[780px]"}>
        <h2
          className={`font-semibold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.38)] ${
            beat.isOpening
              ? "max-w-[10ch] text-[clamp(3.1rem,16vw,5.2rem)] leading-[0.88] md:text-[clamp(4.15rem,9.8vw,10rem)]"
              : "max-w-[12ch] text-[clamp(2.45rem,13vw,4.8rem)] leading-[0.9] md:text-[clamp(2.6rem,8.4vw,8.2rem)]"
          }`}
        >
          {beat.title}
        </h2>
        <p
          className={`mt-5 max-w-[31rem] font-semibold leading-snug md:mt-7 ${
            beat.isOpening
              ? "text-[clamp(1rem,1.55vw,1.45rem)] text-neutral-950"
              : "text-[clamp(1rem,2vw,1.45rem)] text-white/86 drop-shadow-[0_2px_18px_rgba(0,0,0,0.32)]"
          }`}
        >
          {beat.subtitle}
        </p>
      </div>
    </motion.div>
  );
}

export default function InteriorScroll() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const imagesRef = useRef([]);
  const frameRef = useRef(0);
  const rafRef = useRef(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 34,
    mass: 0.22,
    restDelta: 0.0001,
  });

  const frameProgress = useSpring(scrollYProgress, {
    stiffness: 420,
    damping: 42,
    mass: 0.16,
    restDelta: 0.0001,
  });

  const sceneScale = useTransform(smoothProgress, [0, 0.82, 1], [1.02, 1, 0.985]);

  const frameIndex = useTransform(frameProgress, [0, 1], [0, FRAME_COUNT - 1]);
  const frameUrls = useMemo(
    () => Array.from({ length: FRAME_COUNT }, (_, index) => frameSrc(index + 1)),
    []
  );

  useEffect(() => {
    let cancelled = false;
    let loaded = 0;
    const images = new Array(FRAME_COUNT);
    const isMobile = window.matchMedia(MOBILE_QUERY).matches;
    const concurrency = isMobile ? 4 : 8;
    let nextIndex = 0;

    const loadFrame = (index) =>
      new Promise((resolve) => {
        const image = new Image();
        image.decoding = "async";
        image.src = frameUrls[index];

        image.onload = () => {
          images[index] = image;
          resolve();
        };

        image.onerror = () => {
          resolve();
        };
      });

    const loadNext = () => {
      if (cancelled || nextIndex >= FRAME_COUNT) return;

      const index = nextIndex;
      nextIndex += 1;

      loadFrame(index).then(() => {
        if (cancelled) return;

        loaded += 1;
        setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100));

        if (loaded === FRAME_COUNT) {
          imagesRef.current = images;
          setIsReady(true);
          return;
        }

        loadNext();
      });
    };

    for (let index = 0; index < concurrency; index += 1) {
      loadNext();
    }

    return () => {
      cancelled = true;
    };
  }, [frameUrls]);

  /*
    The sequence still preloads every frame before the canvas opens.
    Loading is batched so phones do not decode all 40 enhanced images at the same moment.
  */

  /*
    Kept separate from preload: canvas sizing uses viewport pixels, not source image pixels.
  */

  useEffect(() => {
    if (!isReady) return undefined;

    const canvas = canvasRef.current;
    const ctx = canvas ? getCanvasContext(canvas) : null;
    if (!canvas || !ctx) return undefined;
    ctxRef.current = ctx;

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = window.matchMedia(MOBILE_QUERY).matches;
      const maxWidth = isMobile ? 900 : MAX_CANVAS_WIDTH;
      const maxHeight = isMobile ? 1200 : MAX_CANVAS_HEIGHT;
      const dpr = Math.min(
        window.devicePixelRatio || 1,
        isMobile ? 0.9 : 1,
        maxWidth / width,
        maxHeight / height
      );

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const image = imagesRef.current[frameRef.current];
      if (image) drawCover(ctx, image, canvas);
    };

    resize();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isReady]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (!isReady) return;

    const imageIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(latest)));
    if (imageIndex === frameRef.current) return;

    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    const image = imagesRef.current[imageIndex];
    if (!canvas || !ctx || !image) return;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      frameRef.current = imageIndex;
      drawCover(ctx, image, canvas);
    });
  });

  useEffect(() => {
    if (!isReady) return;

    const canvas = canvasRef.current;
    const ctx = ctxRef.current || (canvas ? getCanvasContext(canvas) : null);
    const firstFrame = imagesRef.current[0];
    if (ctx) ctxRef.current = ctx;

    if (canvas && ctx && firstFrame) {
      drawCover(ctx, firstFrame, canvas);
    }
  }, [isReady]);

  return (
    <section ref={sectionRef} className="relative h-[250vh] bg-[#ECECEC] text-neutral-950 md:h-[285vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-[#ECECEC] supports-[height:100svh]:h-[100svh]">
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.18),rgba(0,0,0,0.04)_43%,rgba(0,0,0,0.18)),linear-gradient(180deg,rgba(0,0,0,0.28),transparent_34%,rgba(0,0,0,0.18))]" />

        {!isReady && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-30 flex flex-col justify-end overflow-hidden bg-neutral-950 text-white"
          >
            <div className="absolute inset-0 opacity-45">
              <img
                src={frameUrls[0]}
                alt=""
                aria-hidden="true"
                className="h-full w-full scale-105 object-cover blur-sm"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22),rgba(0,0,0,0.72))]" />
            <div className="relative z-10 w-full px-5 pb-12 md:px-10 md:pb-14">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d8b99c]">
                  JK Interiors
                </p>
                <h1 className="mt-4 text-[clamp(2.7rem,14vw,5rem)] font-semibold leading-[0.9] tracking-tight md:text-[clamp(3rem,8vw,7rem)]">
                  Preparing the space.
                </h1>
                <div className="mt-8 flex items-center gap-5">
                  <div className="h-px flex-1 overflow-hidden bg-white/24">
                    <motion.div
                      className="h-full bg-[#d8b99c]"
                      animate={{ width: `${loadProgress}%` }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                    />
                  </div>
                  <p className="w-12 text-right text-sm font-semibold text-white/72">
                    {loadProgress}%
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.canvas
          ref={canvasRef}
          aria-label="Luxury interior room assembling from concrete shell to finished design"
          style={{ scale: sceneScale }}
          className={`absolute inset-0 h-full w-full transform-gpu transition-opacity duration-300 will-change-transform ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
        />

        {storyBeats.map((beat) => (
          <StoryBeat key={beat.title} beat={beat} progress={smoothProgress} />
        ))}

        <div className="pointer-events-none absolute bottom-10 left-5 z-20 block max-w-[24rem] text-white md:left-10 md:bottom-12">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-white/68">
            JK Interiors / Hyderabad
          </p>
          <p className="mt-3 text-sm font-medium leading-relaxed text-white/78 md:text-base">
            A complete transformation from raw shell to a finished living space, guided by material,
            proportion, and light.
          </p>
        </div>

        <div className="pointer-events-none absolute bottom-10 right-5 z-20 hidden text-right text-white md:block">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-white/68">
            40 frame sequence
          </p>
          <p className="mt-3 text-sm font-medium text-white/78">Scroll-built luxury interior</p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 bg-gradient-to-t from-[#ECECEC] to-transparent md:h-48" />
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-white/80">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.34em]">Scroll</span>
          <span className="h-10 w-px overflow-hidden bg-white/35">
            <motion.span
              className="block h-5 w-px bg-white"
              animate={{ y: [-20, 40] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
