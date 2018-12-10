// let string = "Lipase-Catalyzed Synthesis of Sugar Esters in Honey and Agave Syrup.";
let text = ["Proteomics has become one of the most important disciplines for characterizing cellular protein composition, building functional linkages between protein molecules, and providing insight into the mechanisms of biological processes in a high-throughput manner. Mass spectrometry-based proteomic advances have made it possible to study human diseases, including obesity, through the identification and biochemical characterization of alterations in proteins that are associated with it and its comorbidities. A sizeable number of proteomic studies have used the combination of large-scale separation techniques, such as high-resolution two-dimensional gel electrophoresis or liquid chromatography in combination with mass spectrometry, for high-throughput protein identification. These studies have applied proteomics to comprehensive biochemical profiling and comparison studies while using different tissues and biological fluids from patients to demonstrate the physiological or pathological adaptations within their proteomes. Further investigations into these proteome-wide alterations will enable us to not only understand the disease pathophysiology, but also to determine signature proteins that can serve as biomarkers for obesity and related diseases. This review examines the different proteomic techniques used to study human obesity and discusses its successful applications along with its technical limitations.", "We developed a simple microtechnique to measure lipids in milk by UV spectrophotometry. This technique is based upon the property of fatty acids to absorb UV light proportional to their concentration. Samples of powdered or fluid milk (30 or 60 muL) were added to 3 mL of analytic grade ethanol and stored at -20 degrees C for at least 1 h. This procedure precipitates proteins and hydrophobic peptides that interfere with UV measurement. Sample absorbances are then measured at 208 nm in an UV-Vis spectrophotometer. This technique correlated very well against Milko-Scan, a device that measures milk fat by IR spectroscopy, with an r(2) >0.982. Accuracy and precision, evaluated by recovery and replicate assays, are also very acceptable. This method is suitable as a fast, cost-effective alternative screening method to estimate milk fat content in small samples without prior lipid extraction.", "Exercise is a well-established tool to prevent and combat type 2 diabetes. Exercise improves whole body metabolic health in people with type 2 diabetes, and adaptations to skeletal muscle are essential for this improvement. An acute bout of exercise increases skeletal muscle glucose uptake, while chronic exercise training improves mitochondrial function, increases mitochondrial biogenesis, and increases the expression of glucose transporter proteins and numerous metabolic genes. This review focuses on the molecular mechanisms that mediate the effects of exercise to increase glucose uptake in skeletal muscle.", "Thin layer chromatography (TLC) is frequently used to obtain the fingerprint of a plant extract. Although the retardation factor and the response to visualisation give primary information about compound identification, the direct TLC‐mass spectrometry (MS) coupling allows a more detailed characterisation of samples."];

function removeSpecialChars(text) {
  return text.replace(/(?!\w|\s)./g, '')
    .replace(/\s+/g, ' ')
    .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
}

let position; //current position

let word = 0; //current word position

let wordIndex;
let characters;
var documentfrequency = {}; // initialize JSON for the documents
//and then everything gets stashed in this JSON

var termfrequency = {}; // JSON for the terms

let greek = [
     {
          "affix": "chord",
          "definition": "string, cord"
     },

     {
          "affix": "chore",
          "definition": "dance"
     },

     {
          "affix": "chori",
          "definition": "membrane"
     },

     {
          "affix": "chro",
          "definition": "color"
     },

     {
          "affix": "chron",
          "definition": "time"
     }
];

let latin = [
     {
          "affix": "eal",
          "definition": "pertaining to"
     },

     {
          "affix": "ex",
          "definition": "out of"
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

//what should the thresh bee for the TF?
let thresh = 0.3; //hard coded for now

for (i in termfrequency) {
     if(termfrequency[i]>=thresh) {
          //console.log(i);
     }
}

// the actual thing we need?
//term freq
function doTF(c){
     termfrequency = {};

     let words = text[c].split(' '); //gives the individual words
     for (let i = 0; i < words.length; i++) {
          //The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
          if(termfrequency.hasOwnProperty(words[i])) {
               // the word is already in the data structure
               termfrequency[words[i]]++;
          } else {
               termfrequency[words[i]]=1;
          }
     }

     for (i in termfrequency) {
          termfrequency[i] = termfrequency[i]/documentfrequency[i];
     }
}

//doc freq
function doDF() {
     for (let i = 0; i < text.length; i++) {
          position = text[i].split(' '); //words again
          for (let j = 0; j < position.length; j++) {// go thru each word in the chapter
               if (documentfrequency.hasOwnProperty(position[j])) {
                    // the word is already in the data structure
                    documentfrequency[position[j]]++;
               }
               else {
                    documentfrequency[position[j]]=1;
               }
          }
     }

}

function run() {
     // word = (word+1) % text.length;
     // doTF(word); // figure out the TFIDF
     doDF(); // figure out the words counts for the whole damn thing
     doTF(word); // figure out the TFIDF
     getCharacters(); //get the characters from the unique words
     //matchJson(); //match to our json

}

function getCharacters() {
      var results = [];
     // need to do some word matching and get the word index next
     for(i in documentfrequency) {
          //console.log(i + ": " + documentfrequency[i]*Math.log(6/2)); // test
          let threshold = documentfrequency[i]*Math.log(6/1);

          if (threshold <= 1.8) {
               //console.log(i + ": " + documentfrequency[i]); // test
               let wordArray = [i];
               //console.log(wordArray);
               //console.log(wordArray);
               for (j in greek) {
                    let gAffix = greek[j].affix;
                    for (k in latin) {
                         let lAffix = new RegExp(latin[k].affix);
                         console.log(lAffix);
                         //let results = wordArray.match(lAffix);
                         //console.log(results);

                    }

               }

               // for (let j = 0; j < wordArray.length; j++) { //lets go through the words
               //      //characters = wordArray[j].split(''); //characters in all the words

               //      for (let k = 0; k < greek.length; k++) {
               //      //        //console.log(greek[k].affix);
               //             let gAffix = greek[k].affix;
               //           for (let x = 0; x < latin.length; x++) {
               //                let lAffix = new RegExp(latin[x].affix);
               //      //            //console.log(lAffix);
               //                //console.log(wordArray);
               //                let results = lAffix.exec(wordArray);
                              //console.log(results);

                              // if (lAffix.test(wordArray) != true) {


                               // for(let y = 0; y < characters.length; y++){
                    //                //console.log(characters[y]);
                    //                if (lAffix.test(characters[y]) != true) {
                    //                     let lDef = latin[x].definition;
                    //                     let replaced = wordArray[j].replace(lAffix, lDef);
                    //                     //console.log(wordArray[j]);
                    //                     console.log(replaced);

                    //                     // console.log(lDef);
                    //                //this only returns every definition if it finds a match
                    //                     // console.log(latin[y].definition);
                    //                } else {
                    //                     console.log('sol');
                                                                                                                                                      

                    //                }
                    //            }
                    //      }
                    // }


                    
                    // for (let k = 0; k < greek.length; k++) {
                    //        //console.log(greek[k].affix);
                    //        let gAffix = greek[k].affix;
                    //        for (let x = 0; x < latin.length; x++) {
                    //            let lAffix = new RegExp(latin[x].affix);
                    //            //console.log(lAffix);
                    //            for(let y = 0; y < characters.length; y++){
                    //                //console.log(characters[y]);
                    //                if (lAffix.test(characters[y]) != true) {
                    //                     let lDef = latin[x].definition;
                    //                     let replaced = wordArray[j].replace(lAffix, lDef);
                    //                     //console.log(wordArray[j]);
                    //                     console.log(replaced);

                    //                     // console.log(lDef);
                    //                //this only returns every definition if it finds a match
                    //                     // console.log(latin[y].definition);
                    //                } else {
                    //                     console.log('sol');
                                                                                                                                                      

                    //                }
                    //            }
                    //        }
                    // }



                    //return characters;
                    //results[j] = characters;
              // }
          }
         // console.log(i + ": " + documentfrequency[i]); // test
         //if(documentfrequency[i]<10) console.log(i + ": " + documentfrequency[i]);
     }
     
}