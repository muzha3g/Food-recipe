import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context";

export const Navbar = () => {
  const { searchParams, setSearchParams, formHandler } =
    useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center p-6 m-0 flex-col lg:flex-row gap-5 lg:gap-0 bg-slate-50  ">
      <Link className="text-3xl font-bold" to="/">
        Food Recipe 👩‍🍳
      </Link>

      <form onSubmit={formHandler}>
        <input
          type="text"
          name="search"
          placeholder="Search your favorite food...！"
          value={searchParams}
          onChange={(e) => setSearchParams(e.target.value)}
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-xl shadow-gray-200 "
        />
      </form>
      <ul className="flex gap-5">
        <NavLink
          to={"/"}
          className="text-black hover:text-gray-500 duration-300 "
        >
          Home
        </NavLink>
        <NavLink
          to={"/favorites"}
          className="text-black hover:text-gray-500 duration-300 "
        >
          Favorites
        </NavLink>
      </ul>
    </nav>
  );
};
