const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8081;
const SECRET_KEY = "key";

app.use(bodyParser.json());

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

const users = [
  { email: "admin@mail.ru", password: "adminpass", role: "admin" },
  { email: "manager@mail.ru", password: "managerpass", role: "manager" },
];

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    const accessToken = jwt.sign(
      { email: user.email, role: user.role },
      SECRET_KEY
    );
    res.json({ accessToken });
  } else {
    res.status(401).send("Invalid email or password");
  }
});

app.get("/admin", authenticateToken, (req, res) => {
  if (req.user.role !== "admin") return res.sendStatus(403);
  res.json({ message: "Admin access granted" });
});

app.get("/", authenticateToken, (req, res) => {
  if (req.user.role !== "manager") return res.sendStatus(403);
  res.json({ message: "Manager access granted" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
