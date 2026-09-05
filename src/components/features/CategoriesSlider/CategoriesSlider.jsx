import cls from "./CategoriesSlider.module.css";
export function CategoriesSlider({ setActiveCategory, activeCategory }) {
  const categories = [
    { id: "all", name: "All" },
    { id: "dentist", name: "Dentist" },
    { id: "therapist", name: "Therapist" },
    { id: "surgeon", name: "Surgeon" },
    { id: "cardiologist", name: "Cardiologist" },
  ];

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat.name);
  };
  return (
    <div className={cls.wrap}>
      {categories.map((cat) => (
        <button
          className={`${cls.btn} ${activeCategory === cat.name ? cls.active : ""}`}
          key={cat.id}
          onClick={() => handleCategoryClick(cat)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

// Я должен вернуть вернуть выбраную категорию, что-бы потом осортировать!!!
