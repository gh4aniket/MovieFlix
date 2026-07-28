import { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import MovieCard from "@/components/MovieCard";

const BOOKMARKED_MOVIES_KEY = "bookmarked_movies";

const Save = () => {
  const [savedMovies, setSavedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const loadSavedMovies = async () => {
    try {
      setLoading(true);
      const storedMovies = await AsyncStorage.getItem(BOOKMARKED_MOVIES_KEY);

      if (!storedMovies) {
        setSavedMovies([]);
        return;
      }

      const parsedMovies = JSON.parse(storedMovies);
      setSavedMovies(Array.isArray(parsedMovies) ? parsedMovies : []);
    } catch (error) {
      console.error("Failed to load saved movies", error);
      setSavedMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadSavedMovies();
    }, []),
  );

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full h-full"
        resizeMode="cover"
      />

      <View className="flex-1 px-5">
        <View className="flex-row items-center justify-center mt-10 mb-4">
          <Image source={icons.logo} className="w-12 h-10" />
        </View>

        <View className="flex-row items-center gap-x-2 mb-4">
          <Image source={icons.save} className="size-5" tintColor="#fff" />
          <Text className="text-white text-xl font-bold">Saved Movies</Text>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#ffffff" className="mt-10" />
        ) : savedMovies.length === 0 ? (
          <View className="flex-1 justify-center items-center px-6">
            <Image
              source={icons.save}
              className="size-12 mb-3"
              tintColor="#9ca3af"
            />
            <Text className="text-white text-lg font-semibold text-center">
              No saved movies yet
            </Text>
            <Text className="text-gray-400 text-sm text-center mt-2">
              Bookmark movies from the home or search screen to see them here.
            </Text>
          </View>
        ) : (
          <FlatList
            data={savedMovies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MovieCard {...item} />}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "flex-start",
              gap: 16,
              marginVertical: 10,
            }}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Save;
