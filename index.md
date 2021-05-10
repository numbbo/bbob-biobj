---
layout: default
permalink: /
nav_order: 1
title: Home
---

# Supplementary material for the bbob-biobj and bbob-biobj-ext test suites  #
---
Welcome to the website with supplementary material for the bbob-biobj and bbob-biobj-ext test suites from the [COCO](https://github.com/numbbo/coco) (Comparing Continuous Optimizers) platform. 

It provides [function definitions]({{ site.baseurl }}{% link def.md %}) and [visualizations]({{ site.baseurl }}{% link vis.md %}) for all 92 bbob-biobj-ext problems introduced in the paper <strong>Using Well-Understood Single-Objective Functions in Multiobjective Black-Box Optimization Test Suites</strong> by   Dimo Brockhoff, Anne Auger, Nikolaus Hansen and Tea Tušar submitted to <cite>Evolutionary Computation Journal</cite>. It also shows the [empirical distribution of angles]({{ site.baseurl }}{% link ecdfs.md %}) between the two (estimated) gradients at the best known Pareto set approximations in low dimensions. The [postprossed data page]({{ site.baseurl }}{% link ppdata.md %}) shows the postprocessed results from a comparison among three selected algorithms.

<div width="100%">
<a href="{{ site.baseurl }}{% link def.md %}"><img src="../assets/img/button-def.png" alt="Functions definitions" style="max-width: 25%; height: auto;"></a><a href="{{ site.baseurl }}{% link vis.md %}"><img src="../assets/img/button-vis.png" alt="Visualizations" style="max-width: 25%; height: auto;"></a><a href="{{ site.baseurl }}{% link ecdfs.md %}"><img src="../assets/img/button-ecdfs.png" alt="Gradient angle plots" style="max-width: 25%; height: auto;"></a><a href="{{ site.baseurl }}{% link ppdata.md %}"><img src="../assets/img/button-ppdata.png" alt="Postprocessed data" style="max-width: 25%; height: auto;"></a>
</div>

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}"/>
