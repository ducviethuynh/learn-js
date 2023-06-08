const main = () => {
  const address = document.querySelector("#txtAddress").value;
  // const callback = (err, res) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log(res);
  //   const { lat, lng } = res.body.results[0].geometry.location;
  //   console.log(lat, lng);
  // };

  getGeoCode(address)
    .then((res) => {
      // console.log(res);
      return getWheather(res.lat, res.lng); // trả về đối tượng promise call darksky
    })
    .then((resGetWheather) => {
      // promise chain
      console.log(resGetWheather);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getGeoCode = (address) => {
  return new Promise((resolve, reject) => {
    // dùng supperagent call api google, lấy tọa độ địa chỉ người dùng nhập
    superagent
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?key=&address=${address}`
      )
      .end((err, res) => {
        if (err) reject(err);
        const { lat, lng } = res.body.result[0].geometry.location;
        const data = { lat: lat, lng: lng };
        resolve(data);
      });
    // .end((err, res) => {
    //   console.log(res);
    // });
  });
};

const getWheather = (lat, lng) => {
  // promise: -pending, resolved, rejected
  return new Promise((resolve, reject) => {
    // dùng superagent call api darksky, lấy thời tiết của tọa độ người dùng đã nhập ở trên
    superagent
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/7bbecca28cbc31d7c6739e70baa64e46/${lat},${lng}`
      )
      .end((err, res) => {
        if (err) {
          // console.log(err);
          reject(err);
          // return;
        }
        const { sumary, temperature } = res.body.currently;
        const data = { sumary: sumary, temperature: temperature };
        resolve(data);
      });
  });
};
