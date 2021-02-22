const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})
const fileFilter = (req, file, cb) => {
    if (file.minetype === 'image/jpeg' || file.minetype === 'image/png') {
        cb(null, true);
    }
    else
        cb(null, false);
}

const upload = multer({
    // dest: 'uploads/',
    storage,
    limits: {
        fileSize: 1024 * 1024 * 2
    },
    // fileFilter
});
module.exports = upload;