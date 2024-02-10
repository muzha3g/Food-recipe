import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../context";
import { BeatLoader } from "react-spinners";

const Details = () => {
  // 拿到 id
  const { id } = useParams();

  const {
    recipeDetail,
    setRecipeDetail,
    handleAddToFavorites,
    loading,
    setLoading,
    favoriteList,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      setLoading(true);
      let detail = await axios
        .get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
        .then((response) => response.data.data.recipe);

      if (detail) {
        setRecipeDetail(detail);
      }

      setLoading(false);
    }
    getRecipeDetails();
  }, []);

  if (loading)
    return <BeatLoader color="#d65436" className="text-center mt-40" />;

  return (
    <div className="container py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto mx-8">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetail?.image_url}
            alt={recipeDetail?.title}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 mx-6">
        <span className="text-sm font-medium">{recipeDetail?.publisher}</span>{" "}
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetail?.title}
        </h3>
        <div>
          <button
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-red-800 text-white"
            onClick={() => handleAddToFavorites(recipeDetail)}
          >
            {favoriteList &&
            favoriteList.length > 0 &&
            favoriteList.findIndex(
              (favorite) => favorite.id === recipeDetail.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black ">
            Ingredients：
          </span>
          <ul className="flex flex-col gap-3 mt-6">
            {recipeDetail?.ingredients?.map((ingredient, index) => (
              <li key={index}>
                <span>
                  {ingredient?.quantity} {ingredient?.unit}
                </span>

                <span> {ingredient?.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
