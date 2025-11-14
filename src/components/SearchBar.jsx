export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="my-4 text-center">
      <label htmlFor="search" className="mr-2 font-semibold">Buscar norma:</label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Escribe una palabra clave..."
        className="border px-3 py-1 rounded w-60"
      />
    </div>
  );
}
