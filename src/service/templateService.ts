// IMPORTS
import axios from "axios";

// Url for game of thrones api
const url = "https://thronesapi.com/api/v2/characters";

// Model
type Model = {
  id: number;
  name: String;
  quntity: number;
};

// Fetch all game of thrones characters
export default {
  async getAllModel() {
    const response = await axios.get<Model[]>(url);
    return response.data;
  },
};
