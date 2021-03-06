import * as express from "express";
import * as path from "path";

const app = express();
const PORT = 3000;

const staticFolder = path.resolve(__dirname, "static");

app.use(express.static("static"));

app.get("/", (req, res) => res.sendFile("index.html", { root: staticFolder }));

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
