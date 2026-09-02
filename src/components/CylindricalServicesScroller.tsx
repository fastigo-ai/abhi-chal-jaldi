import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ServiceType } from "@/data/services";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Star 
} from "lucide-react";

interface CylindricalServicesScrollerProps {
  services: ServiceType[];
  compact?: boolean;
}

export const CylindricalServicesScroller: React.FC<CylindricalServicesScrollerProps> = ({ 
  services,
  compact = true 
}) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const [tiltOffset, setTiltOffset] = useState({ x: 0, y: 0 });

  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const dragDistanceRef = useRef(0);

  const totalItems = services.length;

  // Responsive geometry calculations
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = viewportWidth < 640;
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024;

  // Card dimensions matching screenshot proportions
  const cardWidth = isMobile ? 240 : isTablet ? 255 : 270;
  const cardHeight = isMobile ? 345 : isTablet ? 365 : 390;
  const radiusX = isMobile ? 165 : isTablet ? 195 : 225;
  const radiusZ = isMobile ? 145 : isTablet ? 175 : 205;
  const anglePerItem = 360 / totalItems;

  // Step functions
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToSlide = useCallback((index: number) => {
    const normalized = (index % totalItems + totalItems) % totalItems;
    setCurrentIndex(normalized);
  }, [totalItems]);

  // Autoplay handler
  useEffect(() => {
    if (isPlaying && !isHovered && !isDragging) {
      autoPlayTimerRef.current = setInterval(() => {
        nextSlide();
      }, 3500);
    }
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPlaying, isHovered, isDragging, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isHovered) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isHovered, prevSlide, nextSlide]);

  // Drag & Touch gestures
  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
    setDragDelta(0);
    dragDistanceRef.current = 0;
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDragging) return;
    const delta = clientX - dragStartX;
    dragDistanceRef.current = Math.abs(delta);
    setDragDelta(delta);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 35;
    if (dragDelta < -threshold) {
      nextSlide();
    } else if (dragDelta > threshold) {
      prevSlide();
    }
    setDragDelta(0);
  };

  // Wheel / Trackpad smooth scroll handler
  const wheelAccumulatorRef = useRef(0);
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
      e.preventDefault();
      const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
      wheelAccumulatorRef.current += delta;
      
      if (wheelAccumulatorRef.current > 30) {
        nextSlide();
        wheelAccumulatorRef.current = 0;
      } else if (wheelAccumulatorRef.current < -30) {
        prevSlide();
        wheelAccumulatorRef.current = 0;
      }

      if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
      wheelTimeoutRef.current = setTimeout(() => {
        wheelAccumulatorRef.current = 0;
      }, 150);
    }
  };

  // 3D Tilt for active card
  const handleMouseMoveTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    setTiltOffset({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltOffset({ x: 0, y: 0 });
    if (isDragging) handlePointerUp();
  };

  // Dynamic rotation angle calculation
  const dragAngleOffset = isDragging ? (dragDelta / cardWidth) * anglePerItem : 0;
  const currentRotation = -currentIndex * anglePerItem + dragAngleOffset;

  return (
    <div 
      className="relative w-full select-none py-2 flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMoveTilt}
    >
      {/* 3D Arc / Cylindrical Stage */}
      <div 
        ref={containerRef}
        className="relative mx-auto w-full flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y"
        style={{
          height: `${cardHeight + 60}px`,
          perspective: isMobile ? "850px" : "1150px",
          perspectiveOrigin: "50% 50%",
        }}
        onWheel={handleWheel}
        onMouseDown={(e) => handlePointerDown(e.clientX)}
        onMouseMove={(e) => handlePointerMove(e.clientX)}
        onMouseUp={handlePointerUp}
        onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
        onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
        onTouchEnd={handlePointerUp}
      >
        {/* Concentric Pedestal Platform Base under the center card */}
        <div 
          className="absolute -bottom-1 w-[320px] sm:w-[420px] h-[90px] pointer-events-none flex items-center justify-center"
          style={{
            transform: "rotateX(75deg)",
          }}
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full border border-[#04B6EA]/30 bg-gradient-to-b from-[#04B6EA]/20 via-[#04B6EA]/5 to-transparent blur-xs" />
          {/* Inner platform circle */}
          <div className="w-[85%] h-[85%] rounded-full border-2 border-[#04B6EA]/40 bg-white/70 shadow-[0_0_35px_rgba(4,182,234,0.35)]" />
          {/* Center spot */}
          <div className="w-[60%] h-[60%] rounded-full bg-radial from-[#04B6EA]/30 to-transparent blur-md" />
        </div>

        {/* 3D Cards Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {services.map((service, index) => {
            const itemAngle = index * anglePerItem;
            
            // Calculate relative angle to screen center
            let relativeAngle = (itemAngle + currentRotation) % 360;
            if (relativeAngle > 180) relativeAngle -= 360;
            if (relativeAngle < -180) relativeAngle += 360;

            const rad = (relativeAngle * Math.PI) / 180;
            const isFront = Math.abs(relativeAngle) < anglePerItem / 2;

            // Cull cards beyond front arc for maximum clarity & performance
            const isVisible = Math.abs(relativeAngle) < 115;
            if (!isVisible) return null;

            // Trigonometric 3D projection
            const x = Math.sin(rad) * radiusX;
            const z = (Math.cos(rad) - 1) * radiusZ;
            const rotY = Math.max(-25, Math.min(25, relativeAngle * 0.45));
            const scale = Math.max(0.76, 0.76 + 0.24 * ((Math.cos(rad) + 1) / 2));
            const opacity = Math.max(0.3, Math.min(1, 0.35 + 0.65 * ((Math.cos(rad) + 1) / 2)));
            const zIndex = isFront ? 50 : Math.round(((Math.cos(rad) + 1) / 2) * 40);

            // Subtle interactive tilt for active center card
            const activeTiltTransform = isFront
              ? `rotateX(${-tiltOffset.y * 5}deg) rotateY(${tiltOffset.x * 5}deg)`
              : "";

            return (
              <div
                key={service.id}
                onClick={(e) => {
                  if (dragDistanceRef.current > 8) {
                    e.preventDefault();
                    return;
                  }
                  if (!isFront) {
                    e.preventDefault();
                    goToSlide(index);
                  } else {
                    navigate(`/service/${service.slug}`);
                  }
                }}
                className={`absolute rounded-[2rem] bg-white transition-all duration-300 overflow-hidden group flex flex-col justify-between cursor-pointer ${
                  isFront
                    ? "border-2 border-[#04B6EA] shadow-[0_25px_65px_rgba(4,182,234,0.22)] ring-4 ring-[#04B6EA]/10"
                    : "border border-slate-100 shadow-[0_12px_35px_rgba(0,0,0,0.05)] hover:border-[#04B6EA]/40"
                }`}
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  transform: `translate3d(${x}px, 0px, ${z}px) rotateY(${rotY}deg) scale(${scale}) ${activeTiltTransform}`,
                  opacity,
                  zIndex,
                  backgroundColor: "#FFFFFF",
                  transition: isDragging
                    ? "none"
                    : "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s",
                }}
              >
                {/* Top Image & Badges */}
                <div className="relative w-full h-[48%] bg-white p-3 overflow-hidden flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain transform transition-transform duration-700 ease-out group-hover:scale-106"
                    draggable={false}
                  />

                  {/* Speed Badge */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm shadow-xs border border-slate-100">
                    <Zap className="w-3 h-3 text-[#04B6EA] fill-[#04B6EA]" />
                    <span className="text-[9px] font-extrabold tracking-wider text-slate-800 uppercase">
                      5–10 Min
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm shadow-xs text-slate-800 border border-slate-100">
                    <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                    <span className="text-[9px] font-bold">4.9</span>
                  </div>
                </div>

                {/* Content & Action */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow bg-white text-left space-y-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug group-hover:text-[#04B6EA] transition-colors mb-1 line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-xs font-normal line-clamp-2 leading-relaxed mb-2">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-800 mb-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate text-slate-800">Door2fy Verified Technician</span>
                    </div>
                  </div>

                  {/* Button Action */}
                  <div className="pt-2">
                    {isFront ? (
                      <div className="w-full py-2.5 px-4 rounded-xl bg-[#04B6EA] hover:bg-[#039ecc] text-white flex items-center justify-between transition-all duration-300 font-bold text-xs sm:text-sm shadow-md shadow-[#04B6EA]/25">
                        <span>Book Support</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-full py-1.5 flex items-center justify-between text-[#04B6EA] font-bold text-xs sm:text-sm group-hover:text-[#039ecc] transition-colors">
                        <span>View</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
