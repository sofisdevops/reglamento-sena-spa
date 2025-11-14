import { useState } from "react";
import Header from "./components/header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import RuleList from "./components/RuleList.jsx";
import NormaForm from "./components/NormaForm.jsx";
import Footer from "./components/Footer.jsx";
import { normas as dataset } from "./data/normas.js"; 

function App() {
  const [normas, setNormas] = useState(dataset);
  const [searchTerm, setSearchTerm] = useState("");
  const [contador, setContador] = useState(0);

  const handleCompliantChange = (isCompliant) => {
    setContador((prev) => prev + (isCompliant ? 1 : -1));
  };

  const handleAddNorma = (nuevaNorma) => {
    setNormas([...normas, nuevaNorma]);
  };

  const handleDeleteNorma = (id) => {
    setNormas(normas.filter((n) => n.id !== id));
  };

  const normasFiltradas = normas.filter(
    (n) =>
      n.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      n.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(normas);

  return (
    <div className="min-h-screen w-[95%] mx-auto p-4 font-sans">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NormaForm onAddNorma={handleAddNorma} />

      <p className="text-center font-semibold mb-4 text-senaGreen">
        Normas cumplidas: {contador} / {normas.length}
      </p>

      <RuleList
        normasFiltradas={normasFiltradas}
        onCompliantChange={handleCompliantChange}
        onDelete={handleDeleteNorma}
      />

      <Footer />
    </div>
  );
}

export default App;
