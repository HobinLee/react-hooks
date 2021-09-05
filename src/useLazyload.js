import { useEffect, useRef } from "react";

const THRESHOLD = 0.05;

export default (action, threshold = THRESHOLD) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && ref.current) {
              observer.unobserve(ref.current);
              action();
            }
          });
        },
        { threshold }
      );
      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [ref.current]);
  return { ref };
};
