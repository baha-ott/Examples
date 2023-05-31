const useUpdateEffect = (callback, dependencies) => {
  // Only runs on update
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    return callback();
  }, dependencies);
};

export default useUpdateEffect;
