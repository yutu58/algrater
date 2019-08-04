var Rthumb = 0
var Lthumb = 0
var Points;
var tbody = document.getElementById("tbody"), row, cell1, cell2
function sortTable(tbody, index, ascending) {
    Array.prototype.slice.call(tbody.children).sort(
        (tr1, tr2) => tr1.children[index].textContent.localeCompare(tr2.children[index].textContent) * (ascending ? 1 : -1)
        ).forEach(tr => tbody.appendChild(tr));
}
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function printvalue() {
document.getElementById("tbody").innerHTML = ""
var alg = document.getElementById("algtest").value.split("\n")
for (var i=0; i<alg.length; i=i+1){
	Points = 0
    Rthumb = 0
    Lthumb = 0
	var turns = alg[i].split(" ")
	for (var j=0; j<turns.length; j=j+1){
		if (turns[0] != "Searching"){
		move(turns[j])
		}
	}
    	//add to the table
	if (Points != 0) {
	round(Points, 1)
    row = tbody.insertRow()
    cell1 = row.insertCell()
    cell1.innerHTML = alg[i]
    cell2 = row.insertCell()
    cell2.innerHTML = Points
    sortTable(document.querySelector("tbody"), 1, true);
	}
}
}

function move(turn) {
if (Rthumb == 0 && Lthumb == 0) {
	switch(turn) {
    case "R":
    	Rthumb = 1
        Points += 1
	break;
    case "R'":
    	Rthumb = 3
        Points += 1
	break;
	case "R2":
    	Rthumb = 2
		Points += 1.3
	break;
    case "U":
    	Points += 1
	break;
    case "U'":
    	Points += 1
	break;
	case "U2":
    	Points += 1.3
	break;
    case "F":
    	Points += 1.2
	break;
    case "F'":
    	Points += 1.2
	break;
    case "F2":
    	Points += 1.7
	break;
	}
}
else if (Rthumb == 1 && Lthumb == 0) {
	switch(turn) {
    case "R":
    	Rthumb = 2
        Points += 1.2
	break;
    case "R'":
    	Rthumb = 0
        Points += 1
	break;
	case "R2":
    	Rthumb = 3
		Points += 1.2
	break;
    case "U":
    	Points += 1.2
	break;
    case "U'":
    	Points += 1
	break;
	case "U2":
    	Points += 1.5
	break;
    case "F":
    	Points += 1.6
	break;
    case "F'":
    	Points += 1.4
	break;
    case "F2":
    	Points += 1.7
	break;
	}
}
else if (Rthumb == 3 && Lthumb == 0) {
	switch(turn) {
    case "R":
    	Rthumb = 0
        Points += 1
	break;
    case "R'":
    	Rthumb = 0
        Points += 1.2
	break;
	case "R2":
    	Rthumb = 3
		Points += 1.2
	break;
    case "U":
    	Points += 1.2
	break;
    case "U'":
    	Points += 1
	break;
	case "U2":
    	Points += 1.4
	break;
    case "F":
    	Points += 1
	break;
    case "F'":
    	Points += 1.1
	break;
    case "F2":
    	Points += 1.2
	break;
	}
}
else if (Rthumb == 2) {
Points += 10
}
}
