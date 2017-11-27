// var width = 800;
// var height = 400;
var parent = document.body;
const smileyFile = 'smiley.svg';
var dummy ;
var smile ;
var smileLeftEnd ;
var smileRightEnd ;

var happiness = 100;

const getFile = (file, newId, cb) => {

// d3 <v5 only
d3.xml(smileyFile).mimeType("image/svg+xml").get( (error, xml) => {
  if (error) throw error;
  if (newId)
    xml.documentElement.setAttribute('id', newId);
  parent.appendChild(xml.documentElement);
  cb();
});

// // d3 v5 only
// d3.xml(smileyFile)
//   .then(xml => {
//     if (newId)
//       xml.documentElement.setAttribute('id', newId);
//     var svgExternal = xml.documentElement;
//     parent.append(svgExternal);
//     cb();
//   });
}

const newPath = (id, happiness) => {
  switch (id) {
    case 'smile' : {
      return "M 353,211 A 144,139 0 0 1 65.1,211"
    }
    case 'smile-left-end' : {
      return "m 58,222 c -0,0 -1.5,0.66 -2.75,1.5 -3,2.5 -8,2 -10,-1 -1.5,-2 -1.5,-2.75 0,-5 3.75,-5.5 18,-9 29,-7.75 8.75,1.25 11.5,4.5 8,9.5 -1,1.5 -2.5,1.75 -6.25,1.75 l -5,0 z"
    }
    case 'smile-right-end' : {
      return "m 357,222 c 0,0 1.5,0.66 2.75,1.5 3,2.5 8,2 10,-1 1.5,-2 1.5,-2.75 0,-5 -3.75,-5.5 -18,-9 -29,-7.75 -8.75,1.25 -11.5,4.5 -8,9.5 1,1.5 2.5,1.75 6.25,1.75 l 5,0 z"
    }
    default : {
      return "M 353,211 A 144,139 0 0 1 65.1,211"
    }
  }

}


getFile (smileyFile, "smiley-svg", ()=> {

  dummy = d3.select('#dummy');
  smile = d3.select('#smile');
  smileLeftEnd = d3.select('#smile-left-end');
  smileRightEnd = d3.select('#smile-right-end');













});
