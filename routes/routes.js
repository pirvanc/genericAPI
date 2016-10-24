// routes.js


var appRouter = function(app) {
  app.get("/users", function(req, res) {
     res.json({ "Message": "Hello World" });
 });
 app.get("/concerts", function(req, res) {
    res.json({ "Concert": "1" });
});
}

module.exports = appRouter;
