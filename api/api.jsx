import axios from "axios";

export const currentWeather = async () => {
  const response = await axios.get(
    "https://api.weatherapi.com/v1/current.json?key=4a06b0437031495ca6b20810233107&q=M4L1V2"
  );
  const data = await response.data;
  console.log(data);
};

// const popularRecipes = async () => {
//   try {
//     const response = await axios.get(
//       "https://soyummy-tw3y.onrender.com/api/v1/popular-recipes"
//     );
//     const { data } = response.data;

//     if (response) {
//       setLoading(false);
//       setRecipes(data);
//     }
//   } catch {
//     setError("Failed to fetch");
//     setRecipes([]);
//   }
// };
