// const kick = document.querySelectorAll('.pad-kick');
// const snare = document.querySelectorAll('.pad-snare');
// const hihat = document.querySelectorAll('.pad-hihat');
// const kickSound = document.querySelector('.kick-sound');
// const snareSound = document.querySelector('.snare-sound');
// const hihatSound = document.querySelector('.hihat-sound');
// const playBtn = document.querySelector('.play');
// const selection = document.querySelectorAll('.selection');
// const mute = document.querySelectorAll('.mute');
// const range = document.querySelector('.range');
// const speed = document.querySelector('.speed');

// let index = 0;

// function selected() {
// 	kick.forEach((e) => {
// 		e.addEventListener('click', () => {
// 			e.classList.toggle('selected');
// 		});
// 	});
// 	snare.forEach((e) => {
// 		e.addEventListener('click', () => {
// 			e.classList.toggle('selected');
// 		});
// 	});
// 	hihat.forEach((e) => {
// 		e.addEventListener('click', () => {
// 			e.classList.toggle('selected');
// 		});
// 	});
// }

// function step() {
// 	let step = index % 8;
// 	const pads = document.querySelectorAll(`.p${step}`);
// 	pads.forEach((e) => {
// 		e.style.animation = 'playSound 0.3s alternate ease-in-out 2';
// 		if (e.classList.contains('selected')) {
// 			if (e.classList.contains('pad-kick')) {
// 				kickSound.currentTime = 0;
// 				kickSound.play();
// 			}
// 			if (e.classList.contains('pad-snare')) {
// 				snareSound.currentTime = 0;
// 				snareSound.play();
// 			}
// 			if (e.classList.contains('pad-hihat')) {
// 				hihatSound.currentTime = 0;
// 				hihatSound.play();
// 			}
// 		}

// 		e.addEventListener('animationend', () => {
// 			e.style.animation = '';
// 		});
// 	});
// 	index++;
// }
// let started = null;
// let bpm = 150;
// range.addEventListener('input', function (e) {
// 	speed.innerHTML = `Speed: ${e.target.value}`;
// 	bpm = e.target.value;
// });

// function start() {
// 	started = setInterval(() => {
// 		step();
// 	}, (60 / bpm) * 1000);
// }

// playBtn.addEventListener('click', () => {
// 	if (!started) {
// 		start();
// 		playBtn.innerHTML = 'Stop';
// 	} else {
// 		clearInterval(started);
// 		started = null;
// 		playBtn.innerHTML = 'Play';
// 	}
// });
// function changeSound() {
// 	selection.forEach((event) => {
// 		event.addEventListener('change', function (e) {
// 			const selectionName = e.target.name;
// 			const selectionValue = e.target.value;
// 			switch (selectionName) {
// 				case 'kick':
// 					kickSound.setAttribute('src', selectionValue);
// 					break;
// 				case 'snare':
// 					snareSound.setAttribute('src', selectionValue);
// 					break;
// 				case 'hihat':
// 					hihatSound.setAttribute('src', selectionValue);
// 					break;
// 			}
// 		});
// 	});
// }
// mute.forEach((event) => {
// 	event.addEventListener('click', function (e) {
// 		const muteIndex = e.target.getAttribute('data');
// 		event.classList.toggle('active');
// 		if (event.classList.contains('active')) {
// 			switch (muteIndex) {
// 				case '1':
// 					kickSound.volume = 0;
// 					break;
// 				case '2':
// 					snareSound.volume = 0;
// 					break;
// 				case '3':
// 					hihatSound.volume = 0;
// 					break;
// 			}
// 		} else {
// 			switch (muteIndex) {
// 				case '1':
// 					kickSound.volume = 1;
// 					break;
// 				case '2':
// 					snareSound.volume = 1;
// 					break;
// 				case '3':
// 					hihatSound.volume = 1;
// 					break;
// 			}
// 		}
// 	});
// });

// selected();
// changeSound();

class Drumkit {
	constructor() {
		this.pads = document.querySelectorAll('.pad');
		this.index = 0;
		this.kickSound = document.querySelector('.kick-sound');
		this.snareSound = document.querySelector('.snare-sound');
		this.hihatSound = document.querySelector('.hihat-sound');
		this.start = null;
		this.bpm = 150;
		this.playBtn = document.querySelector('.play');
		this.selection = document.querySelectorAll('.selection');
		this.mute = document.querySelectorAll('.mute');
		this.range = document.querySelector('.range');
		this.speed = document.querySelector('.speed');
	}
	selected(e) {
		e.addEventListener('click', () => {
			e.classList.toggle('selected');
		});
	}
	step() {
		let step = this.index % 8;
		const pads = document.querySelectorAll(`.p${step}`);
		pads.forEach((e) => {
			e.style.animation = 'playSound 0.3s alternate ease-in-out 2';
			if (e.classList.contains('selected')) {
				if (e.classList.contains('pad-kick')) {
					this.kickSound.currentTime = 0;
					this.kickSound.play();
				}
				if (e.classList.contains('pad-snare')) {
					this.snareSound.currentTime = 0;
					this.snareSound.play();
				}
				if (e.classList.contains('pad-hihat')) {
					this.hihatSound.currentTime = 0;
					this.hihatSound.play();
				}
			}
			e.addEventListener('animationend', () => {
				e.style.animation = '';
			});
		});
		this.index++;
	}

	started() {
		this.start = setInterval(() => {
			this.step();
		}, (60 / this.bpm) * 1000);
	}
	play() {
		if (!this.start) {
			this.started();
			this.playBtn.innerHTML = 'Stop';
		} else {
			clearInterval(this.start);
			this.start = null;
			this.playBtn.innerHTML = 'Play';
		}
	}

	changeSound(e) {
		const selectionName = e.target.name;
		const selectionValue = e.target.value;
		switch (selectionName) {
			case 'kick':
				this.kickSound.src = selectionValue;
				break;
			case 'snare':
				this.snareSound.src = selectionValue;
				break;
			case 'hihat':
				this.hihatSound.src = selectionValue;
				break;
		}
	}

	muted(e) {
		const muteIndex = e.target.getAttribute('data');
		e.target.classList.toggle('active');
		if (e.target.classList.contains('active')) {
			switch (muteIndex) {
				case '1':
					this.kickSound.volume = 0;
					break;
				case '2':
					this.snareSound.volume = 0;
					break;
				case '3':
					this.hihatSound.volume = 0;
					break;
			}
		} else {
			switch (muteIndex) {
				case '1':
					this.kickSound.volume = 1;
					break;
				case '2':
					this.snareSound.volume = 1;
					break;
				case '3':
					this.hihatSound.volume = 1;
					break;
			}
		}
	}

	changeSpeed(e) {
		this.speed.innerHTML = `Speed: ${e.target.value}`;
		this.bpm = e.target.value;
	}

	updateSpeed() {
		clearInterval(this.start);
		this.start = null;
		let btnText = this.playBtn.innerHTML;
		console.log(btnText);
		if (btnText === 'Stop') {
			this.play();
		}
	}
}

const drum = new Drumkit();

drum.pads.forEach((e) => {
	drum.selected(e);
});
drum.playBtn.addEventListener('click', () => {
	drum.play();
});
drum.selection.forEach((event) => {
	event.addEventListener('change', (e) => {
		drum.changeSound(e);
	});
});
drum.mute.forEach((event) => {
	event.addEventListener('click', (e) => {
		drum.muted(e);
	});
});

drum.range.addEventListener('input', (e) => {
	drum.changeSpeed(e);
});

drum.range.addEventListener('change', () => {
	drum.updateSpeed();
});
