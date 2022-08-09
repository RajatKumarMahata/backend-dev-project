const express = require('express');
const router = express.Router();
const abc = require('../logger/logger')
const bcd= require('../util/helper')
const def= require('../validator/formatter')

const lodash= require('lodash')


router.get('/test-me', function (req, res) {
   abc.welMs()
    bcd.printDate()
   bcd.getBatchInfo()
   def.xyz()
  let months=['January','February','March','April','May','June','July','August','September','October',
'November','December']
console.log("before chunck function --->",months)
let result= lodash.chunk(months,4)
console.log('after chunk function---->',result)

let oddnums=[1,3,5,7,9,11,13,15,17,19]
 let r1=lodash.tail(oddnums)
 console.log("before tail function---->",oddnums)
  console.log("after tail function---->",r1)

  let arrnums= [2,6,3,2,2]
  let r2=lodash.union(arrnums)
  console.log("before union function--->")
  console.log("after union function--->",r2)

    let pairaar= [["horror" ,"The Shining"],["drama","Titanic"],["thriller","Shutter Island"], ["fantasy","Pans Labyrinth"]]
    let r3= lodash.fromPairs(pairaar)
    console.log("before fromPaairs function-->",pairaar)
    console.log("after fromPaairs function-->",r3)
    res.send('My second ever api!')


});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

//1
router.get('/movies', function (req, res) {
  let movies=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
  res.send(JSON.stringify(movies))
  
})

//2

router.get('/get-movie/:indexNumber',function(req, res){ 
    
  let movies=['rang de basanti','The shining','Lord of the rings','batman begins']
  let index = req.params.indexNumber;
   res.send(movies[index])
})

//3
router.get('/movies/:indexNumber',function(req, res){ 
     let movies=['rang de basanti','The shining','Lord of the rings','batman begins']
    let index = req.params.indexNumber;
    if(index > movies.length-1){
       return res.send("no movie exist with this id ",)
    }else{
    res.send(movies[index])
    }
})

//4
router.get('/films',function(req, res){
  let moviesName=[ {"id": 1,"name": "The Shining"}, 
{"id": 2,"name": "Incendies"}, 
{"id": 3,"name": "Rang de Basanti"},
{"id": 4,"name": "Finding Nemo"}]
  res.send(moviesName)
})
//5
router.get('/films/:filmId',function(req, res){
  let moviesName=[ {"id": 1,"name": "The Shining"}, 
  {"id": 2,"name": "Incendies"}, 
  {"id": 3,"name": "Rang de Basanti"},
   {"id": 4,"name": "Finding Nemo"}]
     let index = req.params.filmId;
      if(index > moviesName.length-1){
         return res.send("no movie exist with this id ")
      }else{
      res.send(moviesName[index])
      }
 })

module.exports = router;