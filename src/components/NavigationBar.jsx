import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="navbar bg-base-100 container p-0 px-4 border-b-2 z-10 fixed top-0 left-0 right-0 w-full ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {pathname === "/" ? (
              <>
                <li>
                  <a href="#home-section">Home</a>
                </li>
                <li>
                  <a href="#education-section">Education</a>
                </li>
                <li>
                  <a href="#contactus-section">Contact Us</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/#home-section">Home</Link>
                </li>
                <li>
                  <Link to="/#education-section">Education</Link>
                </li>
                <li>
                  <Link to="/#contactus-section">Contact Us</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="text-xl font-bold flex justify-center items-center gap-2">
          <img width={400} height={80} src="src/assets/image/navbarpic2.jpg" alt="Logo"/>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {pathname === "/" ? (
            <>
              <li>
                <a href="#home-section">HOME</a>
              </li>
              <li>
                <a href="#education-section">UPLOAD DATA</a>
              </li>
              <li>
                <a href="#contactus-section">CONTACT US</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/#home-section">HOME</Link>
              </li>
              <li>
                <Link to="/#education-section">UPLOAD DATA</Link>
              </li>
              <li>
                <Link to="/#contactus-section">CONTACT US</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
