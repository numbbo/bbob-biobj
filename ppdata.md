---
layout: page
permalink: /ppdata/
nav_order: 5
title: Postprocessed data
---

# Postprocessed data #
---
Below, we display the postprocessed (html) output of the <a href="https://github.com/numbbo/coco">COCO platform</a> when comparing the algorithms COMO-CMA-ES (COMO-100) (Touré et al., 2019; Dufossé and Touré, 2019), SMS-EMOA-DE (Beume et al., 2007; Auger et al., 2016b), and NSGA-II-Matlab (Deb et al., 2002; Auger et al., 2016a) on the bbob-biobj test suite.

<link rel="stylesheet" href="{{ '/assets/css/custom.css' | relative_url }}"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js" integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js" integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>


<iframe src="https://numbbo.github.io/bbob-biobj-plots/ppdata-comosmsnsga/COMO-_NSGA-_SMS-E/index.html" width="100%" height="750">
	This IFrame displays the performance of COMO-CMA-ES, SMS-EMOA-DE, and NSGA-II-Matlab.
</iframe>

## References

Auger, A., Brockhoff, D., Hansen, N., Tušar, D., Tušar, T., and Wagner, T. (2016a). Benchmarking MATLAB’s gamultiobj (NSGA-II) on the bi-objective BBOB-2016 test suite. In *Genetic and Evolutionary Computation Conference (Companion), GECCO 2016 Companion*, pages 1233–1239, New York, NY, USA. ACM.

Auger, A., Brockhoff, D., Hansen, N., Tušar, D., Tušar, T., and Wagner, T. (2016b). The impact of variation operators on the performance of SMS-EMOA on the bi-objective BBOB-2016 test suite. In *Genetic and Evolutionary Computation Conference (Companion), GECCO 2016 Companion*, pages 1225–1232, New York, NY, USA. ACM.

Beume, N., Naujoks, B., and Emmerich, M. (2007). SMS-EMOA: Multiobjective Selection Based on Dominated Hypervolume. *European Journal of Operational Research*, 181(3):1653–1669.

Deb, K., Pratap, A., Agarwal, S., and Meyarivan, T. (2002). A Fast and Elitist Multiobjective Genetic Algorithm: NSGA-II. *IEEE Transactions on Evolutionary Computation*, 6(2):182–197.

Dufossé, P. and Touré́, C. (2019). Benchmarking MO-CMA-ES and COMO-CMA-ES on the bi-objective bbob-biobj testbed. In *Genetic and Evolutionary Computation Conference (Companion), GECCO 2019 Companion*, pages 1920–1927, New York, NY, USA. ACM.

Touré, C., Hansen, N., Auger, A., and Brockhoff, D. (2019). Uncrowded hypervolume
improvement: COMO-CMA-ES and the Sofomore framework. In *Genetic and Evolutionary Computation Conference (GECCO 2019)*, pages 638–646, New York, NY, USA.
ACM.
 
---

The plots are retrieved from the [bbob-biobj-plots](https://github.com/numbbo/bbob-biobj-plots) GitHub repository. 
