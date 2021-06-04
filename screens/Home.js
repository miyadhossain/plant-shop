import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";

const Home = ({ navigation }) => {
  const Location = {
    title_name: "Search Location",
  };

  const categoryData = [
    {
      id: 1,
      name: "Plant",
      icon: icons.plant,
    },
    {
      id: 2,
      name: "Orchid",
      icon: icons.orchid,
    },
    {
      id: 3,
      name: "Flowers",
      icon: icons.flower,
    },
  ];

  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  const plantData = [
    {
      id: 2,
      name: "Orchid",
      rating: 4.8,
      categories: [2],
      priceRating: expensive,
      photo: images.orchid_1,
      duration: "15 - 20 min",
      menu: [
        {
          menuId: 4,
          name: "Orchid",
          photo: images.orchid_2,
          description: "Fresh Natural Orchid",
          price: 15,
        },
        {
          menuId: 5,
          name: "Natural Orchid",
          photo: images.orchid_3,
          description: "Fresh Natural Orchid",
          price: 20,
        },
        {
          menuId: 6,
          name: "Natural Orchid",
          photo: images.orchid_4,
          description: "Fresh Natural Orchid",
          price: 10,
        },
      ],
    },
    {
      id: 3,
      name: "Flowers",
      rating: 4.8,
      categories: [3],
      priceRating: expensive,
      photo: images.flower_1,
      duration: "20 - 25 min",
      menu: [
        {
          menuId: 8,
          name: "Natural Fresh Flower",
          photo: images.flower_2,
          description: "Fresh Natural Flower",
          price: 20,
        },
        {
          menuId: 9,
          name: "Natural Fresh Flower",
          photo: images.flower_3,
          description: "Fresh Natural Flower",
          price: 20,
        },
        {
          menuId: 10,
          name: "Natural Fresh Flower",
          photo: images.flower_4,
          description: "Fresh Natural Flower",
          price: 20,
        },
      ],
    },

    {
      id: 5,
      name: "Plant",
      rating: 4.8,
      categories: [1],
      priceRating: affordable,
      photo: images.plant_1,
      duration: "15 - 20 min",

      menu: [
        {
          menuId: 10,
          name: "Natural Green Plant",
          photo: images.plant_2,
          description: "Nature Green Plant",
          price: 5,
        },
        {
          menuId: 11,
          name: "Natural Green Plant",
          photo: images.plant_3,
          description: "Nature Green Plant",
          price: 8,
        },
        {
          menuId: 12,
          name: "Natural Green Plant",
          photo: images.plant_3,
          description: "Nature Green Plant",
          price: 8,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [plants, setPlants] = React.useState(plantData);
  const [header, setHeader] = React.useState(Location);

  function onSelectCategory(category) {
    //filter plant
    let plantList = plantData.filter((a) => a.categories.includes(category.id));
    setPlants(plantList);
    setSelectedCategory(category);
  }

  function getCategoryNameById(id) {
    let category = categories.filter((a) => a.id == id);

    if (category.length > 0) return category[0].name;

    return "";
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.nearby}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              backgroundColor: COLORS.lightGray3,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          >
            <Text style={{ ...FONTS.h5 }}>{header.title_name}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderMainCategories() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ padding: SIZES.padding * 2 }}>
        <Text style={{ ...FONTS.h1, textAlign: "center", color: "#2BC48A" }}>
          Earth Planet
        </Text>
        <Text style={{ ...FONTS.h3 }}>Main</Text>
        <Text style={{ ...FONTS.h3 }}>Categories</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
      </View>
    );
  }

  function renderPlantList() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{ marginBottom: SIZES.padding * 2 }}
        onPress={() =>
          navigation.navigate("Plant", {
            item,
            header,
          })
        }
      >
        {/* Image */}
        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 200,
              borderRadius: SIZES.radius,
            }}
          />

          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              ...styles.shadow,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
          </View>
        </View>

        {/* Plant Info */}
        <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: "row",
          }}
        >
          {/* Rating */}
          <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

          {/* Categories */}
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
            }}
          >
            {item.categories.map((categoryId) => {
              return (
                <View style={{ flexDirection: "row" }} key={categoryId}>
                  <Text style={{ ...FONTS.body3 }}>
                    {getCategoryNameById(categoryId)}
                  </Text>
                  <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>
                    {" "}
                    .{" "}
                  </Text>
                </View>
              );
            })}

            {/* Price */}
            {[1, 2, 3].map((priceRating) => (
              <Text
                key={priceRating}
                style={{
                  ...FONTS.body3,
                  color:
                    priceRating <= item.priceRating
                      ? COLORS.black
                      : COLORS.darkgray,
                }}
              >
                $
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={plants}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
      {renderPlantList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Home;
