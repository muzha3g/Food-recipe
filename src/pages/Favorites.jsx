import { useContext } from "react";
import { GlobalContext } from "../context";
import RecipeItem from "../components/RecipeItem";

const Favorites = () => {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className="flex p-8 container mx-auto flex-wrap justify-center gap-10">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((recipe, index) => (
          <RecipeItem key={index} recipe={recipe} />
        ))
      ) : (
        <div className=" mt-36 ">
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added to favorites yet :0
          </p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
