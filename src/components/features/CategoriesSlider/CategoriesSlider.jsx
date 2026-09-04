import { useState } from "react";
import cls from "./CategoriesSlider.module.css";
export function CategoriesSlider({ setActiveCategory }) {
  const [catId, setCatId] = useState("All");

  const categories = [
    { id: "all", name: "All" },
    { id: "dentist", name: "Dentist" },
    { id: "therapist", name: "Therapist" },
    { id: "surgeon", name: "Surgeon" },
    { id: "cardiologist", name: "Cardiologist" },
  ];

  const handleCategoryClick = (cat) => {
    setCatId(cat);
    setActiveCategory(cat.name);
  };
  return (
    <div>
      {categories.map((cat) => (
        <button key={cat.id} onClick={() => handleCategoryClick(cat)}>
          {cat.name}
        </button>
      ))}
    </div>
  );
}

// Я должен вернуть вернуть выбраную категорию, что-бы потом осортировать!!!
