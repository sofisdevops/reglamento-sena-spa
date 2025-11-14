import RuleCard from "./RuleCard";

export default function RuleList({
  normasFiltradas,
  onCompliantChange,
  onDelete,
}) {
  if (normasFiltradas.length === 0) {
    return <p className="text-center text-gray-500">No hay resultados</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {normasFiltradas.map((norma) => (
        <RuleCard
          key={norma.id}
          id={norma.id}
          titulo={norma.titulo}
          categoria={norma.categoria}
          descripcion={norma.descripcion}
          onCompliantChange={onCompliantChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
