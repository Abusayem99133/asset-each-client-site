import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="navbar bg-blue-400 bg-opacity-60 fixed z-10 max-w-7xl mx-auto">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-700 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "border-2 border-sky-500 font-bold text-white"
                      : "font-bold text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/employee"
                  className={({ isActive }) =>
                    isActive
                      ? "border-2 border-sky-500 font-bold text-white"
                      : "font-bold text-white"
                  }
                >
                  Join as an Employee
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/manager"
                  className={({ isActive }) =>
                    isActive
                      ? "border-2 border-sky-500 font-bold text-white"
                      : "font-bold text-white"
                  }
                >
                  Join as an HR Manager
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Asset Each</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-2 border-sky-500 font-bold text-white"
                    : "font-bold text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/employee"
                className={({ isActive }) =>
                  isActive
                    ? "border-2 border-sky-500 font-bold text-white"
                    : "font-bold text-white"
                }
              >
                Join as an Employee
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/manager"
                className={({ isActive }) =>
                  isActive
                    ? "border-2 border-sky-500 font-bold text-white"
                    : "font-bold text-white"
                }
              >
                Join as an HR Manager
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button onClick={handleLogOut} className="btn ">
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
