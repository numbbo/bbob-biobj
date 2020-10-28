---
layout: page
permalink: /def/
nav_order: 2
title: Function definitions
---

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js" integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js" integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>

# Function definitions #

## F1: Sphere/Sphere ##

Combination of two sphere functions ([f1](https://coco.gforge.inria.fr/downloads/download16.00/bbobdocfunctions.pdf\#page=5) in the bbob suite).

Both objectives are unimodal, highly symmetric, rotational and scale invariant. The Pareto set is known to be a straight line and the Pareto front is convex. Furthermore, the normalized hypervolume value of the entire Pareto front with respect to the nadir point as reference point can be computed analytically as the integral 

$$1-\int_{0}^{1} (1-\sqrt{x})^2dx = -\frac{1}{2}+\frac{4}{3}=0.833333\ldots$$

Considered as the simplest bi-objective problem in continuous domain. 

Contained in the **separable - separable** function group. 
