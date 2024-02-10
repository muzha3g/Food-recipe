import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export function GlobalState({ children }) {
  //   const forkify_api_key = "630df397-3f0b-48fc-ab87-edafd8ae78e5";
  const [searchParams, setSearchParams] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeDetail, setRecipeDetail] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  const navigate = useNavigate();

  const formHandler = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      let datas = await axios
        .get(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
        )
        .then((response) => response.data.data.recipes);
      if (datas) {
        setRecipeList(datas);
        setLoading(false);
        setSearchParams("");
        navigate("/");
      }
    } catch (e) {
      setLoading(false);
      setSearchParams("");
    }
  };

  const initialHandler = async () => {
    try {
      setLoading(true);

      let datas = await axios
        .get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=cookie`)
        .then((response) => response.data.data.recipes);
      if (datas) {
        setRecipeList(datas);
        setSearchParams("");
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setSearchParams("");
    }
  };

  function handleAddToFavorites(getCurrentItem) {
    let copyFavoritesList = [...favoriteList];
    const index = copyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      copyFavoritesList.push(getCurrentItem);
    } else {
      copyFavoritesList = copyFavoritesList.filter(
        (item) => item.id !== getCurrentItem.id
      );
    }
    setFavoriteList(copyFavoritesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        setSearchParams,
        formHandler,
        recipeList,
        setRecipeList,
        loading,
        setLoading,
        recipeDetail,
        setRecipeDetail,
        favoriteList,
        setFavoriteList,
        handleAddToFavorites,
        initialHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
