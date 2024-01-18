import { CATEGORIES, MEALS } from "../../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) !== -1
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )!.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return (
    <MealsList meals={displayedMeals} />
  );
};

export default MealsOverviewScreen;
