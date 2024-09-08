const app = require('express');
const router = app.Router();
const path = require('path');

router.route('/user').get((req,res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'user.html'))
})

module.exports = router;