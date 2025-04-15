// console.log(firebase);


function show_teams() {
  db.collection("teams")
    .get()
    .then((mydata) => {
      let docs = mydata.docs;

      let html = ``;

      docs.forEach((d) => {
        const team = d.data();

        let colorHtml = "";
        if (team.color) {
          if (team.color.home) {
            colorHtml += `<p><strong>Home Jersey Color:</strong> ${team.color.home}</p>`;
          }
          if (team.color.away) {
            colorHtml += `<p><strong>Away Jersey Color:</strong> ${team.color.away}</p>`;
          }
        }

        html += `
          <div class="box">
            <h2 class="title is-5">${team.name}</h2>
            <p><strong>City:</strong> ${team.city}</p>
            <p><strong>Country:</strong> ${team.country}</p>
            <p><strong>Fan Count:</strong> ${team.fan_count} million</p>
            <p><strong>Top Scorers:</strong> ${team.top_scores.join(", ")}</p>
            ${colorHtml}
            <button class="button is-danger is-small mt-2" onclick="del_doc('${d.id}')">Delete</button>
          </div>
        `;
      });

      document.querySelector("#all_teams").innerHTML = html;
    });
}

// Delete function
function del_doc(docid) {
  db.collection("teams")
    .doc(docid)
    .delete()
    .then(() => {
      alert("Team deleted!");
      show_teams(); // Refresh the displayed list
    });
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

let rm={
  name: "real madrid",
  city: "madrid",
  country:"spain",
  top_scores:['Ronaldo', 'Benzema', 'Hazard'],
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


// Task2. Querying data

// check in console to see the query is correct
// 1.	Show all teams in Spain.
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
//   .where("country", "==", "spain") // value is case sensitive
//   .where("city", "==", "madrid")
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
//   .where("country", "==", "spain")
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


// Display all output directly on the browser page
function renderQueryResults(containerId, docs) {
  const container = document.getElementById(containerId);
  let html = '';
  docs.forEach(d => {
    const team = d.data();
    html += `
      <div class="notification is-light">
        <strong>${team.name}</strong> (${team.city}, ${team.country})<br>
        Fans: ${team.fan_count}M<br>
        Top Scorers: ${team.top_scores.join(", ")}
      </div>
    `;
  });
  container.innerHTML += html;
}

function runAllQueries() {
  // 1. Teams in Spain
  db.collection("teams")
  .where("country", "==", "spain")
  .get()
  .then(data => renderQueryResults("query1", data.docs));

  // 2. Teams in Madrid, Spain
  db.collection("teams")
  .where("country", "==", "spain")
  .where("city", "==", "madrid")
  .get()
  .then(data => renderQueryResults("query2", data.docs));

  // 3. National Teams
  db.collection("teams")
  .where("city", "in", ["not applicable", "Not Applicable"])
  .get()
  .then(data => renderQueryResults("query3", data.docs));

  // 4. Teams not in Spain
  db.collection("teams")
  .where("country", "not-in", ["spain", "Spain"])
  .get()
  .then(data => renderQueryResults("query4", data.docs));

  // 5. Teams not in Spain or England
  db.collection("teams")
  .where("country", "not-in", ["spain", "england", "Spain", "England"])
  .get()
  .then(data => renderQueryResults("query5", data.docs));

  // 6. Teams in Spain with ≥700M fans
  db.collection("teams")
  .where("country", "==", "spain")
  .where("fan_count", ">=", 700)
  .get()
  .then(data => renderQueryResults("query6", data.docs));

  // 7. Teams with fans between 500M–700M
  db.collection("teams")
  .where("fan_count", ">=", 500)
  .where("fan_count", "<=", 700)
  .get()
  .then(data => renderQueryResults("query7", data.docs));

  // 8. Teams where Ronaldo is a top scorer
  db.collection("teams")
  .where("top_scores", "array-contains", "Ronaldo")
  .get()
  .then(data => renderQueryResults("query8", data.docs));

  // 9. Teams where Ronaldo, Maradona, or Messi is a top scorer
  db.collection("teams")
  .where("top_scores", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
  .get()
  .then(data => renderQueryResults("query9", data.docs));
}





// // // Task3 Updating data
// // // Update the worldwide fans (primitive data types) as follows:

// // 1.	Real Madrid: 811 M worldwide fans. Also, change team name to Real Madrid FC
// db.collection("teams").doc("vD7494ujBuWdwjKqXtKS").update({
//   fan_count: 811,
//   name: "Real Madrid FC",
// });
// // 2.	Barcelona: 747 M worldwide fans. Also, change team name to FC Barcelona
// db.collection("teams").doc("OMqo3vTC4zq8iimTqXDD").update({
//   fan_count: 747,
//   name: "FC Barcelona",
// });



// // // update the top scorers (array) as follows:
// // 1.	Real Madrid: Remove Hazard from the list and add Crispo to the list
// // Remove Hazard
// db.collection("teams").doc("vD7494ujBuWdwjKqXtKS").update({
//   top_scores: firebase.firestore.FieldValue.arrayRemove("Hazard"),
// });
// // Then add Crispo
// db.collection("teams").doc("vD7494ujBuWdwjKqXtKS").update({
//   top_scores: firebase.firestore.FieldValue.arrayUnion("Crispo"),
// });


// // 2.	Barcelona: Remove Puyol from the list and add Deco to the list
// // Remove Puyol
// db.collection("teams").doc("OMqo3vTC4zq8iimTqXDD").update({
//   top_scores: firebase.firestore.FieldValue.arrayRemove("Puyol"),
// });
// // Add Deco
// db.collection("teams").doc("OMqo3vTC4zq8iimTqXDD").update({
//   top_scores: firebase.firestore.FieldValue.arrayUnion("Deco"),
// });


// // b.	Adding new fields to existing documents
// // Real Madrid: White (home). Black (away)
// db.collection("teams").doc("vD7494ujBuWdwjKqXtKS").update({
//   color: {
//     home: "White",
//     away: "Black"
//   }
// });

// // Barcelona: Red (home). Gold (away)
// db.collection("teams").doc("OMqo3vTC4zq8iimTqXDD").update({
//   color: {
//     home: "Red",
//     away: "Gold"
//   }
// });

// // Next, update the jersey colors (object)
// // c.	Real Madrid: Purple jersey color for away matches
// db.collection("teams").doc("vD7494ujBuWdwjKqXtKS").update({
//   "color.away": "Purple",
// });

// // d.	Barcelona: Pink jersey color for away matches
// db.collection("teams").doc("OMqo3vTC4zq8iimTqXDD").update({
//   "color.away": "Pink",
// });


// Call this after page load
show_teams();
runAllQueries();