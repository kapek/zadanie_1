'use strict'



const poll = {
	question: "What is your favourite programming language?",
	options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
	// This generates [0, 0, 0, 0]. More in the next section!
	answers: new Array(4).fill(0),

	registerNewAnswer() {
		const answer = prompt(`${this.question} \n ${this.options.join('\n')} \n (Write your answer between 0-3)`);

		parseInt(answer);
		if (answer > 3 || answer < 0 || isNaN(answer)) {
			alert(`Your guess must be between 0 and 3. \n TRY AGAIN!`);
			this.registerNewAnswer();
		} else {
			this.answers[answer] += 1;
			alert(`your choice is ${this.options[answer]}`)
			this.displayResults();

		};
	},
	displayResults() {
		console.log(this.answers);
	}
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));


const data1 = [5, 2, 3]
const data2 = [1, 5, 3, 9, 6, 1]






