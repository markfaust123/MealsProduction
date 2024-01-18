import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [] as string[],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

const FavoritesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite:  addFavorite,
    removeFavorite: removeFavorite,
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
