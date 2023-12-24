const express = require("express");
const { v4: uuidv4 } = require("uuid");
const port = 3000;
const app = express();
app.use(express.json());

const requests = [];

const checkUserId = (req, res, next) => {
  const { id } = req.params;
  const index = requests.findIndex((request) => request.id === id);
  if (index < 0) {
    return res.status(404).json({ message: "request not found" });
  }

  req.userId = id;
  req.userIndex = index;

  next();
};

const showMethodAndUrl = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

// Rotas get
app.get("/order", showMethodAndUrl, (req, res) => {
  return res.json(requests);
});
app.get("/order/:id", showMethodAndUrl, checkUserId, (req, res) => {
  const id = req.userId;
  const index = req.userIndex;

  const reqs = requests[index];
  return res.json(reqs);
});

// Rotas post
app.post("/order", showMethodAndUrl, (req, res) => {
  const { order, clientName, price } = req.body;
  const pedido = {
    id: uuidv4(),
    order,
    clientName,
    price,
    status: "Em preparação",
  };
  requests.push(pedido);
  return res.status(201).json(pedido);
});

// Rotas put
app.put("/order/:id", showMethodAndUrl, checkUserId, (req, res) => {
  const id = req.userId;
  const index = req.userIndex;
  const { order, clientName, price, status } = req.body;
  const updateRequest = { id, order, clientName, price, status };

  requests[index] = updateRequest;

  return res.json(updateRequest);
});
// Rotas delete
app.delete("/order/:id", showMethodAndUrl, checkUserId, (req, res) => {
  const id = req.userId;
  const index = req.userIndex;
  requests.splice(index, 1);

  return res.json();
});

// Rotas patch
app.patch("/order/:id", showMethodAndUrl, checkUserId, (req, res) => {
  const id = req.userId;
  const index = req.userIndex;
  const { status } = req.body;

  requests[index].status = "Pronto!";

  return res.json(requests[index]);
});

app.listen(port, () => {
  console.log("server started");
});
