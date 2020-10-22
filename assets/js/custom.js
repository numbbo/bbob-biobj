var selectDim = document.getElementById("dim");
var dims = ["2", "3", "5", "10", "20", "40"];
var contentsDim;
for (let i = 0; i < dims.length; i++) {
	contentsDim += "<option>" + dims[i] + "</option>";
}
selectDim.innerHTML = contentsDim;

var selectFun = document.getElementById("fun");
var contentsFun;
for (let i = 1; i <= 92; i++) {
	contentsFun += "<option>" + i + "</option>";
}
selectFun.innerHTML = contentsFun;

var selectIns = document.getElementById("ins");
var contentsIns;
for (let i = 1; i <= 15; i++) {
	contentsIns += "<option>" + i + "</option>";
}
selectIns.innerHTML = contentsIns;

var all = "typAll";

function pad(num) {
	let size = 2;
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function changePlot() {
	document.getElementById('result').value = "biobj_f" + pad(fun.value) + "_i" + pad(ins.value) + "_d" + pad(dim.value) + "_" + pad(typ.value) + ".png" + "   " + all;
}

function getPrev(ele) {
	let select = document.getElementById(ele.id.substring(0, 3));
	let len = select.length;
	let curr_index = select.selectedIndex;
	if (curr_index > 0) {
		select.selectedIndex--;
	}
	if (curr_index == 0) {
		select.selectedIndex = len-1;
	}
	changePlot();
}

function getNext(ele) {
	let select = document.getElementById(ele.id.substring(0, 3));
	let len = select.length;
	let curr_index = select.selectedIndex;
	if (curr_index < len - 1) {
		select.selectedIndex++;
	}
	if (curr_index == len - 1) {
		select.selectedIndex = 0;
	}
	changePlot();
}

function selectNode(node){
	let j = document.getElementsByClassName("on");
	for(var i = 0; i < j.length; i++){
		j[i].className="";
	}
	node.className="on";
	all = node.id;
	changePlot()
}