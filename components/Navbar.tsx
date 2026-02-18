export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img
          src="/logo.png"
          alt="Geriátrico Jean Baptiste Marie Vianey"
        />
      </div>

      <nav className="navbar-links">
        <a href="#servicios">Servicios</a>
        <a href="#modalidades">Modalidades</a>
        <a href="#equipo">Equipo</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}
