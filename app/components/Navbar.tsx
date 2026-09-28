export default function Navbar() {
  return (
    <nav className="bg-slate-950 text-white p-4 sticky top-0 z-50 border-b border-yellow-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1 className="text-xl font-bold text-yellow-400">
          PathPilot Consulting
        </h1>

        <div className="flex gap-6 font-medium">

          <a
            href="#home"
            className="hover:text-yellow-400 transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-yellow-400 transition"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-yellow-400 transition"
          >
            Services
          </a>

        

          <a
            href="#faq"
            className="hover:text-yellow-400 transition"
          >
            FAQ
          </a>
          <a
            href="#apply"
            className="hover:text-yellow-400 transition"
          >
            Apply Now
          </a>

          <a
            href="#contact"
            className="hover:text-yellow-400 transition"
          >
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}