let link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

let sect = document.querySelector("section");

let para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

let text = document.createTextNode(
  " - the premier source for web development knowledge."
);

let linkPara = document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(linkPara);

para.setAttribute("class", "highlight");
