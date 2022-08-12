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
let inputAge= req.query.votingAge
// let EligiblePersons=[]
//        for(let i=0; i<persons.length; i++){
//         if(persons[i].age>votingAge){
//             persons[i].votingStatus = true;
//             EligiblePersons.push(persons[i])
//         }
//      }
//      console.log({persons:EligiblePersons, status:true})
//       res.send({persons:EligiblePersons, status:true})

    persons.map(per=>(per.age>inputAge)?per.votingStatus=true:per.votingStatus);
   let final=persons.filter(pson=>{if(pson.votingStatus==true){return pson.name}})
   res.send({data:final})
    })
  
module.exports = router;
