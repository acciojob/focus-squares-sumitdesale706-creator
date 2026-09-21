//your JS code here. If required.
let sq1 = document.querySelector("#square1");
let sq2 = document.querySelector("#square2");
let sq3 = document.querySelector("#square3");

let style = document.querySelector("style");

let sq = document.querySelector(".container");

sq.addEventListener("mouseover", (e) => {
	  if(e.target.getAttribute("id") === "square1"){
		    sq2.setAttribute("style", `width: 50px;
			height: 50px;
			display: inline-block;
			margin: 10px;
			background-color: #6F4E37;
			cursor: pointer`);

		    sq3.setAttribute("style", `width: 50px;
			height: 50px;
			display: inline-block;
			margin: 10px;
			background-color: #6F4E37;
			cursor: pointer`);
	  }else if(e.target.getAttribute("id") === "square2"){
		    sq1.setAttribute("style", `width: 50px;
			height: 50px;
			display: inline-block;
			margin: 10px;
			background-color: #6F4E37;
			cursor: pointer`);

		    sq3.setAttribute("style", `width: 50px;
			height: 50px;
			display: inline-block;
			margin: 10px;
			background-color: #6F4E37;
			cursor: pointer`);
	  }else if(e.target.getAttribute("id") === "square1"){
		    sq2.setAttribute("style", `width: 50px;
			height: 50px;
			display: inline-block;
			margin: 10px;
			background-color: #6F4E37;
			cursor: pointer`);

		    sq3.setAttribute("style", `width: 50px;
			height: 50px;
			display: inline-block;
			margin: 10px;
			background-color: #6F4E37;
			cursor: pointer`);
	  }
});


sq.addEventListener("mouseout", (e) => {
	  if(sq1.getAttribute("style")){
		    sq1.removeAttribute('style');
	  }

	  if(sq2.getAttribute("style")){
		    sq2.removeAttribute('style');
	  }

	  if(sq3.getAttribute("style")){
		    sq3.removeAttribute('style');
	  }
}
