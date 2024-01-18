import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useAppDispatch, useAppSelector } from "../hooks/use-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useAppSelector((state) => state.favoriteMeals.ids);
  const dispatch = useAppDispatch();

  const mealId = route.params.mealId;
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const handleChangeFavoriteStatus = () => {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          color="white"
          onPress={handleChangeFavoriteStatus}
        />
      ),
    });
  }, [navigation, handleChangeFavoriteStatus, mealIsFavorite]);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal?.title}</Text>
        <MealDetails
          duration={selectedMeal!.duration}
          complexity={selectedMeal!.complexity}
          affordability={selectedMeal!.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal!.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal!.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

export default MealDetailScreen;
