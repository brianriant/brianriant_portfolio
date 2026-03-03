import { useEffect, useRef, RefObject } from 'react';
import { useAnimation, useInView } from 'motion/react';

interface UseRevealAnimationReturn {
  ref: RefObject<HTMLElement | null>;
  controls: ReturnType<typeof useAnimation>;
}

export const useRevealAnimation = (
  amount: number | 'some' | 'all' = 0.1
): UseRevealAnimationReturn => {
  const ref = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return { ref, controls };
};
