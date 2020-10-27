---
layout: page
permalink: /vis/
nav_order: 2
title: Visualizations
---

Show plots in <select id="cols" onchange="changePlot()">
  <option>1</option>
  <option>2</option>
  <option selected="selected">3</option>
  <option>4</option>
  <option>5</option>
  <option>6</option>
  <option>7</option>
  <option>8</option>
  <option>9</option>
  <option>10</option>
</select> columns 

<table BORDER="0">
<tr>
<td align="center" onclick="selectNode(this)" id="dimAll" class="off"><b>Dimension</b></td>
<td align="center" onclick="selectNode(this)" id="funAll" class="off"><b>Function</b></td>
<td align="center" onclick="selectNode(this)" id="insAll" class="off"><b>Instance</b></td>
<td align="center" onclick="selectNode(this)" id="typAll" class="on"><b>Visualization type</b></td>
</tr>
<tr>
<td class="select" align="center">
<button id="dimPrev" onclick="getPrev(this)" class="button"><i class="arrow left"></i></button>
<select id="dim" onchange="changePlot()"></select>
<button id="dimNext" onclick="getNext(this)" class="button"><i class="arrow right"></i></button>
</td>
<td class="select" align="center">
<button id="funPrev" onclick="getPrev(this)" class="button"><i class="arrow left"></i></button>
<select id="fun" onchange="changePlot()"></select>
<button id="funNext" onclick="getNext(this)" class="button"><i class="arrow right"></i></button>
</td>
<td class="select" align="center">
<button id="insPrev" onclick="getPrev(this)" class="button"><i class="arrow left"></i></button>
<select id="ins" onchange="changePlot()"></select>
<button id="insNext" onclick="getNext(this)" class="button"><i class="arrow right"></i></button>
</td>
<td class="select" align="center">
<button id="typPrev" onclick="getPrev(this)" class="button"><i class="arrow left"></i></button>
<select id="typ" onchange="changePlot()" style="width:220px;">   
</select>
<button id="typNext" onclick="getNext(this)" class="button"><i class="arrow right"></i></button>
</td>
</tr>
</table>

<!-- <textarea id="result"></textarea> -->

<div id="images"></div>

---

Note that some visualization types are not available for all dimensions and instances. For example, visualizations
of the *Unscaled objective space*, *Objective space*, *Search space* and 
*Search space (optima direction)* are only provided for instances 1 to 5, while visualizations of the 
*Dominance rank*, *Level sets*, *Local dominance*, *Gradient length* and *Path length* are only 
available for dimension 2.

There are no visualizations for problems with 10 or more dimensions.

<script src="{{ '/assets/js/custom.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}"/>
