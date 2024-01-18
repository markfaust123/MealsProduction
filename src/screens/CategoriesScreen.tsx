import { FlatList } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import Category from "../../models/category";

const renderCategoryItem = (
  item: Category,
  navigation: any
) => {
  const handlePress = () => {
    navigation.navigate("MealsOverview", {
        categoryId: item.id,
    });
  };
  return (
    <CategoryGridTile
      onPress={handlePress}
      title={item.title}
      color={item.color}
    />
  );
};

const CategoriesScreen = ({ navigation }: { navigation: any }) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => renderCategoryItem(itemData.item, navigation)}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
