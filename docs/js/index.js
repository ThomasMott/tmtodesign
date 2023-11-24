function init() {
	createMagic();
	for (let j of document.querySelectorAll(".absolute")) {
		j.addEventListener("mouseover", colorMagic);
	}
}

function createMagic() {
	for (i = 8; i <= 96; i += 8) {
		for (j = 8; j <= 96; j += 16) {
			const div = document.createElement("div");
			div.classList.add("bg-dot");
			const innerDiv = document.createElement("div");

			div.appendChild(innerDiv);
			// innerDiv.classList.add("bg-white");

			div.style.left = `${i}%`;
			div.style.top = `${j}%`;

			// var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
			// div.style.backgroundColor = color;

			document.getElementById("background").appendChild(div);
		}
	}
}

function colorMagic() {
	var magic = this.childNodes[0];
	// var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
	var color = "#1e313b";

	magic.style.backgroundColor = color;
}
