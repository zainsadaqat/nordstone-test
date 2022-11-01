import React from 'react';
import Logo from '../assets/Logo.png';
import Hamburger from '../assets/HamburgerIcon.png';
import Cross from '../assets/CrossIcon.png';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/userContext';

const NavBar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const { user, logoutUser } = useUserContext();

  const menuItems = [
    { id: 1, name: 'Notification', link: '/notification' },
    { id: 2, name: 'Calculator', link: '/calculator' },
    { id: 3, name: 'Add Images', link: '/images' },
    { id: 4, name: 'Add Text', link: '/text' },
    { id: 5, name: 'Login', link: '/login' },
    { id: 6, name: 'Sign Up', link: '/signup' },
  ];

  return (
    <nav className="relative">
      {/* Navbar */}
      <div className="px-4 py-8 flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" width="88" />
          </Link>
        </div>
        <div>
          {user && (
            <p className="text-[#c9c9c9]">
              {user.displayName} is currently logged in
            </p>
          )}
        </div>
        <div
          onClick={() => setShowMenu((prevState) => !prevState)}
          className={showMenu ? 'hidden' : ''}
        >
          <img src={Hamburger} alt="Hamburger" width="24" />
        </div>
        <div
          onClick={() => setShowMenu((prevState) => !prevState)}
          className={showMenu ? '' : 'hidden'}
        >
          <img src={Cross} alt="Hamburger" width="16" />
        </div>
      </div>
      {/* Navbar Ends */}
      <div className="min-w-[30%]">
        <div
          className={
            showMenu
              ? 'bg-[#222] absolute right-4 px-4 border rounded-md'
              : 'hidden'
          }
        >
          <ul className="pt-8 min-h-[50vh] flex flex-col justify-around">
            {menuItems.map(({ id, name, link }) => {
              return (
                <li
                  key={id}
                  className="mb-4 font-semibold text-xl tracking-wide hover:underline underline-offset-2"
                >
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
            <div className="my-4">
              {user && (
                <button
                  className="tracking-wide font-bold py-2 text-center text-sm bg-[#000] w-80 rounded-md"
                  onClick={logoutUser}
                >
                  Logout
                </button>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
