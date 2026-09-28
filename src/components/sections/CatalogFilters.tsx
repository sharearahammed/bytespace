"use client";

import { createContext, FormEvent, ReactNode, useContext, useMemo, useState } from "react";
import { categories, courses } from "@/src/lib/course-data";
import type { Course } from "@/src/types/course";

type CatalogContextValue = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  searchInput: string;
  setSearchInput: (value: string) => void;
  visibleCourses: Course[];
  submitSearch: (event: FormEvent<HTMLFormElement>) => void;
};

const CatalogContext = createContext<CatalogContextValue | null>(null);

export function CatalogProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const visibleCourses = useMemo(() => courses.filter((course) => {
    const inCategory = activeCategory === "Featured" || course.category === activeCategory;
    const matchesSearch = `${course.title} ${course.category} purepearl studio`.toLowerCase().includes(searchTerm.toLowerCase());
    return inCategory && matchesSearch;
  }), [activeCategory, searchTerm]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchTerm(searchInput.trim());
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  }

  return <CatalogContext.Provider value={{ activeCategory, setActiveCategory, searchInput, setSearchInput, visibleCourses, submitSearch }}>{children}</CatalogContext.Provider>;
}

export function useCatalog() {
  const context = useContext(CatalogContext);
  if (!context) throw new Error("useCatalog must be used within a CatalogProvider");
  return context;
}

export { categories };
