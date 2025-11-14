import senaLogo from "../assets/sena-logo.png";
export default function Header() {
  return (
    <header className="bg-senaGreen text-white flex flex-row justify-between items-center p-4 shadow-md rounded-lg mb-6">
      <div className="flex items-center gap-3">
        <img
          src={senaLogo}
          alt="Logo SENA"
          className="w-12 h-12 object-contain"
        />
        <div>
          <h1 className="text-xl font-bold">Reglamento del Aprendiz SENA</h1>
          <p className="text-sm text-senaOrange">Normas básicas de convivencia</p>
        </div>
      </div>

      <nav className="mt-3 md:mt-0">
        <ul className="flex gap-4 text-sm md:text-base">
          <li className="hover:text-senaOrange cursor-pointer">Inicio</li>
          <li className="hover:text-senaOrange cursor-pointer">Normas</li>
          <li className="hover:text-senaOrange cursor-pointer">Agregar</li>
          <li className="hover:text-senaOrange cursor-pointer">Contacto</li>
        </ul>
      </nav>
    </header>
  );
}
