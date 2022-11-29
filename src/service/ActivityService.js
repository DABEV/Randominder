import API from "./boredApi";

class ActivityService {
  getRandomly() {
    return API.get("/");
  }

  getWithFilter(
    minAccesibility,
    maxAccesibility,
    minPrice,
    maxPrice,
    participants,
    type
  ) {
    return API.get(
      `/?participants=${participants}&minprice=${minPrice}&maxprice=${maxPrice}&minaccessibility=${minAccesibility}&maxaccessibility=${maxAccesibility}&type=${type}`
    );
  }
}

export default new ActivityService();
