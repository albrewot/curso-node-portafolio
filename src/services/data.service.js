const db = require("../config/db");
const Data = db.Data;

class DataService {
  async createData(params) {
    console.log(`Inside Data Service | create`, params);

    const data = new Data(params);

    console.log(data);

    return await data.save();
  }

  async getData() {
    const data = await Data.findOne();
    console.log(data);
    if (!data || data.length >= 0) {
      throw { type: "not found", message: "Data no encontrada" };
    }

    return data;
  }

  async editData(params) {
    const data = await Data.findOne();

    if (!data || data.length >= 0) {
      throw { type: "not found", message: "Data no encontrada" };
    }

    Object.assign(data, params);

    const edited = await data.save();
    console.log("edi  ", edited);
    return edited;
  }

  async deleteData() {
    const data = await Data.findOne();
    if (!data || data.length >= 0) {
      throw { type: "not found", message: "Data no encontrada" };
    }

    return data.remove();
  }
}

module.exports = new DataService();
