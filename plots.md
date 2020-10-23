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
<td align="center" onclick="selectNode(this)" id="dimAll" class="off"><b>Dimension</b></td>
<td align="center" onclick="selectNode(this)" id="funAll" class="off"><b>Function</b></td>
<td align="center" onclick="selectNode(this)" id="insAll" class="off"><b>Instance</b></td>
<td align="center" onclick="selectNode(this)" id="typAll" class="on"><b>Plot type</b></td>
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
<select id="typ" onchange="changePlot()" style="width:100px;">   
</select>
<button id="typNext" onclick="getNext(this)" class="button"><i class="arrow right"></i></button>
</td>
</tr>
</table>

<textarea id="result"></textarea>

<div id="images"></div>

<script src="{{ '/assets/js/custom.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}"/>
