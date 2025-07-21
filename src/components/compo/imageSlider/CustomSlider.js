'use client';

import {
    Box,
    CircularProgress,
    IconButton,
    Paper,
    Typography,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Pause, PlayArrow } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { keyframes } from '@emotion/react';

const variants = {
    enter: (direction) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
    }),
};

const growBar = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

const BannerSlider = ({
    slides,
    autoPlay = true,
    autoPlayInterval = 5000,
    showArrows = true,
    showDots = true,
    playPauseButton = true,
    pauseOnHover = false,
    height = 500 || '100dvh'
}) => {
    const [[page, direction], setPage] = useState([0, 0]);
    const [loading, setLoading] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);

    const imageIndex = ((page % slides.length) + slides.length) % slides.length;
    const currentSlide = slides[imageIndex];
    const currentImageUrl = `${currentSlide.ImgUrl}`;

    const paginate = (newDirection) => {
        const nextPage = page + newDirection;
        const nextIndex = ((nextPage % slides.length) + slides.length) % slides.length;
        const nextImageUrl = `${slides[nextIndex].ImgUrl}`;

        setLoading(true);

        const img = new Image();
        img.src = nextImageUrl;
        img.onload = () => {
            setPage([nextPage, newDirection]);
            setLoading(false);
        };
    };

    useEffect(() => {
        if ((playPauseButton && !isPlaying) || isHovered) return;
        const duration = currentSlide.duration || autoPlayInterval;
        const interval = setInterval(() => paginate(1), duration);
        return () => clearInterval(interval);
    }, [page, isHovered, isPlaying]);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'ArrowLeft') paginate(-1);
            if (e.key === 'ArrowRight') paginate(1);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [page]);

    const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
    const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
    const handleTouchEnd = () => {
        if (touchStartX === null || touchEndX === null) return;
        const distance = touchStartX - touchEndX;
        const threshold = 50;
        if (distance > threshold) paginate(1);
        else if (distance < -threshold) paginate(-1);
        setTouchStartX(null);
        setTouchEndX(null);
    };

    return (
        <Box
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => pauseOnHover && setIsHovered(true)}
            onMouseLeave={() => pauseOnHover && setIsHovered(false)}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                mx: 'auto',
                height: { xs: 150, md: height },
                width: '100%',
                backgroundColor: 'gray',
                touchAction: 'pan-y',
            }}
        >
            {/* Loader */}
            {loading && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1,
                    }}
                >
                    <Paper sx={{
                        px: 5,
                        py: 2,
                        boxShadow: 0,
                        bgcolor: "rgba(243, 243, 243, 0.77)"
                    }}
                        variant='outlined'>
                        <CircularProgress />
                    </Paper>
                </Box>
            )}

            {/* Main image */}
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={currentImageUrl}
                    alt={currentSlide.altText}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6 }}
                    onLoad={() => setLoading(false)}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: "cover",
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: loading ? 0 : 1,
                        transition: 'opacity 0.3s ease-in-out',
                        userSelect: 'none',
                    }}
                />
            </AnimatePresence>

            {/* Caption */}
            {(currentSlide.caption || currentSlide.caption.title || currentSlide.caption.subtitle || currentSlide.caption.desc) && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        color: 'white',
                        transform: "translate(-50%, -50%)",
                        zIndex: 2,
                        backgroundColor: '#e9e9edd0',
                        p: { xs: 2, md: 3 },
                        borderRadius: 2,
                        textAlign: "center",
                        maxWidth: "650px"
                    }}
                >
                    {currentSlide.caption.title && (
                        <Typography variant="h5" sx={{
                            fontSize: {
                                xs: "calc(0.6rem + 1vw)",
                                md: "calc(0.8rem + 1vw)",
                            },
                            color: "#1E4188",
                            fontFamily: "LibreBaskerville",
                            lineHeight: 1.2,
                            mb: { xs: 1, md: 1 },
                            textAlign: "center",
                        }}>{currentSlide.caption.title}</Typography>
                    )}
                    {currentSlide.caption.subtitle && (
                        <Typography sx={{
                            fontSize: {
                                xs: "calc(0.3rem + 1vw)",
                                md: "calc(0.4rem + 1vw)",
                            },
                            color: "#1E4188",
                            fontFamily: "LibreBaskerville",
                            lineHeight: 1.2,
                            mt: { xs: -1, md: 0 },
                            mb: 2,
                            textAlign: "center",
                        }}
                            variant={"subtitle1"} >{currentSlide.caption.subtitle}</Typography>
                    )}
                    {currentSlide.caption.desc && (
                        <Typography variant="body1" sx={{
                            color: "black",
                            pl: 1,
                            fontSize: {
                                xs: "calc(0.4rem + 1vw)",
                                md: "calc(0.2rem + 1vw)",
                            },
                            display: "block",
                            textDecoration: "none",
                            fontFamily: "BreeSerif",
                            lineHeight: 1.2,
                            textAlign: "center",
                        }}>{currentSlide.caption.desc}</Typography>
                    )}
                </Box>
            )}

            {/* Arrows */}
            {showArrows && (
                <>
                    <IconButton
                        onClick={() => paginate(-1)}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: 10,
                            zIndex: 2,
                            color: 'white',
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            transform: 'translateY(-50%)',
                            '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton
                        onClick={() => paginate(1)}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            right: 10,
                            zIndex: 2,
                            color: 'white',
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            transform: 'translateY(-50%)',
                            '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
                        }}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                </>
            )}

            {/* Dots */}
            {showDots && (
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 20,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: 1,
                        zIndex: 3,
                        alignItems: 'center',
                    }}
                >
                    {slides.map((_, idx) => (
                        <Box
                            key={idx}
                            onClick={() => {
                                if (idx !== imageIndex) {
                                    setPage([idx, idx > imageIndex ? 1 : -1]);
                                    setLoading(true);
                                }
                            }}
                            sx={{
                                width: 100,
                                borderRadius: 10,
                                overflow: 'hidden',
                                border: idx === imageIndex ? '1px solid #1976d2' : '1px solid #c5c1c1dd',
                                cursor: 'pointer',
                                bgcolor: '#a7a7a7e3',
                            }}
                        >
                            <Box
                                sx={{
                                    height: 5,
                                    backgroundColor: 'primary.main',
                                    width: idx === imageIndex ? '100%' : '0%',
                                    animation:
                                        idx === imageIndex && isPlaying && !isHovered
                                            ? `${growBar} ${currentSlide.duration || autoPlayInterval}ms linear forwards`
                                            : 'none',
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            )}

            {/* Play / Pause */}
            {playPauseButton && (
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 20,
                        right: 20,
                        zIndex: 3,
                    }}
                >
                    <IconButton
                        onClick={() => setIsPlaying(!isPlaying)}
                        sx={{
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'rgba(0,0,0,0.8)',
                            },
                        }}
                    >
                        {isPlaying ? <Pause /> : <PlayArrow />}
                    </IconButton>
                </Box>
            )}
        </Box>
    );
};

export default BannerSlider;
