---
layout: page
permalink: /vis/
nav_order: 3
title: Visualizations
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js" integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js" integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>

Show plots in <select id="cols" onchange="changePlot()">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option selected="selected">5</option>
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

## Explanation of the visualizations

<div id="text-directions-objspace" markdown="1" style="padding-top: 10px;">
### Unscaled objective space

These objective space plots show the original scaling of the objective space (as seen by an optimization algorithm).
</div>

<div id="text-directions-logobjspace" markdown="1" style="padding-top: 10px;">
### Normalized objective space

These objective space plots show the normalized objective space (in log scale), where the ideal point is at (0, 0) and the nadir point is at (1, 1).
</div>

<div id="text-directions-searchspace" markdown="1" style="padding-top: 10px;">
### Search space

These search space plots show the projection onto a coordinate-axes-parallel cut
defined by two variables. 
</div>

<div id="text-directions-searchspace-projection" markdown="1" style="padding-top: 10px;">
### Search space (optima direction)

These earch space plots contain the projection onto a random cutting plane that contains both single-objective optima. The plots additionally show the contour lines for each objective function.
</div>

<div id="text-additional-info" markdown="1" style="padding-top: 10px;">
In addition to the best known Pareto set/Pareto front approximations (in black), **all plots of the search and objective space** show various 1-dimensional cuts ("lines") through the search space:
- along a random direction through each single-objective optimum (in blue),
- along each coordinate axis through each single-objective optimum (blue dotted lines),
- along the line connecting both single-objective optima (in red),
- two fully random lines (in yellow), and
- a random line in the random projection plane going through both optima (in green).

All straight lines are of the same length (10) with the support vector in its exact middle. Ticks along the lines indicate line segments of the same length in search space. Thicker points on the lines depict solutions that are non-dominated with respect to all points on the same line.

Furthermore, the search space plots highlight the projected region $$[-5,5]^n$$ as a gray-shaded area while the gray-shaded area in the objective space plots denotes the region of interest between the ideal ($$\times$$) and nadir points ($$+$$). 
</div>

<div id="text-dominance-rank" markdown="1" style="padding-top: 10px;">
### Dominance rank

Based on a sample of solutions on a regular grid in search space, we count for each grid point the number of other grid points that dominate it and use this, divided by the total number of grid points as solution quality or normalized dominance rank.
</div>

<div id="text-level-sets" markdown="1" style="padding-top: 10px;">
### Level sets

These plots show the individual objective's level sets (first objective in red, second objective in blue) together with the non-dominated points of the $$500\times500$$ grid.
</div>

<div id="text-local-dominance" markdown="1" style="padding-top: 10px;">
### Local dominance

These plots show, for each grid point, one of three different colors. In dark green, we show all grid points $$P$$ for which *all* 8 neighboring grid points (in the Moore neighborhood) are mutually non-dominated to $$P$$. In terms of landscape analysis terms, we can call the green regions in the plots "dominance-neutral local optima regions" in the sense that a dominance-based hill-climber will be able to explore a green region by single non-dominated moves. The pink areas are comprised of grid points for which *at least one* neighboring grid point dominates it. Each pink area is considered a "basin of attraction" of a green area in the sense that a local dominance-based hill climber can only move towards the included green area. Last, a grid point is assigned a white color if at least two of its neighbors belong to two different basins of attraction&mdash;white areas in the plots therefore show the boundaries between the basins.
</div>

<div id="text-gradient-length" markdown="1" style="padding-top: 10px;">
### Gradient length

These plots show the length of the normalized multiobjective gradient at each of $$500\times500$$ grid points, computed as 

$$\frac{\nabla f_1(x)}{|\nabla f_1(x)|} + \frac{\nabla f_2(x)}{|\nabla f_2(x)|},$$

where $$\nabla f_1(x)$$ and $$\nabla f_2(x)$$ are the gradients in the objectives $$f_1$$ and $$f_1$$ in a search point $$x$$. The normalized multiobjective gradient is exactly zero for Pareto-optimal solutions as well as locally non-dominated solutions. 
</div>

<div id="text-path-length" markdown="1" style="padding-top: 10px;">
### Path length

TODO
</div>

---

Note that some visualization types are not available for all dimensions and instances. For example, visualizations
of the *Unscaled objective space*, *Objective space*, *Search space* and 
*Search space (optima direction)* are only provided for instances 1 to 5, while visualizations of the 
*Dominance rank*, *Level sets*, *Local dominance*, *Gradient length* and *Path length* are only 
available for dimension 2.

There are no visualizations for problems with 10 or more dimensions.

<script src="{{ '/assets/js/custom.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}"/>
