const router = require('express').Router()

const formidable = require('formidable');
const ImageKit = require("imagekit");
const fs = require('fs');
const imagekit = new ImageKit({
    publicKey: "public_kt9dR5nw0gRxn9m6veBfx++7l8c=",
    privateKey: "private_Q2xIfwYiG6bWRCTJhnbR86yLzbQ=",
    urlEndpoint: "https://ik.imagekit.io/jhb2n9fbao"
});



router.post('/', (req, res) => {

    const form = formidable();
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.status(500).json({ message: "Internal Server Error" });
            return;
        }
        const fileRaw = fs.createReadStream(files.images.filepath);
   

        imagekit.upload({
            file: fileRaw, //required
            fileName: files.images.originalFilename,   //required
            extensions: [
                {
                    name: "google-auto-tagging",
                    maxTags: 5,
                    minConfidence: 95
                }
            ]
        }).then(response => {
            res.status(200).json({ message: 'FIle has been uploaded', payload: response });
        }).catch(error => {
          
            res.status(500).json({ message: 'Error in uploading file' });
        });
    });
});

module.exports = router;
