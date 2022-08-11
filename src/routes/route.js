const express = require('express');
const router = express.Router();

    let persons=[
        {
            name:"PK",
            age:10,
            votingStatus:false
        },
        {
            name:"Sk",
            age:20,
            votingStatus:false
        },
        {
            name:"AA",
            age:70,
            votingStatus:false
        },
        {
            name:"HO",
            age:40,
            votingStatus:false
        }
    ]

   router.post('/voting', function(req, res){

       for(let i=0; i<persons.length; i++){
        if(persons.age>=18){
            votingStatus = true;
            break;
        }
     }

            if(persons.age<18){
                res.send(persons.votingStatus=false)
            }else
            {
                persons.votingStatus.push(true)
                res.send(persons)
            }
            
    })
  
module.exports = router;
