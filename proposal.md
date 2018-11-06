# Final Project Proposal Template

## Project Title - Lexicon (tentative)
My idea is to create a dictionary for Greek and Latin medical terminology that converts complex terms into layman’s terms. This will increase accessibility for medical information for people in all levels of expertise. Some terms may have parts that are defined in a Latin dictionary, some in Greek, and some words have mixed Latin and Greek roots. The definitions for medical terminology will be largely crowd sourced so that terms can be explained in the best way for everyone.

## Team Members
#### Camille Weins
* [Github](https://github.com/camilleweins)
* [Blog] (https://medium.com/@camilleweins)

## Define the problem.
We have ways of getting our world news (NPR, AP, Reuters) in an unbiased fashion and as close to the source material as possible but the same cannot be said for scientific papers.The audience is a science oriented community - particularly medically inclined. I have hand "translated" two examples of what I want to do.

#### 1. Before
The olfactory system sensitively discerns scents from many small molecules as the brain analyses signals from nasal receptors. These receptors are selective to some degree, though the mechanism for selectivity is still controversial. Enantiomers, chiral pairs of left- and right-handed structures, are an important class of molecules in assessing proposed mechanisms. We show that there is a correlation between molecular (structural) flexibility and whether or not the left- and right-handed enantiomers smell the same. In particular, for the fairly extensive class of enantiomers with six-membered ring flexibility, enantiomers do not smell the same. There are, of course, significant experimental uncertainties, which we discuss here. We discuss models of receptor selectivity, both those based on shape and those where discrimination is based on other factors, such as electron affinity, proton affinity or vibration frequencies. The differences in scent of these enantiomers appear to be consistent with simple generalizations of a ‘swipe card’ model in which, while the shape must be good enough, critical information for actuation is a separate factor.

#### After
The olfactory system sensitively discerns scents from many small molecules as the brain analyses signals from nasal **to receive**. These **to receive** are selective to some degree, though the **fabric or structure** for selectivity is still controversial. **opposite**, **hand** pairs of left- and right-handed structures, are an important class of molecules in assessing proposed mechanisms. We show that there is a **together having brought back** between **an amount** (structural) flexibility and whether or not the left- and right-handed **opposites** smell the same. In particular, for the fairly extensive class of **opposites** with six-membered ring flexibility, **opposites** do not smell the same. There are, of course, significant experimental uncertainties, which we discuss here. We discuss models of **to receive** selectivity, both those based on shape and those where discrimination is based on other factors, such as electron affinity, **first ion, go** affinity or vibration frequencies. The differences in scent of these **opposites** appear to be consistent with simple generalizations of a ‘swipe card’ model in which, while the shape must be good enough, critical information for **having implemented** is a separate factor.

**Brookes, J. C., Horsfield, A. P., & Stoneham, A. M. (2008). Odour character differences for enantiomers correlate with molecular flexibility. Journal of the Royal Society, Interface, 6(30), 75-86.**

#### 2. Before
Comorbidities impact a large proportion of patients with chronic obstructive pulmonary disease (COPD), with over 80% of patients with COPD estimated to have at least one comorbid chronic condition. Guidelines for the treatment of COPD are just now incorporating comorbidities to their management recommendations of COPD, and it is becoming increasingly clear that multimorbidity as well as specific comorbidities have strong associations with mortality and clinical outcomes in COPD, including dyspnea, exercise capacity, quality of life, healthcare utilization, and exacerbation risk. Appropriately, there has been an increased focus upon describing the burden of comorbidity in the COPD population and incorporating this information into existing efforts to better understand the clinical and phenotypic heterogeneity of this group. In this article, we summarize existing knowledge about comorbidity burden and specific comorbidities in COPD, focusing on prevalence estimates, association with outcomes, and existing knowledge about treatment strategies.

#### After
**along with diseased conditions** impact a large proportion of patients with chronic obstructive pulmonary disease (COPD), with over 80% of patients with COPD estimated to have at least one **along with diseased condition** chronic condition. Guidelines for the treatment of COPD are just now incorporating **along with diseased conditions** to their management recommendations of COPD, and it is becoming increasingly clear that **many diseased conditions** as well as specific **along with diseased condition** have strong associations with mortality and clinical outcomes in COPD, including **difficulty breathing**, exercise capacity, quality of life, healthcare utilization, and **to increase in severity** risk. Appropriately, there has been an increased focus upon describing the burden of **along with diseased condition** in the COPD population and incorporating this information into existing efforts to better understand the clinical and **“I shine” typical form** **other family** of this group. In this article, we summarize existing knowledge about **along with diseased condition** burden and specific **along with diseased conditions** in COPD, focusing on prevalence estimates, association with outcomes, and existing knowledge about treatment strategies.

**Putcha, N., Drummond, M. B., Wise, R. A., & Hansel, N. N. (2015). Comorbidities and Chronic Obstructive Pulmonary Disease: Prevalence, Influence on Outcomes, and Management. Seminars in respiratory and critical care medicine, 36(4), 575-91.**

## Address Greater Landscape
This is an idea I have jokingly mentioned to some friends back when I wanted to be a Biomolecular Science major. I will always remember how the first thing were were told in class was that everyone should learn Latin in conjunction with the sciences, particularly Biology.

I haven’t seen work related to this specific issue. The closest thing related to this issue are news sites that basically give the tl;dr version of news (sources such as Wired or even NPR). There have obviously been projects related to text replacement, but I haven’t seen them applied to scientific texts. I also spent time looking for Latin and Greek dictionaries. Perhaps the closest thing is the Wordnik API but that doesn’t really give me what I want because of the nature of these terms (some are hybrids). Sometimes Wikipedia will say either Greek or Latin but won’t break down the entire word. There’s an etymology online [dictionary](https://www.etymonline.com) and a chrome extension but it requires the user to still search for the word. I want to eliminate the middleman, ie the search feature, and just go straight into word replacement.

## Deliverables
_Propose a clear list of deliverables._

* Build robust Latin and Greek dictionaries
* Build a submission form for words and abstracts
* Build a platform that allows viewers to read the ‘translated’ and original text

## Implementation
I would probably use Regular Expressions checks and match it to my dictionaries. I also only want abstracts in the public domain to avoid legality issues and I also want the citations and original link to the source. It’s not going to read perfectly, that’s not the goal either.


## Timeline

This project will be completed over 5 weeks (Nov 6 - Dec 11). Describe a timeline in detail below.

### Week 1

- Create a Greek affix dictionary.

### Week 2

- Compile some relevant abstracts (citations).

### Week 3

- Work on how to deal with replacing text/figure out the best way to display both versions. Figure out where and how to store all the data.

### Week 4

- Work on how to deal with replacing text/figure out the best way to display both versions. Get people to contribute to the dictionaries or add abstracts.

### Week 5

- Do some more testing regarding literacy and comprehension. Finalize hosting?

## Documentation

I will be blogging the actual coding process but I would really like to get some of my friends of just other people to contribute to either data source. I wonder if the easiest way to get non Github experienced people to contribute is to build a really simple form for either dictionary or reading material submissions.

## Accessibility

The text should be legible and have as little styling as I can manage. Text size should also be adjustable if possible. I would like to stick with black text on a white background to have the most contrast.

## Mentoring

I'm not sure who would be a good mentor for me. I would probably need help with the technicalities the most. Outreach could be a potential issue too since this project is so niche.
