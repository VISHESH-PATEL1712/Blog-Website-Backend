// import multer from "multer";
// import { GridFsStorage } from "multer-gridfs-storage";
// import dotenv from "dotenv";

// dotenv.config();

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

// const storage = new GridFsStorage({
//   url: `mongodb+srv://${username}:${password}@cluster0.puplslt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
//   options: { useNewUrlParser: true },
//   file: (request, file) => {
//     console.log("This is the file value:", file);

//     const match = ["image/png", "image/jpg", "image/jpeg"];

//     if (match.indexOf(file.mimetype) === -1) {
//       console.log("indexOf Matched");
//       return `${Date.now()}-blog-${file.originalname}`;
//     }

//     return {
//       bucketName: "photos/",
//       filename: `${Date.now()}-blog-${file.originalname}`,
//     };
//   },
// });

// const upload = multer({ storage });

// export default upload;

// upload.js

import multer from "multer";

// Configure local storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "photos"); // Ensure that this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueFilename = `${Date.now()}-blog-${file.originalname}`;
    req.filename = uniqueFilename;
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage });

export default upload;
