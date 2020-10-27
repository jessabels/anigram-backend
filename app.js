const express = require("express");
const morgan = require("morgan");

const usersRouter = require("./routes/api/users");
const sessionRouter = require("./routes/api/session");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/session", sessionRouter);

app.use((req, res, next) => {
  const err = new Error("The requested page couldn't be found.");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(404);
    res.send("Page Not Found");
  } else {
    next(err);
  }
});

app.use(function (err, _req, res, _next) {
  res.status(err.status || 500);
  if (err.status === 401) {
    res.set("WWW-Authenticate", "Bearer");
  }
  res.json({
    message: err.message,
    error: JSON.parse(JSON.stringify(err)),
  });
});

module.exports = app;
