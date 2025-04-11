console.log(firebase);

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

let rm={
  name: "real madrid",
  city: "madrid",
  country:"spain",
  top_scores:['ronaldo', 'benzema', 'hazard'],
  fan_count:798
};

let br={
  name: "barcelona",
  city: "barcelona",
  country:"spain",
  top_scores:["Messi", "Suarez", "Puyol"],
  fan_count: 738
};


let mu={
  name: "manchester united",
  city: "manchester",
  country:"england",
  top_scores:["Cantona", "Rooney", "Ronaldo"],
  fan_count: 755
};

let mc={
  name: "manchester city",
  city: "manchester",
  country:"england",
  top_scores:["Sterling", "Aguero", "Haaland"],
  fan_count: 537
};

let braznation={
  name: "brazil national team",
  city: "not applicable",
  country:"brazil",
  top_scores:["Ronaldinho", "Cafu", "Bebeto"],
  fan_count: 950
};

let argnation={
  name: "argentina national team",
  city: "not applicable",
  country:"argentina",
  top_scores:["Messi", "Batistuta", "Maradona"],
  fan_count: 888
};

let atm={
  name: "atletico madrid",
  city: "madrid",
  country:"spain",
  top_scores:["Aragonés", "Griezmann", "Torez"],
  fan_count: 400
};

// // add to the database
// db.collection("teams").add(rm); //after running comment out this
// db.collection("teams").add(br); //after running comment out this
// db.collection("teams").add(mu); //after running comment out this
// db.collection("teams").add(mc); //after running comment out this
// db.collection("teams").add(braznation); //after running comment out this
// db.collection("teams").add(argnation); //after running comment out this
// db.collection("teams").add(atm); //after running comment out this


// // Task2. Querying data
// // 1.	Show all teams in Spain.
// db.collection("teams")
//   .where("country", "==", "spain") // value is case sensitive
//   .get()
//   .then(data => {
//   let mydocs = data.docs;
//   // if no results
//   if(mydocs.length == 0){
//     console.log("no data returned");
//     return;
//   }

//   mydocs.forEach(d=>{
//     console.log(d.data());
//   });
// });

// // 2.	Show all teams in Madrid, Spain
// db.collection("teams")
//   .where("country", "in", ["spain", "Spain"]) // value is case sensitive
//   .where("city", "in", ["madrid", "Madrid"])
//   .get()
//   .then(data => {
//   let mydocs = data.docs;
//   // if no results
//   if(mydocs.length == 0){
//     console.log("no data returned");
//     return;
//   }

//   mydocs.forEach(d=>{
//     console.log(d.data());
//   });
// });

// // 3.	Show all national teams (Remember there might be new national teams added later)
// db.collection("teams")
//   .where("city", "in", ["not applicable", "Not Applicable"])
//   .get()
//   .then(data => {
//   let mydocs = data.docs;
//   // if no results
//   if(mydocs.length == 0){
//     console.log("no data returned");
//     return;
//   }

//   mydocs.forEach(d=>{
//     console.log(d.data());
//   });
// });

// // 4.	Show all teams that are not in Spain
// db.collection("teams")
//   .where("country", "not-in", ["spain", "Spain"])
//   .get()
//   .then(data => {
//   let mydocs = data.docs;
//   // if no results
//   if(mydocs.length == 0){
//     console.log("no data returned");
//     return;
//   }

//   mydocs.forEach(d=>{
//     console.log(d.data());
//   });
// });

// // 5.	Show all teams that are not in Spain or England
// db.collection("teams")
//   .where("country", "not-in", ["spain", "england", "Spain", "England"])
//   .get()
//   .then(data => {
//   let mydocs = data.docs;
//   // if no results
//   if(mydocs.length == 0){
//     console.log("no data returned");
//     return;
//   }

//   mydocs.forEach(d=>{
//     console.log(d.data());
//   });
// });
// // 6.	Show all teams in Spain with more than 700M fans
// db.collection("teams")
//   .where("country", "in", ["spain", "Spain"])
//   .where("fan_count", ">=", 700)
//   .get()
//   .then(data => {
//   let mydocs = data.docs;
//   // if no results
//   if(mydocs.length == 0){
//     console.log("no data returned");
//     return;
//   }

//   mydocs.forEach(d=>{
//     console.log(d.data());
//   });
// });

// // 7.	Show all teams with a number of fans in the range of 500M and 600M 
// db.collection("teams")
//   .where("fan_count", ">=", 500)
//   .where("fan_count", "<=", 700)
//   .get()
//   .then(data => {
//   let mydocs = data.docs;
//   // if no results
//   if(mydocs.length == 0){
//     console.log("no data returned");
//     return;
//   }

//   mydocs.forEach(d=>{
//     console.log(d.data());
//   });
// });

// // 8.	Show all teams where Ronaldo is a top scorer
// db.collection("teams")
//   .where("top_scores", "array-contains", "Ronaldo")
//   .get()
//   .then(data => {
//   let mydocs = data.docs;
//   // if no results
//   if(mydocs.length == 0){
//     console.log("no data returned");
//     return;
//   }

//   mydocs.forEach(d=>{
//     console.log(d.data());
//   });
// });

// // 9.	Show all teams where Ronaldo,  Maradona, or Messi is a top scorer
// db.collection("teams")
//   .where("top_scores", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
//   .get()
//   .then(data => {
//   let mydocs = data.docs;
//   // if no results
//   if(mydocs.length == 0){
//     console.log("no data returned");
//     return;
//   }

//   mydocs.forEach(d=>{
//     console.log(d.data());
//   });
// });




// // Task3 Updating data
// // Update the worldwide fans (primitive data types) as follows:

// // 1.	Real Madrid: 811 M worldwide fans. Also, change team name to Real Madrid FC
// db.collection("teams").doc("rm").update({
//   fan_count: 811,
//   name: "Real Madrid FC",
// });
// // 2.	Barcelona: 747 M worldwide fans. Also, change team name to FC Barcelona
// db.collection("teams").doc("br").update({
//   fan_count: 747,
//   name: "FC Barcelona",
// });



// // update the top scorers (array) as follows:
// // 1.	Real Madrid: Remove Hazard from the list and add Crispo to the list
// db.collection("teams") 
// .doc("rm")
// .update({
//   top_scores: firebase.firestore.FieldValue.arrayRemove("Hazard"),
//   top_scores: firebase.firestore.FieldValue.arrayUnion("Crispo"),
// });


// // 2.	Barcelona: Remove Puyol from the list and add Deco to the list
// db.collection("teams") 
// .doc("br")
// .update({
//   top_scores: firebase.firestore.FieldValue.arrayRemove("Puyol"),
//   top_scores: firebase.firestore.FieldValue.arrayUnion("Deco"),
// });


// // b.	Adding new fields to existing documents
// // Real Madrid: White (home). Black (away)
// db.collection("teams").doc("rm").update({
//   color: {
//     home: "White",
//     away: "Black"
//   }
// });

// // Barcelona: Red (home). Gold (away)
// db.collection("teams").doc("br").update({
//   color: {
//     home: "Red",
//     away: "Gold"
//   }
// });

// // Next, update the jersey colors (object)
// // c.	Real Madrid: Purple jersey color for away matches
// db.collection("teams").doc("rm").update({
//   "away": "Purple",
// });

// // d.	Barcelona: Pink jersey color for away matches
// db.collection("teams").doc("br").update({
//   "away": "Pink",
// });