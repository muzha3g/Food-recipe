import { Link } from "react-router-dom";

const RecipeItem = ({ recipe }) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        {" "}
        <img
          src={recipe?.image_url}
          alt={recipe?.title}
          className="block w-full"
        />
      </div>
      <div>
        <span className="text-sm font-medium">{recipe?.publisher}</span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipe?.title}
        </h3>
        <Link
          to={`/recipe-item/${recipe?.id}`}
          className="text-xs p-3 px-5 mt-2 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-red-400 text-white"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
