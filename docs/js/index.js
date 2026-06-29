function init() {
	createMagic();
	for (let j of document.querySelectorAll(".bg-dot")) {
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
	console.log("triggd");
	const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
	this.style.backgroundColor = color;
}

// init();
(function () {
	const section = document.querySelector(".main[data-parallax]");
	if (!section) return;
	console.log("working");
	let ticking = false;

	function update() {
		section.style.backgroundPositionY = `calc(50% + ${window.scrollY * 0.48}px)`;
		ticking = false;
	}

	window.addEventListener(
		"scroll",
		() => {
			if (!ticking) {
				requestAnimationFrame(update);
				ticking = true;
			}
		},
		{ passive: true },
	);

	update();
})();

(function () {
	const cards = document.querySelectorAll(".cards");
	if (!cards.length) return;

	// alternate left/right
	cards.forEach((card, i) => {
		if (i % 2 !== 0) card.classList.add("from-right");
	});

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer.unobserve(entry.target); // only fires once
				}
			});
		},
		{ threshold: 0.15 },
	);

	cards.forEach((card) => observer.observe(card));
})();

(function () {
	const artCards = document.querySelectorAll(".card-art");
	if (!artCards.length) return;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry, i) => {
				if (entry.isIntersecting) {
					// staggered delay so cards pop in one after another
					setTimeout(() => {
						entry.target.classList.add("visible");
					}, i * 80);
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.1 },
	);

	artCards.forEach((card) => observer.observe(card));
})();
