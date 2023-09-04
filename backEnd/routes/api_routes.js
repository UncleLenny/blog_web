const express=require('express')
const router=express.Router()
const accountModel=require('../models/account_md')
const storyModel = require('../models/story_md')
const commentModel = require('../models/comment_md')
const likeModel = require('../models/like_md')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const salt = bcrypt.genSaltSync(10)
const cookieParser = require('cookie-parser')
const secret = 'akj7hbsd57hv767tshghiu2fsfhb29y268g81gv1yvs72giju8y9js'



let multer = require('multer')
let fs = require('fs')
let path = require('path')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let __dir =  path.join(__dirname,'../public/uploads',); 
        cb(null, __dir);
    },
    filename: function (req, file, cb) {
            let filename = file.originalname.toLowerCase();
            cb(null, filename);
        }
    });
let upload = multer({storage});

// ACCOUNT MANAGEMENT ROUTES
router.post('/createAccount', async (req, res) => {

    // if(req.files.length > 0 ){
    //     req.body.image = req.files[0].filename
    // }

    // accountModel.create(req.body).then((account) => {
    //     res.send({ success: true, data: account});
    // }).catch((err) => {
    //     console.log(err);
    //     res.send({'error': true, message: err.message}); 
    // })
  
    const { fullname, username, email, phone, password} = req.body;
    try{
        const createUser = await accountModel.create({
            fullname: fullname,
            username: username,
            phone: phone,
            email: email.toLowerCase(),
            password: bcrypt.hashSync(password,salt),
        });
        res.json(createUser);
    } catch(e) {
        console.log(e);
        res.status(400).json(e);
    }
});

router.post('/login', async (req, res) => {

    const { email, password } = req.body;
    try {
        const createUser = await accountModel.findOne({ email: email });
        const passOk = bcrypt.compareSync(password, createUser.password);

        if(passOk) {
            jwt.sign(
                { email, id: createUser._id }, 
                secret, 
                {}, 
                (err, token) => {
                    if(err) throw err;
                    res.cookie("token", token).status(200).json('Login Successful');
            });
        } else {
            res.status(400).json('Wrong Credentials')
        }
    } catch (err) {
        res.status(500).json('Server Error');
    }
});
 
router.get('/profile', (req, res) => {
    const {token} = req.cookies;
    
    if(!token) {
        return res.status(401).json('Token not Found');
    }

    jwt.verify(token, secret, {}, async (err, info) => {
        if(err) {
            return res.status(500).json('Failed to verify token');
        }
        const createUser = await accountModel.findOne({ _id:info.id}, {username:true, _id: true, email: true});
        console.log(createUser)
        res.json(createUser);
    });
});

router.post('/logout', (req, res) => {
    res.cookie("token", "").json('Logout Successful');
})

router.get('/account/:id', (req, res) => {
    accountModel.findById(req.params.id).lean().then((account) => {
        res.send({success:true, data: account});
    })
})

router.post('/update-account', upload.any(), (req, res) => {
    req.body.image = req.files[0].filename
    accountModel.findByIdAndUpdate(req.body.id, req.body).then(() => {
        accountModel.findById(req.body.id).lean().then((account) => {
            res.send({success: true, msg: "Account Updated Successfully", data:account})
        })
    })

    router.delete('/delete-account/:id', (req, res) => {
        accountModel.findByIdAndDelete(req.params.id).lean().then(() => {
            res.send({success: true, msg: "Account Deleted Successfully"})
        })
    })
})

router.get('/accounts', (req, res) => {
    accountModel.find().lean().then((account) => {
        console.log(account)
        res.send({success: true, data: account})
    })
})




// STORY MANAGEMENT ROUTES
router.post('/createStory', upload.any(), (req, res) => {
    const {token} = req.cookies;
    
    if(!token) {
        return res.status(401).json('Token not Found');
    }

    if (req.files.length > 0){
        req.body.image = req.files[0].filename
    }
    
    
    jwt.verify(token, secret, {}, async (err, info) => {
        if(err) {
            return res.status(500).json('Failed to verify token');
        }
        
        storyModel.create({
            accountId: info.id,
            topic: req.body.topic,
            category: req.body.category,
            content: req.body.content,
            image: req.body.image,
        }).then((story) => {
            res.send({ success: true, data: story});
        }).catch((err) => {
            console.log(err);
            res.send({'error': true, message: err.message});
        })
    });
})

router.get('/stories', (req, res) => {
    storyModel.find().populate("accountId", ["username", "profilePic", "fullname"]).lean().then((story) => {
        console.log(story)
        res.send({success: true, data: story})
    })
})

router.get('/story/:id', (req, res) => {
    storyModel.findById(req.params.id).lean().then((story) => {
        res.send({success:true, data: story});
    })
})

router.post('/update-story', upload.any(), (req, res) => {
    if (req.files.length > 0) {
        req.body.image = req.files[0].filename;
    }
    storyModel.findByIdAndUpdate(req.params.id, req.body).then(() => {
        storyModel.findById(req.body.id).lean().then((story) => {
            res.send({success: true, msg: "Story Updated Successfully", data:story})
        }).catch((err) => {
            res.send({error: true, message: err.message});
        })
    })

    router.delete('/delete-story/:id', (req, res) => {
        storyModel.findByIdAndDelete(req.params.id).lean().then(() => {
            res.send({success: true, msg: "Story Deleted Successfully"})
        })
    })
})


// COMMENT MANAGEMENT ROUTES
router.post('/createComment', upload.any(), (req, res) => {
    const {token} = req.cookies;
    
    if(!token) {
        return res.status(401).json('Token not Found');
    }                    

    // if (req.files.length > 0){
    //     req.body.image = req.files[0].filename
    // }
    
    jwt.verify(token, secret, {}, async (err, info) => {
        if(err) {
            return res.status(500).json('Failed to verify token');
        }
        
        commentModel.create({
            accountId: info.id,
            storyId: req.body.storyId,
            comment: req.body.comment,
        }).then((story) => {
            res.send({ success: true, data: story});
        }).catch((err) => {
            console.log(err);
            res.send({'error': true, message: err.message});
        })
    });

})

router.get('/comments', (req, res) => {
    commentModel.find().lean().then((comment) => {
        res.send({success: true, data: comment})
    })
})

router.get('/comment/:id', (req, res) => {
    commentModel.findById(req.params.id).lean().then((comment) => {
        res.send({success:true, data: comment});
    })
})

// router.get('/comment/:storyId', (req, res) => {
//     commentModel.findById(req.params.id).lean().then((comment) => {
//         res.send({success:true, data: comment});
//     })
// })

router.post('/update-comment', upload.any(), (req, res) => {
    req.body.image = req.files[0].filename
    commentModel.findByIdAndUpdate(req.body.id, req.body).then(() => {
        commentModel.findById(req.body.id).lean().then((comment) => {
            res.send({success: true, msg: "Comment Updated Successfully", data:comment})
        })
    })

    router.delete('/delete-comment/:id', (req, res) => {
        commentModel.findByIdAndDelete(req.params.id).lean().then(() => {
            res.send({success: true, msg: "Comment Deleted Successfully"})
        })
    })
})


// LIKE MANAGEMENT ROUTES
router.post('/story/:id/like', (req, res) => {
    const { token } = req.cookies;
    try {
        jwt.verify(token, secret, {}, async (error, myLike) => {
            if (error) return res.send({ message: "Unable to like" });

            const payload = {
                accountId: myLike.id,
                storyId: req.params.id,
                like: req.body.like,
                timestamp: Date.now()
            };

            const updatedLike = await likeModel.findOneAndUpdate(
                { accountId: myLike.id, storyId: req.params.id },
                payload,
                { upsert: true, new: true }
            );

            // Get the total count of likes for that story
            const likesCount = await likeModel.countDocuments({ storyId: req.params.id });
            res.send({ message: "Liked", likesCount }); // Send the updated likes count
        });
    } catch (err) {
        res.send({ error: true, message: err.message });
    }
});


router.get('/likes', (req, res) => {
    commentModel.find().lean().then((like) => {
        res.send({success: true, data: like})
    })
})

router.get('/like/:id', (req, res) => {
    commentModel.findById(req.params.id).lean().then((like) => {
        res.send({success:true, data: like});
    })
})

router.post('/remove-like', upload.any(), (req, res) => {
    commentModel.findByIdAndDelete(req.params.id).lean().then(() => {
        res.send({success: true, msg: "Like Removed Successfully"})
    })
})

module.exports=router