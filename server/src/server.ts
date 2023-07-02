import fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import multipart from "@fastify/multipart";
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from "./routes/auth";
import { uploadRoutes } from "./routes/upload";
import { resolve } from "node:path";

const app = fastify();

app.register(multipart);
app.register(require("@fastify/static"), {
  root: resolve(__dirname, "./uploads"),
  prefix: "/uploads",
});
// app.register(require("@fastify/multipart"));

app.register(cors, {
  origin: true,
});

app.register(jwt, {
  //string aleatória e única
  secret: "alksjfkjsancsdkj",
});

app.register(authRoutes);
app.register(uploadRoutes);
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("Http server running on http://localhost:3333");
  });
