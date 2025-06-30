function createCourseRoutes(app) {
  app.post("/course/purchase", function (req, res) {
    //you would expect the user to pay you money
    res.json({
      message: "course purchase endpoint",
    });
  });

  app.get("/course/preview", function (req, res) {
    res.json({
      message: "course purchase endpoint",
    });
  });
}

module.exports = {
    createCourseRoutes: createCourseRoutes
}
