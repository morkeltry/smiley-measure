// var width = 800;
// var height = 400;
var parent = document.body;
const smileyFile = 'smiley.svg';
var dummy ;
var smile ;
var smileLeftEnd ;
var smileRightEnd ;

var happiness;

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

happiness = 88;

//takes 0 <= happiness <= 100. Won;t error but results may be weird outside this range
const newPath = (id, happiness) => {
  happiness += Math.max (0, 10-Math.abs (50-happiness)) /2 ;
  let [y, arcY, arcDir] = [211, 139, `0 0 1`];
  switch (id) {
    case 'smile' : {
      arcDir = (happiness>= 50)? `0 0 1` : `0 1 0` ;
      if (happiness>= 50) {
        y = 311-happiness;
        arcY = -111+happiness*2.5;
        arcDir = `0 0 1`;
        return `M 353,${y} A 144,${arcY} ${arcDir} 65.1,${y}`
      } else {
        arcY = 9;
        arcDir = `0 1 0`;
        if (happiness>= 30) {
          y = 311-happiness;
          arcY = 101.5-happiness*1.75;
          return `M 353,${y} A 144,${arcY} ${arcDir} 65.1,${y}`
        } else
          if (happiness>= 15) {
            console.log('caught',happiness);
            y = 326-happiness*1.5;
            arcY = 133-happiness*2.8;
            return `M 353,${y} A 144,${arcY} ${arcDir} 65.1,${y}`
          } else {
            y = 313-happiness*0.6;
            arcY = 99-happiness*0.5;
            return `M 353,${y} A 144,99 ${arcDir} 65.1,${y}`
          }
      }
    }
    case 'smile-left-end' : {
      y = 322-happiness;
      return `m 58,${y} c -0,0 -1.5,0.66 -2.75,1.5 -3,2.5 -8,2 -10,-1 -1.5,-2 -1.5,-2.75 0,-5 3.75,-5.5 18,-9 29,-7.75 8.75,1.25 11.5,4.5 8,9.5 -1,1.5 -2.5,1.75 -6.25,1.75 l -5,0 z`
    }
    case 'smile-right-end' : {
      y = 322-happiness;
      return `m 357,${y} c 0,0 1.5,0.66 2.75,1.5 3,2.5 8,2 10,-1 1.5,-2 1.5,-2.75 0,-5 -3.75,-5.5 -18,-9 -29,-7.75 -8.75,1.25 -11.5,4.5 -8,9.5 1,1.5 2.5,1.75 6.25,1.75 l 5,0 z`
    }
    default : {
      return "M 353,211 A 144,139 0 0 1 65.1,211"
    }
  }

}


getFile (smileyFile, "smiley-svg", ()=> {

  willFail = d3.select('#nothing-to-find');
  smile = d3.select('#smile');
  smileLeftEnd = d3.select('#smile-left-end');
  smileRightEnd = d3.select('#smile-right-end');


  // console.log (d3.select(smile)
  //   .attr ('d'));

console.log('happiness:', happiness, smileLeftEnd.attr('id'), smileRightEnd.attr('id'));


  [smile, smileLeftEnd, smileRightEnd]
    .forEach (el => {
      let nP = newPath(el.attr('id'), happiness);
      console.log(nP);
      el.attr('d', nP)
    })













});
