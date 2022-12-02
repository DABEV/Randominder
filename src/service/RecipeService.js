import API from "./recipesApi";

class RecipeService {
  getRandomly() {
    return API.get("/random");
  }

  getWithFilter(
    type,
    cousine,
    other,
  ) {
    return API.get(
      `/random?tags=${type},${cousine},${other}`
    );
  }
}

export default new RecipeService();