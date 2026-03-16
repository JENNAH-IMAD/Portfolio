import { useEffect, useRef } from "react";
import gsap from "gsap";

const useGSAP = (callback, deps = []) => {
  const scope = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      callback(scope.current);
    }, scope);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scope;
};

export default useGSAP;
