import { useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const useRevealAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, threshold });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { ref, controls };
};

export default useRevealAnimation;
