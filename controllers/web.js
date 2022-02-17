const fs = require('fs')
const { sendMessage } = require('../controllers/send')
const SESSION_FILE_PATH = `${__dirname}/../session.json`;

const sendMessagePost = (req, res) => {
    const { message, number } = req.body
    const client = req.clientWs || null;
    sendMessage(client, number, message)
    res.send({ status: 'Enviado!' })
}

const getQr = (req, res) => {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    if(!fs.existsSync(SESSION_FILE_PATH)){
        fs.createReadStream(`${__dirname}/../mediaSend/qr-code.svg`).pipe(res);
    } else {
        fs.createReadStream(`${__dirname}/../mediaSend/Image-Not-Found.svg`).pipe(res);
    }
}

module.exports = { sendMessagePost, getQr }