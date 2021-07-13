const express = require("express");
const path = require("path");
const hbs = require("hbs");
const forcast = require("./utils/forcast");

/**
 * 1: Define app
 * 2: Listen the app to particular port
 *
 */
const app = express();

/**
 * ! Servig dynamic content using handlebar
 */
/**
 * Loading dynamix contect with template engine
 *  HandleBar(teamplate engine)
 *          ! Allow us to render dynamic webpage
 *          ! easly create code that can be reused

 hbs make use if handlebar and easly integrate with express

 we need to tell expres wich temaplate engine we are using

 app.set('view engine','hbs')
 1> Create View folder for templates
 2> Create filename.hbs file for the template

3> use response.redner('index')- allow us to render one of our handlebar template
4> we can alos pass value to template from node by object as second argument
      render('index',{title:"Weather app"})


      5> We can alos set the view director(can change name) to anywhere an use that by using
      const view path=path.join(__dirname,'../templates)
      app.set('views,viewpath)
 */

app.set("view engine", "hbs");

/**
 * Using partials and changing directory of views
 */
console.log("path", path.join(__dirname, "../templates"));
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
app.set("views", viewPath);
//setting partial to hbs

/**
 * register partial with the partial path
 * use {{>partialflename to import the partial to view}}
 */
hbs.registerPartials(partialPath);

app.get("", (req, res) => {
  res.render("index", { title: "Weather app", name: "Arun" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About", name: "Aru Krishnan" });
});
/**
 * !serving up static assets
 * we need to set the app to use static file
 */

// console.log(path.join(__dirname, "../public"));
app.use(express.static(path.join(__dirname, "../public")));
/**
 * !Routes
 */
app.get("/", (req, res) => {
  res.send("Welcome");
});
//html response
app.get("/html", (req, res) => {
  res.send("<h1>HTML RESPONSE</h1>");
});
//json response

app.get("/json", (req, res) => {
  res.json({ name: "arun" });
});

app.get("/weather/", (req, res) => {
  console.log(req.query);

  if (!req.query.address) {
    return res.send("Please Provide query parameter");
  }
  forcast(req.query.address, (error, data) => {
    if (error) {
      console.log("got error");
      // res.send(
      //   {
      //     message:
      //       "Details for this location is not available please try another location",
      //   },
      //   404
      // );
      // res.status(404).send("Not dfound");
      res.send({
        temp: 29,
        weather_description: "Hot",
        Location: "Kannur",
      });
    } else {
      console.log("DATA", data);
      // res.send({
      //   temp: data.temperature,
      //   weather_description: data.weather_descriptions[0],
      //   Location: req.query.address,
      // });
      res.send({
        temp: 29,
        weather_description: "Hot",
        Location: "Kannur",
      });
    }
  });
});
app.get("/about/*", (req, res) => {
  res.render("error", { name: "Arun Krishnan", page: "About" });
});
app.get("*", (req, res) => {
  res.render("error");
});
app.listen(3000, () => {
  console.log("APP is Running on 3000");
});
console.log("New");
