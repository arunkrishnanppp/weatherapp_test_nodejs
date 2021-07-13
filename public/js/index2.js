console.log("loaded");

const form = document.querySelector("#form1");
const inputValue = document.querySelector("#input1");

const para1 = document.querySelector("#para1");
const para2 = document.querySelector("#para2");
const para3 = document.querySelector("#para3");
console.log(form);
para1.innerHTML = "Hello";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  para1.textContent = "";
  para2.textContent = "";
  para3.textContent = "";
  const location = inputValue.value;
  console.log(location);
  if (location != "") {
    fetch(`/weather?address=${location}`)
      .then((response) => {
        if (!response.ok)
          throw new Error("No Able to find the weather for this location");

        response.json().then((data) => {
          console.log(data);
          para1.textContent = `Temperature: ${data.temp}`;
          para2.textContent = data.weather_description;
          para3.textContent = location;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    para1.textContent = `Please enter a location to fetch details & Try again`;
  }
});
