// create class to manage saving items with only one paremiters
export default class DatabaseManager {
  constructor(name) {
    this.dataBaseName = name;
    this.dataBaseJson = {};
    this.item = "";
    this.items = [];
    this.totalItems = 0;
  }

  edit(id, data) {
    this.update();
    if (!id) return false;
    const find_item = this.dataBaseJson.data.filter((item) => item.id == id);
    if (!find_item) return false;
    let index = find_item[0];
    index = this.items.indexOf(index);
    this.dataBaseJson.data[index] = data;
    this.items = this.dataBaseJson.data;
    this.#updateSave();
    return "done";
  }
  update() {
    let data = localStorage.getItem(this.dataBaseName);
    if (data) {
      // set the data to a variable
      this.dataBaseJson = JSON.parse(data);
      this.items = this.dataBaseJson.data;
      this.totalItems = this.dataBaseJson.total;
      // set the count object
      return true;
    }
    return false;
  }

  #updateSave() {
    this.dataBaseJson.data = this.items;
    this.dataBaseJson.total = this.totalItems;
    try {
      localStorage.setItem(
        this.dataBaseName,
        JSON.stringify(this.dataBaseJson)
      );
      return true;
    } catch (error) {
      console.error(error);
    }
  }
  getData(id) {
    // get data by
    this.update();
    if (this.items) return this.items.filter((item) => item.id == id);
    return false;
  }

  getAllData() {
    // get all data from from the parsed data not the actul stored json
    this.update();
    if (!this.items) return false;
    return this.items;
  }
  remove(id) {
    this.update();
    this.items = this.items.filter((item) => item.id != id);
    this.totalItems--;
    this.#updateSave();
    return `items with id '${id}' removed`;
  }
  save(data) {
    try {
      this.update();
      this.item = data;
      if (!this.update()) {
        this.items = [this.item];
        this.totalItems = 1;
        this.#updateSave();
        return "new database";
      }

      this.items = [...this.items, this.item];
      this.totalItems++;
      this.#updateSave();
      return this.item;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
