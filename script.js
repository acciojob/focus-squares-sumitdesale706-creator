//your JS code here. If required.
let sq1 = document.querySelector("#square1");
let sq2 = document.querySelector("#square2");
let sq3 = document.querySelector("#square3");

let sq = document.querySelector(".container");

sq.addEventListener("mouseover", (e) => {
	  let t = e.target.getAttribute("id");
	
	  if(t === "square1"){
		    sq2.style.backgroundColor = "#6F4E37";
		    sq3.style.backgroundColor = "#6F4E37";
	  }else if(t === "square2"){
		    sq1.style.backgroundColor = "#6F4E37";
		    sq3.style.backgroundColor = "#6F4E37";
	  }else if(t === "square3"){
		    sq1.style.backgroundColor = "#6F4E37";
		    sq2.style.backgroundColor = "#6F4E37";
	  }
});


sq.addEventListener("mouseout", (e) => {
	 sq1.style.backgroundColor = "#E6E6FA";
     sq2.style.backgroundColor = "#E6E6FA";
     sq3.style.backgroundColor = "#E6E6FA";
});
