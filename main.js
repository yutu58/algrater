//vars
var Rthumb = 0
var Lthumb = 0
var lastMove = ""
var Points;
var turns;
var tbody = document.getElementById("tbody"), row, cell1, cell2

//needed functions from library
function sortTable(tbody, index, ascending) {
    Array.prototype.slice.call(tbody.children).sort(
        (tr1, tr2) => tr1.children[index].textContent.localeCompare(tr2.children[index].textContent, undefined, {'numeric': true}) * (ascending ? 1 : -1)
        ).forEach(tr => tbody.appendChild(tr));
}

//actual script

function printvalue() {
document.getElementById("tbody").innerHTML = ""
var algs = document.getElementById("algtest").value.split("\n")
algs.forEach(function(p) {
	for(var i=0; i<4; i++) {
    	Points = 0
		Rthumb = i
		Lthumb = 0
		p.split(" ").forEach(move)
		//add to the table
		if (Points != 0) {
    		row = tbody.insertRow()
    		cell1 = row.insertCell()
    		cell1.innerHTML = p
    		cell2 = row.insertCell()
    		cell2.innerHTML = Points
            cell3 = row.insertCell()
            cell3.innerHTML = i
		}
	}
});
sortTable(document.getElementById("tbody"), 1, true);
}

function move(turn) {
if (Rthumb == 0 && Lthumb == 0) {
	switch(turn) {
    case "R":
    	Rthumb = 1
        Points += 5
	break;
    case "R'":
    	Rthumb = 3
        Points += 5
	break;
	case "R2":
    	Rthumb = 2
		Points += 9
	break;
    case "U":
    	Points += 5
	break;
    case "U'":
    	Points += 5
	break;
	case "U2":
    	Points += 7
	break;
    case "F":
    	if (lastMove == "R'" || lastMove == "R") {
        	Points += 11;
        } else {
    		Points += 15;
        }
	break;
    case "F'":
    	if (lastMove == "R") {
        	Points += 10;
        } else {
    	Points += 14}
	break;
    case "F2":
    	Points += 22
	break;
    case "D":
    	Points += 5
	break;
    case "D'":
    	Points += 5
	case "D2":
    	Points += 8
	break;
	}
}
else if (Rthumb == 1 && Lthumb == 0) {
	switch(turn) {
    case "R":
    	Rthumb = 2
        Points += 9
	break;
    case "R'":
    	Rthumb = 0
        Points += 5
	break;
	case "R2":
    	Rthumb = 3
		Points += 9
	break;
    case "U":
    	Points += 6
	break;
    case "U'":
    	Points += 5
	break;
	case "U2":
    	Points += 9
	break;
    case "F":
    	Points += 17
	break;
    case "F'":
    	if (lastMove == "R") {
            	Points += 9
        } else {
        	Points += 14;
        }
	break;
    case "F2":
    	Points += 19
	break;
    case "D":
    	Points += 5
	break;
    case "D'":
    	Points += 7
	break;
    case "D2":
    	Points += 13
	break;
	}
}
else if (Rthumb == 3 && Lthumb == 0) {
	switch(turn) {
    case "R":
    	Rthumb = 0
        Points += 5
	break;
    case "R'":
    	Rthumb = 2
        Points += 9
	break;
	case "R2":
    	Rthumb = 1
		Points += 8
	break;
    case "U":
    	Points += 7
	break;
    case "U'":
    	Points += 5
	break;
	case "U2":
    	Points += 9
	break;
    case "F":
    	Points += 5
	break;
    case "F'":
    	Points += 8
	break;
    case "F2":
    	Points += 7
	break;
    case "D":
    	Points += 5
	break;
    case "D'":
    	Points += 7
	break;
    case "D2":
    	Points += 13
	break;
	}
}
else if (Rthumb == 2) {
Rthumb = 0
	switch(turn) {
    case "R":
        Points += 20
	break;
    case "R'":
        Points += 20
	break;
	case "R2":
		Points += 20
	break;
    case "U":
    	Points += 20
	break;
    case "U'":
    	Points += 20
	break;
	case "U2":
    	Points += 20
	break;
    case "F":
    	Points += 20
	break;
    case "F'":
    	Points += 20
	break;
    case "F2":
    	Points += 20
	break;
    case "D":
    	Points += 20
	break;
    case "D'":
    	Points += 20
	break;
    case "D2":
    	Points += 20
	break;
	}
move(turn)
}
lastMove = turn;
}
