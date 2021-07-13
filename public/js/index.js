// const { response } = require("express");

console.log("index.js loaded");

function getInputValue() {
  // Selecting the input element and get its value
  var inputVal = document.getElementById("myinput").value;

  // Displaying the value
  let a = document.getElementsByClassName("details");
  console.log(a);
  a[0].innerHTML = "";

  //need to change to heroku

  // fetch(`http://localhost:3000/weather?address=${inputVal}`);
  fetch(`/weather?address=${inputVal}`)
    .then((response) => {
      if (!response.ok)
        throw new Error("No Able to find the weather for this location");

      response.json().then((data) => {
        console.log(data);

        const details = document.getElementsByClassName("details");
        const para1 = document.createElement("p");
        const para2 = document.createElement("p");
        const para3 = document.createElement("p");
        let node = document.createTextNode(` ${data.temp}`);
        para1.appendChild(node);
        details[0].appendChild(para1);
        node = document.createTextNode(
          `Weather is ${data.weather_description}`
        );
        para2.appendChild(node);
        details[0].appendChild(para2);
        node = document.createTextNode(`Location is ${data.Location}`);
        para3.appendChild(node);
        details[0].appendChild(para3);
      });
    })
    .catch((error) => {
      console.log(error);
      const details = document.getElementsByClassName("details");
      const Error = document.createElement("p");
      let node = document.createTextNode(`Temperature is ${error}`);
      Error.appendChild(node);
      details[0].appendChild(Error);
    });
}

/**

fetch("http://localhost:3000/weather?address=kadannappl")
  .then((response) => {
    if (!response.ok)
      throw new Error("No Able to find the weather for this location");

    response.json().then((data) => {
      console.log(data);
      const details = document.getElementsByClassName("details");
      const para1 = document.createElement("p");
      const para2 = document.createElement("p");
      const para3 = document.createElement("p");
      let node = document.createTextNode(` ${data.temp}`);
      para1.appendChild(node);
      details[0].appendChild(para1);
      node = document.createTextNode(`Weather is ${data.weather_description}`);
      para2.appendChild(node);
      details[0].appendChild(para2);
      node = document.createTextNode(`Location is ${data.Location}`);
      para3.appendChild(node);
      details[0].appendChild(para3);
    });
  })
  .catch((error) => {
    console.log(error);
    const details = document.getElementsByClassName("details");
    const para1 = document.createElement("p");
    let node = document.createTextNode(`Temperature is ${error}`);
    para1.appendChild(node);
    details[0].appendChild(para1);
  });

  */

// fetch("http://localhost:3000/weather?address=kadannappalli")
//   .then((response) =>
//     response.json().then((data) => {
//       console.log(data);
//       const details = document.getElementsByClassName("details");
//       const para1 = document.createElement("p");
//       const para2 = document.createElement("p");
//       const para3 = document.createElement("p");
//       let node = document.createTextNode(`Temperature is ${data.temp}`);
//       para1.appendChild(node);
//       details[0].appendChild(para1);
//       node = document.createTextNode(`Weather is ${data.weather_description}`);
//       para2.appendChild(node);
//       details[0].appendChild(para2);
//       node = document.createTextNode(`Location is ${data.Location}`);
//       para3.appendChild(node);
//       details[0].appendChild(para3);
//     })
//   )
//   .catch((error) => {
//     console.log(error);
//     const details = document.getElementsByClassName("details");
//     const para1 = document.createElement("p");
//     let node = document.createTextNode(`Temperature is ${error.message}`);
//     para1.appendChild(node);
//     details[0].appendChild(para1);
//   });
