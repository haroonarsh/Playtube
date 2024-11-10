import multer from "multer"

        // define storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/temp");
    },
    username: function (req, file, cb) {
        cb(null, file.originalname);
        console.log("file.originalname", file.originalname);
    }
})

export const upload = multer({ storage });