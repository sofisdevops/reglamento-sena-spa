import { useState } from "react";

export default function NormaForm({ onAddNorma }) {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !categoria || !descripcion) return alert("Completa todos los campos");

    const nuevaNorma = {
      id: Date.now(),
      titulo: titulo,
      categoria: categoria,
      descripcion: descripcion,
    };
    onAddNorma(nuevaNorma);
    setTitulo("");
    setCategoria("");
    setDescripcion("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-4 rounded-lg shadow-md mb-6"
    >
      <h2 className="text-lg font-bold mb-3 text-senaGreen">Agregar Nueva Norma</h2>
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="border rounded px-3 py-2 flex-1"
        />
        <input
          type="text"
          placeholder="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="border rounded px-3 py-2 flex-1"
        />
      </div>
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        className="border rounded px-3 py-2 w-full mt-3"
      />
      <button
        type="submit"
        className="mt-3 bg-senaOrange text-white font-semibold px-4 py-2 rounded hover:bg-orange-600"
      >
        Agregar Norma
      </button>
    </form>
  );
}
