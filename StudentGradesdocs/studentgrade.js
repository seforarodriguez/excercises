var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];


// Write the arrays where the switch will push the score into
var a = [];
var b = [];
var c = [];
var d = [];
var f = [];

// The lowest and highest grade
var lowestGrade = 101;
var highestGrade = 0;

for (var i = 0; i < scores.length; i++) {
	var score = scores[i]

	if (score < lowestGrade) {
		lowestGrade = score;
	}

	if (score < highestGrade) {
		highestGrade = score
	}

	switch(true) {
		case (score < 61):
			f.push(score);
			break;
		case (score > 60 && score < 71):
			d.push(score);
			break;
		case (score > 70 && score < 81):
			c.push(score);
			break;
		case (score > 80 && score < 91):
			b.push(score);
			break;
		case (score > 90):
			a.push(score);
			break;
	}
}


console.log("The lowest score is ..." + lowestGrade);
console.log("the highest score is: " + highestGrade);
console.log("There are " + a.length + " A grades");
console.log("There are " + b.length + " B grades");
console.log("There are " + c.length + " C grades");
console.log("There are " + d.length + " D grades");
console.log("There are " + f.length + " F grades");





