# Final Project Documentation

## Lexicon

My idea is to create a dictionary scientific terminology that converts complex terms into layman’s terms. This will increase accessibility for medical information for people in all levels of expertise. Some terms may have parts that are defined in a Latin dictionary, some in Greek, and some words have mixed Latin and Greek roots. The affixes and definitions for will be largely crowd sourced so that terms can be explained in the best way for everyone.

## Team Members
#### Camille Weins
* [Github](https://github.com/camilleweins)
* [Blog](https://medium.com/@camilleweins)
* [Form](https://goo.gl/forms/4R3qRpncoqISVEEr1)

## Deliverables / Work Product
* [DEMO](http://www.camilleweins.com/lexicon/)
* [Ideal version](https://editor.p5js.org/cweins/full/ryayP4p14)
* [Testing session](https://github.com/camilleweins/ITP-Open-Source-Studio-Final/blob/master/test.md)

## Define the problem you addressed and greater landscape

This is an idea I have jokingly mentioned to some friends back when I wanted to be a Biomolecular Science major. I will always remember how the first thing were were told in class was that everyone should learn Latin in conjunction with the sciences, particularly Biology. I have looked at Wikipedia, Etymology online, and the dictionary chrome extension. However, these don't really solve my issue considering that I want to eliminate the middleman, ie the search feature, go straight into the word annotation process. After talking to Sam, I started looking at more annotation based sources such as Genius, for lyrics, and this Japanese translator [site](https://j-talk.com/convert). It's sort of a combination between Wikipedia and the Japanese translator except I tried to keep the focus on the text content, not the word that was defined. If someone wanted to view the annotation then they can hover over the word and it becomes 'obstruction and information overload' by choice. 

## Implementation
1. Accessibility, Contributing guidelines and Code of Conduct/Liability were the big ones for me. One of the things that's important to include is that this tool is not a replacement for a doctor, if the user is parsing medical abstracts. This project was heavily influenced by Corpora.

2. RegEx, RegEx and more RegEx and some nifty work with HTML anchor element attributes. I had no idea that you could define a tool tip in the tag. The trickiest aspect of the code is that it needs to find a match and get the index of the match and encapsulate the original word in the <a> tag.

3. I was in RegEx purgatory for longer than I wanted to be. I thought a TF IDF would be useful, however, it ended up being a time sink-at least with how I was using it. It might still be a useful way to check words that aren't defined yet. Also, I can't get the definitions to show up in my text if the while loop detected multiple occurances of the affix. Right now, it only shows the definition for '-metry'.

4. In a way, everything came together the way I needed it to based on my timeline, minus actually putting together a coheisive website. I was in an interesting position in which there are two components to my project. The first being the open sourcing aspect of getting a community invovled with contributing words and definitions. The second is the use case for those words. My particular use case centers around scientific literarcy. In theory, the data set created could be used for anything and could be a second area to be open source(ie dev.to).

5. Getting my code working with tooltips and my json file was the absolute bare MVP. I can't really say I had biggest failures. It's a large project and I tried focusing on both components equally. Populating the database wasn't the hardest part. In the end, I achieved my goal of creating a tool that parses complicated terms into something easy to understand and does not need to rely on a search feature. 

## Accessibility
One of the issues I had to consider was how to make forms accessible. W3 has a [tutorial](https://www.w3.org/WAI/tutorials/forms/) specifically for forms, but considering the short time frame, I used Google Forms because Googls has already implemented accessibility measures. I made sure my form had clear instructions for the fiels and the text was black text a white background for the highest amount of contrast. I'm not sure how to make the tool tips accessible.

## Mentoring
I went from not knowing who would be a good mentor to having a great mentor. Sam Slover was the perfect person, considering that he is also working with a lot of complex data and trying to make it accessible to the general public without changing the meaning of the data. I also discussed my project briefly with Allison Parrish, who was also extremely helpful. One of the things that she and Sam kept reiterating was that a inline replacement can be more confusing. These words are so old and have a lot of nuances and associated meanings that are lost with a direct translation. I used their feedback to generate my first user testing examples. 

## Longer-Term Goals

I want to keep refining the crowd sourcing element and the tool view. I don't want to do any more database work because that should be for other people. I don't want to declare what I made as a web app or an iOS app because I believe it can be repurposed for many different things. It would be great to see the different use cases for the data. For now, I have essentially a table of words defined and I have a few words that need defining, which is a good place to start so people have a clear goal. Another feature that would be nice is a vote system on the definitions gathered so far. 
