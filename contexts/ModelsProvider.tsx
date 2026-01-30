"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import { useModels } from "@/sanity/lib/hooks";
import type { Model } from "@/sanity/types";

type Filter = "all" | "female" | "male";

interface ModelsContextType {
  allModels?: Model[];
  filteredModels?: Model[];
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  counts: { all: number; female: number; male: number };
  isLoading: boolean;
  error: unknown;
}

const ModelsContext = createContext<ModelsContextType | undefined>(undefined);

export const ModelsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, isLoading, error } = useModels();
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    const all = data?.length ?? 0;
    const female = data?.filter((m) => m.gender === "female").length ?? 0;
    const male = all - female;
    return { all, female, male };
  }, [data]);

  const filteredModels = useMemo(() => {
    if (!data) return undefined;
    if (filter === "all") return data;
    return data.filter((m) => m.gender === filter);
  }, [data, filter]);

  return (
    <ModelsContext.Provider
      value={{
        allModels: data,
        filteredModels,
        filter,
        setFilter,
        counts,
        isLoading,
        error,
      }}
    >
      {children}
    </ModelsContext.Provider>
  );
};

export const useModelsContext = () => {
  const ctx = useContext(ModelsContext);
  if (!ctx)
    throw new Error("useModelsContext must be used within ModelsProvider");
  return ctx;
};
