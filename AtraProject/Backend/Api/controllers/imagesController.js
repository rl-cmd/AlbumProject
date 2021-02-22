const Image = require('../models/Image');
const User = require('../models/User')
const createImage = async (req, res) => {
    try {
        console.log(req.body);
        let user = await User.findById(req.body.user_id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        let image = new Image(req.body);
        await image.save();
        // console.log(user.images);
        user.images.push(image._id);
        await user.save();
        return res.status(200).json(image)

    } catch (err) {
        return res.status(500).json({ "problem": err.message })
    }
}
const getImagesByIdUser = (req, res) => {
    User.findById(req.params.userId).populate('images')
        .then((user) => {
            if (!user)
                res.status(404).json({ "message": 'user not found' });
            else {
                console.log(user);
                res.status(200).json(user.images);
            }
        }).catch((err) => {
            res.status(500).json({ "eror": err });
            console.log(`err ${err}`);
        })
}
const updateImage = (req, res) => {
    console.log(req.body)
    let imageId = req.params.id;
    Image.findByIdAndUpdate(imageId, req.body, { new: true })
        .then((img) => {
            if (!img)
                return res.status(404).json({ message: 'Image not found' })
            return res.status(200).json(img);
        }).catch((err) => {
            res.status(500).json({ "eror": err });
            console.log(`err ${err}`);
        })

}


const deleteImage = (req, res) => {
    //jwtשימוש ב 
    // try{
    //     jwt.verify(req.headers.authorization, process.env.SECRET)
    // }
    // catch(err){
    //     res.status(401).json({ err: "verify err" })
    // }
    Image.findByIdAndDelete(req.params.id)
        .then((image) => {
            if (!image) {
                return res.status(404).json({ message: 'Image not found' })
            }
            else {
                return User.findByIdAndUpdate(userId, { $pull: { images: req.params.id } })
            }
        }).then((u) => {
            console.log(u);
            if (!u) {
                return res.status(404).json({ message: 'User not found' })
            }
            else {
                return res.status(200).json(image);
            }
        })
        .catch((err) => {
            console.log(`err ${err}`);
        })
}

const createMyImage = async (req, res) => {
    try {
        console.log(req.body);
        let user = await User.findById(req.body.user_id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        let image = new Image(req.body);
        await image.save();
        user.images.push(image._id);
        await user.save();
        return res.status(200).json(image)

    } catch (err) {
        return res.status(500).json({ "problem": err.message })
    }
}
//העלאת תמונה
const uploadImge = (req, res) => {
    console.log(req.file);
    const { path: image } = req.file;
    const { albumId, id, title, thumbnailUrl, user_id } = req.body;
    let myImage = new Image({
        albumId,
        id,
        title,
        url: image.replace('\\', '/'),
        thumbnailUrl,
        user_id
    });
    console.log(myImage);
    myImage.save().then((img) => {
        User.findById(req.body.user_id).then((user) => {
            if (!user) {

            }
            else {
                user.images.push(img._id);
                return user.save()
            }
        }).then((u) => {
            res.status(200).json({ message: `creat a new img ${img}` });
        }).catch(error => {
            res.status(500).json(error.message);
        });
    })
}
module.exports = { createImage, getImagesByIdUser, updateImage, deleteImage, createMyImage, uploadImge }

