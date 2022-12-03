import API from "./boredApi";

class ActivityService {
  getRandomly() {
    return API.get("/");
  }

  getWithFilter(
    minAccesibility,
    maxAccesibility,
    participants,
    type
  ) {
    return API.get(
      `/?participants=${participants}&minaccessibility=${minAccesibility}&maxaccessibility=${maxAccesibility}&type=${type}`
    );
  }
}

export default new ActivityService();
