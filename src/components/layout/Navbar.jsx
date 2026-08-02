import navigation from "../../constants/navigation";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-cyan-400
            font-bold
            text-black
          "
          >
            M
          </div>

          <h1 className="text-2xl font-bold text-white">
            Muhammad.
          </h1>

        </div>

        {/* Menu */}

        <nav>

          <ul className="flex gap-8">

            {navigation.map((item) => (

              <li key={item.id}>

                <a
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  {item.name}
                </a>

              </li>

            ))}

          </ul>

        </nav>

        {/* Right Menu */}

        <div className="flex items-center gap-4">

          <button
            className="
              rounded-xl
              border
              border-slate-700
              px-4
              py-2
              text-white
            "
          >
            Admin
          </button>

          <button
            className="
              rounded-xl
              bg-cyan-400
              px-6
              py-3
              font-semibold
              text-black
            "
          >
            Download CV
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;