const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myDatabase = knex({
    client:'pg',
    connection:{
        host:'127.0.0.1',
        user:'postgres',
        password:'Jain@123',
        database:'advice'

    }
});
const app = express();

app.use(bodyParser.json());
app.use(cors())
random=(mail)=>{
console.log(mail)
myDatabase('random').insert({
    email: mail
})
}
app.post('/signin', (req,res)=>{
    
    myDatabase.select('email','hash').from('login')
   
    .where('email', '=', req.body.email)
    .then(data=>{
       const isValid= bcrypt.compareSync(req.body.password,data[0].hash);
     if(isValid){
        return myDatabase.select('*').from('users')
        .where('email','=',req.body.email)
        .then(user=>{
            var token = jwt.sign({username:user[0].name}, 'supersecret',{expiresIn: 120});
            var myres = [user[0],{"token":token}]
            res.json(myres)
            random(req.body.email)
            //  myDatabase('random').insert({
                //    email: req.body.email
                // }).then(res.json('i have email'))
                
            })
         .catch(err=>res.status(400).json('unable to get user'))
     } 
     else{
     res.status(400).json('wrong credentials')
     }
    })
    .catch(err=>res.status(400).json('wrong credentials'))
})

app.post('/register', (req,res)=>{
    const {email,name,password}= req.body;
    // bcrypt.hash(password, saltRounds, function(err, hash) {
    //     console.log(hash)
    // });
    const hash = bcrypt.hashSync(password,saltRounds);
    myDatabase.transaction(trx=>{
        trx.insert({
            hash:hash,
            email:email
        })
        .into('login')
        .returning('email')
        .then(loginEmail=>{
         return trx('users')
         .returning('*')
         .insert({
             email:loginEmail[0],
             name:name,
             joined:new Date()
         })
         .then(response=>{
             res.json(response[0]);
         }).catch(err=>{
             console.log(err)
         })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    }
    )
   
    // database.users.push({
    //     id:'125',
    //     name:name,
    //     email:email,
    //     password:password,
    //     joined:new Date
    // })
    // res.json(database.users[database.users.length-1]);

})
app.post('/query', (req,res)=>{
    myDatabase('query').insert({
        query: req.body.query,
        userId: req.body.userId,
        name: req.body.name,
        email: req.body.email
    }).then(res.json('updated successfully'))

})
app.get('/query/:userId', function (req, res) {
    myDatabase.select('userId','query','solution').from('query')
    .where('userId', '=', req.params.userId)
    .then(data=>{
        res.json(data)
    })
 });
 app.post('/subscribe', function (req, res) {
    myDatabase('subscribe').insert({
        email:req.body.email
    })
    .then(data=>{
        res.json("subscribed successfully")
    })
 });

app.listen(3000,()=>{
    console.log('app is running on port 3000')
})