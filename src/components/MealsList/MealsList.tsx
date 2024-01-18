import { FlatList, StyleSheet, View } from "react-native";
import Meal from "../../../models/meal";
import MealItem from "./MealItem";

const renderMealItem = (item: Meal) => {
  const mealItemProps = {
    id: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    duration: item.duration,
    complexity: item.complexity,
    affordability: item.affordability,
  };

  return <MealItem {...mealItemProps} />;
};

const MealsList = ({ meals}: {meals: Meal[]}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData.item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsList;
