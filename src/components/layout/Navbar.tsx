import Logo from "../../assets/logo-text.png";
import HamburgerIcon from "../../assets/hamburger.png";

export interface NavLinks {
  label: string;
  href: string;
}

export interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  navLinks: NavLinks[];
}

export default function Navbar({
  activeTab,
  setActiveTab,
  navLinks,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <div className="flex w-1/3 items-center">
          <button type="button" className="md:hidden" aria-label="Open Menu">
            <img
              src={HamburgerIcon}
              alt="Hamburger Menu Icon"
              className="h-6 w-6"
            />
          </button>
          <a href="#home" className="hidden md:block">
            <img src={Logo} alt="Dev Stack" className="h-8 w-auto" />
          </a>
        </div>

        <div className="flex w-1/3 justify-center">
          <a href="#home" className="md:hidden">
            <img src={Logo} alt="Dev Stack" className="h-7 w-auto" />
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActiveTab(link.label)}
                  className={`text-sm font-semibold transition ${
                    activeTab === link.label
                      ? "text-pink-500"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex w-1/3 items-center justify-end gap-4">
          <button
            type="button"
            className="text-sm font-semibold text-slate-600 hover:text-slate-950"
          >
            Sign In
          </button>
          <button
            type="button"
            className="rounded-full text-white bg-pink-600 px-6 py-3 text-sm font-medium hover:bg-pink-700"
          >
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
}
