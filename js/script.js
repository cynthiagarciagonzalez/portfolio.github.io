const animatedBox = document.querySelector('.animated-box');

animatedBox.addEventListener('mouseover', () => {
	animatedBox.style.opacity = 1;
});

animatedBox.addEventListener('mouseout', () => {
	animatedBox.style.opacity = 0;
});