// let text = "We developed a simple microtechnique to measure lipids in milk by UV spectrophotometry. This technique is based upon the property of fatty acids to absorb UV light proportional to their concentration. Samples of powdered or fluid milk (30 or 60 muL) were added to 3 mL of analytic grade ethanol and stored at -20 degrees C for at least 1 h. This procedure precipitates proteins and hydrophobic peptides that interfere with UV measurement. Sample absorbances are then measured at 208 nm in an UV-Vis spectrophotometer. This technique correlated very well against Milko-Scan, a device that measures milk fat by IR spectroscopy, with an r(2) >0.982. Accuracy and precision, evaluated by recovery and replicate assays, are also very acceptable. This method is suitable as a fast, cost-effective alternative screening method to estimate milk fat content in small samples without prior lipid extraction."

let text = document.getElementById("text").innerHTML;
let aTag = document.createElement('a');

let latin = [
     {
          "affix": "eal",
          "definition": "pertaining to"
     },

     {
          "affix": "extra",
          "definition": "outside"
     },

     {
          "affix": "faci",
          "definition": "face"
     },

     {
          "affix": "fibr",
          "definition": "fiber"
     },

     {
          "affix": "fil",
          "definition": "thread"
     },

     {
          "affix": "form",
          "definition": "having the form of"
     },

     {
          "affix": "front",
          "definition": "forehead"
     }
];

function removeSpecialChars(t) {
  return t.replace(/(?!\w|\s)./g, '')
    .replace(/\s+/g, ' ')
    .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
}

function run() {
	toRegex();

}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function toRegex() {
	for (i in latin) {
	     let lAffix = new RegExp(latin[i].affix, "gi");
	     let lDef = latin[i].definition;
	     //console.log(lDef);
	     let match;
	     while (match = lAffix.exec(text)) {
	     	//console.log("found", match[0], "at", match.index);
	     	//console.log(match.index);
	     	//console.log(match[0]);
	     	let newText = text.replaceAt(match.index, lDef);
	     	document.getElementById("text").innerHTML = newText;
	     	//text = newText;
	     	console.log(newText);
	     }
	}
}