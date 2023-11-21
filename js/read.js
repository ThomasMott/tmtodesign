const readingProgress = document.querySelector('#reading-progress-fill');

document.addEventListener('scroll', function(e) {
	let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
	readingProgress.style.setProperty('width', w + '%');
});
