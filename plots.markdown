---
layout: page
permalink: /plots/
nav_order: 2
title: Plots
---

# Plots  #
---
<table BORDER="0">
<tr>
<td align="center"><b>Dimension</b></td>
<td align="center"><b>Function</b></td>
<td align="center"><b>Instance</b></td>
<td align="center"><b>Plot type</b></td>
</tr>
<tr>
<td class="select" align="center">
<select id="dim" onchange="changePlot()">       
</select>
</td>
<td class="select" align="center">
<select id="fun" onchange="changePlot()">       
</select>
</td>
<td class="select" align="center">
<select id="ins" onchange="changePlot()">       
</select>
</td>
<td class="select" align="center">
<select id="typ" onchange="changePlot()">    
<option value="text1">text1</option>
<option value="text2">text2</option>
<option value="text3">text3</option>
<option value="text4">text4</option>   
</select>
</td>
</tr>
</table>

<textarea id="result"></textarea>

<script>
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

function changePlot() {
document.getElementById('result').value = dim.value + fun.value + ins.value + typ.value;
}
</script>
