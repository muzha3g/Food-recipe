import { useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import RecipeItem from "../components/RecipeItem";
import { BeatLoader } from "react-spinners";

const Home = () => {
  const { recipeList, loading, initialHandler } = useContext(GlobalContext);

  useEffect(() => {
    initialHandler();
  }, []);

  if (loading)
    return <BeatLoader color="#d65436" className="text-center mt-40" />;

  return (
    <div className="flex p-8 container mx-auto flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        <>
          {recipeList.map((recipe, index) => (
            <RecipeItem key={index} recipe={recipe} />
          ))}
        </>
      ) : (
        <div className=" mt-36 ">
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            No any recipes found Q-Q
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
