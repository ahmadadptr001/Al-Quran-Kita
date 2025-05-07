const { default: axios } = require("axios")

export const GetSurah = async (endpoint) => {
          const responseData = await axios(endpoint);
          const allData = responseData.data;
          return allData;
}
