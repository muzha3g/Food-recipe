import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 mx-auto flex-col lg:flex-row gap-5 lg:gap-0 ">
      <h2 className="text-3xl font-bold ">Food Recipe 👩‍🍳</h2>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Search your favorite food...！"
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 "
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
