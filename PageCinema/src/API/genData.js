const fs = require("fs");
let log = console.log;
const path = require("path");

const gendata = () => {
  // Thử setup cái kiểu dữ liệu gốc của data
  const data_pure = {
    id: Math.floor(Math.random() * 100),
    name: "Ghe ",
    price: Math.floor(Math.random() * 100),
    booked: Math.random() >= 0.5,
  };

  const data = [];
  for (i = 0; i < 100; i++) {
    const data_pure = {
      id: i,
      name: "Ghe " + i,
      price: Math.floor(Math.random() * 100),
      booked: Math.random() >= 0.5,
    };

    data.push(data_pure);
  }
  return data;
};

function genData() {
  const data = gendata();
  const dataJSON = JSON.stringify(data);

  // log(data);
  // log(dataJSON);
  const pathName = path.join(__dirname, "dataJSON.json");
  fs.readFile(pathName, (err, data) => {
    if (err) {
      ///  log(err);
      fs.writeFileSync(pathName, dataJSON);
    }
    fs.writeFileSync(pathName, dataJSON);
  });
}

module.exports = genData;
