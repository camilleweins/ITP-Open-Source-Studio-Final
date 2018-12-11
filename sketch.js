// let text = "We developed a simple microtechnique to measure lipids in milk by UV spectrophotometry. This technique is based upon the property of fatty acids to absorb UV light proportional to their concentration. Samples of powdered or fluid milk (30 or 60 muL) were added to 3 mL of analytic grade ethanol and stored at -20 degrees C for at least 1 h. This procedure precipitates proteins and hydrophobic peptides that interfere with UV measurement. Sample absorbances are then measured at 208 nm in an UV-Vis spectrophotometer. This technique correlated very well against Milko-Scan, a device that measures milk fat by IR spectroscopy, with an r(2) >0.982. Accuracy and precision, evaluated by recovery and replicate assays, are also very acceptable. This method is suitable as a fast, cost-effective alternative screening method to estimate milk fat content in small samples without prior lipid extraction."

let text = document.getElementById("text").innerHTML;
// let latin = JSON.parse(latinData);
let data = [];
let latin;

// let gdata = [];
// let greek;

function preload() {
  // Get the most recent earthquake in the database
  data = loadJSON('data/medical_latin.json');
  // gdata = loadJSON('data/medical_greek.json');
}
  //console.log(data);

function setup() {
  noCanvas();
}

// let latin = [
//      {
//           "affix": "eal",
//           "definition": "pertaining to"
//      },

//      {
//           "affix": "extra",
//           "definition": "outside"
//      },

//      {
//           "affix": "faci",
//           "definition": "face"
//      },

//      {
//           "affix": "fibr",
//           "definition": "fiber"
//      },

//      {
//           "affix": "fil",
//           "definition": "thread"
//      },

//      {
//           "affix": "form",
//           "definition": "having the form of"
//      },

//      {
//           "affix": "front",
//           "definition": "forehead"
//      }
// ];

// function removeSpecialChars(t) {
//   return t.replace(/(?!\w|\s)./g, '')
//     .replace(/\s+/g, ' ')
//     .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
// }

function run() {
  toRegex();

}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

// String.prototype.replaceAt=function(index, replacement) {
//   //should take the whole word here
//       return this.substr(0, index) + replacement+ this.substr(index);

//     // return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
// }

function toRegex() {
    latin = data;
  // console.log(latin[1].affix);
  for (i in latin) {
  //console.log(latin.affix[i]);
  console.log(latin[i].affix);

       let lAffix = new RegExp(latin[i].affix, "g");
       //console.log(lAffix);
       let lDef = latin[i].definition;
       // console.log(lDef.toString());

       
        let match;
        //console.log(lAffix.exec(text));

       while (match = lAffix.exec(text)) {
        // console.log("found", match[0], "at", match.index);
        let original = '<a href="#" ' + 'data-tooltip='+lDef+'>' +latin[i].affix+'</a>';

        // console.log(original);
        let newText = text.replaceAll(match[0], original);
        document.getElementById("text").innerHTML = newText;
        //text = newText;
        console.log(newText);
       }


  }
}