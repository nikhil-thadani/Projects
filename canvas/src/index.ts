import { SendRequest } from "./http";

// const req = new SendRequest();
// const d = req.fetchData().then((d) => JSON.stringify(d)).then(d);
// d.then(data => {
//     data.for
// })

const req = new SendRequest();
const d = req.fetchData().then((d) => {
  //   d.map((da) => console.log(da));

  JSON.stringify(d);
  const keys = Object.keys(d[0]);

  const topRow = document.createElement("tr");
  topRow.style.background = "#2e2d4d";
  topRow.style.color = "#fff";

  const table = document.getElementById("table");
  table?.appendChild(topRow);
  keys.forEach((key) => {
    const th = document.createElement("th");
    th.style.background = "#337357";
    th.style.textTransform = "capitalize";
    th.style.padding = "10px";
    th.textContent = key;
    topRow.appendChild(th);
  });
  d.forEach((elm) => {
    const keys = Object.keys(elm);
    const row = document.createElement("tr");
    row.style.background = "#eeeee4";
    // row.style.color = "#FFF";
    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = (<any>elm)[key];
      row.appendChild(td);
    });
    table?.appendChild(row);
  });
});
