import API from "./triviaApi";

class TriviaService {
  getRandomly() {
    return API.get("?limit=1");
  }

  getWithFilter(
    categories,
    difficulty
  ) {
    return API.get(
      `?${categories}&difficulty=${difficulty}&limit=1`
    );
  }
}

export default new TriviaService();