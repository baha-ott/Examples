import React, { useCallback, useEffect, useRef } from "react";

const useTimeOut = (callback, delay) => {
  const callBacRef = useRef(callback);
  const timeoutRef = useRef();


  useEffect(() => {
    callBacRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callBacRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
};

export default useTimeOut;
