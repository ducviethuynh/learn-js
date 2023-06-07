const main = () => {
  const address = document.querySelector("#txtAddress").value;
  const callback = (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    // console.log(res);
    // const { lat, lng } = res.body.results[0].geometry.location;
    // console.log(lat, lng);

    // dùng superagent call api darksky, lấy thời tiết của tọa độ người dùng đã nhập ở trên
    superagent
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/7bbecca28cbc31d7c6739e70baa64e46/${lat},${lng}`
      )
      .end((err, res) => {
        if (err) {
          console.log(err);
          return;
        }

        const { sumary, temperature } = res.body.currently;
        document.getElementById('sumaryText').innerHTML = sumary;
        document.getElementById("temperatureText").innerHTML = temperature;
      });
  };
  // dùng supperagent call api google, lấy tọa độ địa chỉ người dùng nhập
  superagent
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?key=&address=${address}`
    )
    .end(callback);
  // .end((err, res) => {
  //   console.log(res);
  // });
};
