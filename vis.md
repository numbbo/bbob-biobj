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

Show plots in 
<button id="colPrev" onclick="getPrev(this)" class="button">&minus;</button>
<select id="col" onchange="changePlot()"></select>
<button id="colNext" onclick="getNext(this)" class="button">+</button> 
columns 

<table BORDER="0">
<tr>
<td align="center" onclick="selectNode(this)" id="dimAll" class="off"><b>Dimension</b></td>
<td align="center" onclick="selectNode(this)" id="funAll" class="off"><b>Function</b></td>
<td align="center" onclick="selectNode(this)" id="insAll" class="off"><b>Instance</b></td>
<td align="center" onclick="selectNode(this)" id="typAll" class="on"><b>Visualization type</b></td>
</tr>
<tr>
<td class="select" align="center">
<button id="dimPrev" onclick="getPrev(this)" class="button">&minus;</button>
<select id="dim" onchange="changePlot()"></select>
<button id="dimNext" onclick="getNext(this)" class="button">+</button>
</td>
<td class="select" align="center">
<button id="funPrev" onclick="getPrev(this)" class="button">&minus;</button>
<select id="fun" onchange="changePlot()"></select>
<button id="funNext" onclick="getNext(this)" class="button">+</button>
</td>
<td class="select" align="center">
<button id="insPrev" onclick="getPrev(this)" class="button">&minus;</button>
<select id="ins" onchange="changePlot()"></select>
<button id="insNext" onclick="getNext(this)" class="button">+</button>
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

## Explanation 

<div id="text-directions-searchspace" markdown="1" style="padding-top: 10px;">
### Pareto set approximation

This plot shows the projection of the Pareto set approximation (in black) and some 1-dimensional cuts (in various colors, see below) onto an axes-parallel cut of the search space defined by two variables ($$x_1$$ and $$x_4$$). 
</div>

<div id="text-directions-searchspace-projection" markdown="1" style="padding-top: 10px;">
### Pareto set approximation (optima direction)

This plot contains the projection of the Pareto set approximation and some 1-dimensional cuts (in various colors, see below) onto a random cutting plane that contains both single-objective optima. It additionally shows the contour lines for each objective function.
</div>

<div id="text-directions-objspace" markdown="1" style="padding-top: 10px;">
### Pareto front approximation (original space)

This plot depicts the Pareto front approximation and the results of some 1-dimensional cuts (in various colors, see below) in the original scaling of the objective space (as seen by an optimization algorithm).
</div>

<div id="text-directions-logobjspace" markdown="1" style="padding-top: 10px;">
### Pareto front approximation (normalized space)

This plot depicts the Pareto front approximation and the results of some 1-dimensional cuts (in various colors, see below) in the normalized objective space (in log scale), where the ideal point is at (0, 0) and the nadir point is at (1, 1).
</div>

<div id="text-additional-info" markdown="1" style="padding-top: 10px;">
In addition to the best known Pareto set/front approximation, the plots present **1-dimensional cuts** ("lines") through the search space:
- along a random direction through each single-objective optimum (in blue),
- along each coordinate axis through each single-objective optimum (blue dotted lines),
- along the line connecting both single-objective optima (in red),
- two fully random lines (in yellow), and
- a random line in the random projection plane going through both optima (in green).

All straight lines are of the same length (10) with the support vector in its exact middle. Ticks along the lines indicate line segments of the same length in search space. Thicker points on the lines depict solutions that are non-dominated with respect to all points on the same line.

Furthermore, the Pareto set approximation plots highlight the projected region $$[-5,5]^n$$ as a gray-shaded area while the gray-shaded area in the Pareto front approximation plots denotes the region of interest between the ideal ($$\times$$) and nadir points ($$+$$). 
</div>

<div id="text-dominance-ratio" markdown="1" style="padding-top: 10px;">
### Dominance ratio

Based on a $$501\times501$$ grid in the search space, the dominance ratio of each grid point is the ratio of all grid points that dominate it (Fonseca, 1995, p. 71ff.). The plot uses a logarithmic color scale with the overall non-dominated points shown in yellow.
</div>

<div id="text-level-sets" markdown="1" style="padding-top: 10px;">
### Level sets

This plot shows the level sets for each objective (first objective in blue, second objective in red) together with the non-dominated points of the $$501\times501$$ grid.
</div>

<div id="text-local-dominance" markdown="1" style="padding-top: 10px;">
### Local dominance

This plot by Fieldsend et al. (2019) uses, for each point of the $$501\times501$$ grid, one of three different colors. In dark green, it shows all grid points $$P$$ for which *all* 8 neighboring grid points (in the Moore neighborhood) are mutually non-dominated to $$P$$. In landscape analysis terms, we can call the green regions in the plots "dominance-neutral local optima regions" in the sense that a dominance-based hill-climber will be able to explore a green region by single non-dominated moves. The pink areas are comprised of grid points for which *at least one* neighboring grid point dominates it. Each pink area is considered a "basin of attraction" of a green area in the sense that a local dominance-based hill climber can only move towards the included green area. Last, a grid point is assigned a white color if at least two of its dominating neighbors belong to two different basins of attraction&mdash;white areas in the plots therefore show the boundaries between the basins.
</div>

<div id="text-gradient-length" markdown="1" style="padding-top: 10px;">
### Gradient length

This plot shows the length of the normalized multiobjective gradient at each of $$501\times501$$ grid points, computed as 

$$\frac{\nabla f_1(x)}{|\nabla f_1(x)|} + \frac{\nabla f_2(x)}{|\nabla f_2(x)|},$$

where $$\nabla f_1(x)$$ and $$\nabla f_2(x)$$ are the gradients in the objectives $$f_1$$ and $$f_1$$ in a search point $$x$$. The normalized multiobjective gradient is exactly zero for Pareto-optimal solutions as well as locally non-dominated solutions. 
</div>

<div id="text-path-length" markdown="1" style="padding-top: 10px;">
### Path length

This plot shows the length of the path from each of $$501\times501$$ grid points towards the next local optimum. Inspired by the cumulated gradient field landscapes (Kerschke and Grimme, 2017), the length is defined as Euclidean distance to the Moore neighbor to which the biobjective gradient points plus the path length of this neighbor. Cumulated gradient field landscapes sum gradient lengths instead of Euclidean distances. We use the latter because they better quantify the actual distance to the local optimum, however both approaches lead to qualitatively very similar figures. 
</div>

## References

Fieldsend, J. E., Chugh, T., Allmendinger, R., and Miettinen, K. (2019). A feature rich distance-based many-objective visualisable test problem generator. In *Genetic and Evolutionary Computation Conference (GECCO 2019)*, pages 541–549.

Fonseca, C. M. (1995). *Multiobjective genetic algorithms with application to control engineering problems*. PhD thesis, University of Sheffield.

Kerschke, P. and Grimme, C. (2017). An expedition to multimodal multi-objective optimization landscapes. In *International Conference on Evolutionary Multi-Criterion Optimization*, pages 329–343. Springer.
 
---

The plots are retrieved from the [bbob-biobj-plots](https://github.com/numbbo/bbob-biobj-plots) GitHub repository. 

Note that some visualization types are not available for all dimensions and instances. For example, visualizations
of the Pareto set and front approximations are only provided for instances 1 to 5, while visualizations of the *Dominance ratio*, *Level sets*, *Local dominance*, *Gradient length* and *Path length* are only 
available for dimension 2.

There are no visualizations for problems with 10 or more variables.

<script src="{{ '/assets/js/custom.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}"/>
