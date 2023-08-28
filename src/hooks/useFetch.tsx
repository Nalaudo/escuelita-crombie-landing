"use client";
import { useQuery } from "react-query";

const useFetch = (url: string) => {
  const { isLoading, error, data } = useQuery(["repoData"], () =>
    fetch(url).then((res) => res.json())
  );

  return { isLoading, error, data };
};

export default useFetch;
