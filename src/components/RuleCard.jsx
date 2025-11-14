import { useState } from "react";

export default function RuleCard({ id, titulo, categoria, descripcion, onCompliantChange, onDelete }) {
  const [cumplida, setCompliant] = useState(false);

  const toggleCompliant = () => {
    const newState = !cumplida;
    setCompliant(newState);
    onCompliantChange(newState);
  };

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold text-senaGreen">{titulo}</h2>
        <p className="text-sm text-gray-600 italic">{categoria}</p>
        <p className="mt-2">{descripcion}</p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={toggleCompliant}
          className={`px-3 py-1 rounded font-semibold ${
            cumplida ? "bg-senaGreen text-white" : "bg-gray-300"
          }`}
        >
          {cumplida ? "Cumplida :D" : "Cumplir"}
        </button>
        <button
          onClick={() => onDelete(id)}
          className="text-sm text-red-600 hover:underline"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
