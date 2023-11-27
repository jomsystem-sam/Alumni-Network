import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import eventRoutes from "./routes/eventposts.js";
// import eventregisterRoutes from "./routes/eventregister.js";
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import { createEventPost } from "./controllers/eventpost.js";
import { verifyToken } from "./middleware/auth.js";
import { eventregistered } from "./controllers/auth.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
  
});
const upload = multer({ storage });


/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register);
//app post without upload.single
app.post("/auth/eventregistered",upload.any(""),eventregistered);
app.post("/posts", verifyToken, upload.single("picture"), createPost);
app.post("/posts", verifyToken, upload.single("picture"), createPost);
app.post("/posts", verifyToken, upload.single("video"), createPost);
app.post("/posts", verifyToken, upload.array("attachments"), createPost);
app.post("/eventposts", verifyToken, upload.single("picture"), createEventPost);
app.post("/eventposts", verifyToken, upload.single("video"), createEventPost);
app.post("/eventposts", verifyToken, upload.array("attachments"), createEventPost);



/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/eventposts", eventRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.SERVER_PORT || 5001;
mongoose.set("strictQuery" , true);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

   /*
                           _ooOoo_
                          o8888888o
                          88" . "88
                          (| -_- |)
                          O\  =  /O
                       ____/`---'\____
                     .'  \\|     |//  `.
                    /  \\|||  :  |||//  \
                   /  _||||| -:- |||||-  \
                   |   | \\\  -  /// |   |
                   | \_|  ''\---/''  |   |
                   \  .-\__  `-`  ___/-. /
                 ___`. .'  /--.--\  `. . __
              ."" '<  `.___\_<|>_/___.'  >'"".
             | | :  `- \`.;`\ _ /`;.`/ - ` : | |
             \  \ `-.   \_ __\ /__ _/   .-` /  /
        ======`-.____`-.___\_____/___.-`____.-'======
                           `=---='
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                 佛祖保佑           永无BUG
        */


