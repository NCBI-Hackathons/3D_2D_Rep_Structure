$(function(){ // on dom ready

  var intrac = {
      "intrac": {
          "1": {
              "shape": "rect",
              "coords": [
                  [33, 14, 62, 45]
              ],
              "intrac": {
                  "2": [],
                  "4": []
              }
          },
          "2": {
              "shape": "rect",
              "coords": [
                  [98, 7, 127, 38]
              ],
              "intrac": {
                  "1": [],
                  "4": []
              }
          },
          "3": {
              "shape": "circle",
              "coords": [
                  [75, 216, 25]
              ],
              "intrac": {
                  "4": [],
                  "6": []
              }
          },
          "4": {
              "shape": "circle",
              "coords": [
                  [96, 111, 25]
              ],
              "intrac": {
                  "1": [],
                  "2": [],
                  "3": [],
                  "5": [],
                  "7": []
              }
          },
          "5": {
              "shape": "circle",
              "coords": [
                  [206, 120, 26]
              ],
              "intrac": {
                  "4": [],
                  "8": []
              }
          },
          "6": {
              "shape": "poly",
              "coords": [
                  [45, 263],
                  [30, 278],
                  [45, 293],
                  [60, 278]
              ],
              "intrac": {
                  "3": []
              }
          },
          "7": {
              "shape": "poly",
              "coords": [
                  [23, 104],
                  [8, 119],
                  [23, 133],
                  [37, 119]
              ],
              "intrac": {
                  "4": []
              }
          },
          "8": {
              "shape": "poly",
              "coords": [
                  [277, 106],
                  [263, 121],
                  [277, 135],
                  [292, 121]
              ],
              "intrac": {
                  "5": []
              }
          }
      }
  };
  var colors = {1: "#ff00ff", 2: "#0000ff", 3: "#996633", 4: "#00ff99", 5: "#cccccc"};
  var chainIds = {1: "E",2:"F",3:"C",4:"B",5:"A",6:"Zn",7:"Zn",8:"Zn"};

function intracToCytoscape(intrac,colors) {
  var nodes = [];
  var edges = [];
  for (var name in intrac) {
    if (intrac.hasOwnProperty(name)) {
      var props = intrac[name];
      var x,y,nodetype;
      if(props.shape == "rect") {
        x = (props.coords[0][0] + props.coords[0][2])/2;
        y = (props.coords[0][1] + props.coords[0][3])/2;
        nodetype="nucleotide";
      } else if(props.shape == "circle") {
        x = props.coords[0][0];
        y = props.coords[0][1];
        nodetype="protein";
      } else if(props.shape == "poly") {
        //TODO
        x = props.coords[0][0];
        y = props.coords[0][1];
        nodetype="ligand";
      } else {
        console.log("Ignoring "+name+" due to unknown shape "+props.shape);
      }
      
      var col = "grey";
      if(colors[name]) {
        col = colors[name];
      }
      var node = {
        "data" : {
          "id" : name,
          "label" : chainIds[name],
          "color" : col,
          "NodeType":nodetype
        },
        "position" : {
          "x":x,
          "y":y},
        "selected" : false
      };
      nodes.push(node);
      if(props.intrac) {
        for( var t in props.intrac){
          var edge = {
            "data" : {
              "source": name,
              "target": t
            }
          };
          edges.push(edge);
        }
      }
    }
  }
  
  return {
    "nodes":nodes,
    "edges":edges
  };
}

var elems = intracToCytoscape(intrac.intrac,colors);
//console.log(elems);

//   {
//       "data" : {
//         "id" : "785",
//         "source" : "769",
//         "target" : "767",
//         "SUID" : 785,
//         "source_original" : "2",
//         "id_original" : "e2-4",
//         "selected" : false,
//         "target_original" : "4"
//       },
//       "selected" : false
//     };
  
var elems3 = {
    "nodes" : [ {
      "data" : {
        "id" : "1",
        "name" : "1",
      },
      "position" : {
        "x" : -13.097525038320441,
        "y" : 283.0525113278014
      },
    },{
      "data" : {
        "id" : "2",
        "name" : "2",
      },
      "position" : {
        "x" : -13.097525038320441,
        "y" : 0.0525113278014
      },
    }],
    "edges":[{
      "data" : {
        "source" : "1",
        "target" : "2",
      },
    } ]
  };
var elems2 = {
    "nodes" : [ {
      "data" : {
        "id" : "769",
        "shared_name" : "2",
        "name" : "2",
        "SUID" : 769,
        "id_original" : "2",
        "type" : "nucleotide",
        "selected" : false
      },
      "position" : {
        "x" : -13.097525038320441,
        "y" : 283.0525113278014
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "768",
        "shared_name" : "6",
        "name" : "6",
        "SUID" : 768,
        "id_original" : "6",
        "type" : "chemical",
        "selected" : false
      },
      "position" : {
        "x" : -3.210989393789191,
        "y" : -50.17836178010873
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "767",
        "shared_name" : "4",
        "name" : "4",
        "SUID" : 767,
        "id_original" : "4",
        "type" : "protein",
        "selected" : false
      },
      "position" : {
        "x" : 40.75776060621081,
        "y" : 179.94506656461783
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "766",
        "shared_name" : "5",
        "name" : "5",
        "SUID" : 766,
        "id_original" : "5",
        "type" : "protein",
        "selected" : false
      },
      "position" : {
        "x" : 159.2459197858983,
        "y" : 154.7828503780944
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "765",
        "shared_name" : "3",
        "name" : "3",
        "SUID" : 765,
        "id_original" : "3",
        "type" : "protein",
        "selected" : false
      },
      "position" : {
        "x" : 19.74964293042956,
        "y" : 60.712720983563145
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "764",
        "shared_name" : "1",
        "name" : "1",
        "SUID" : 764,
        "id_original" : "1",
        "type" : "nucleotide",
        "selected" : false
      },
      "position" : {
        "x" : 90.59444578687487,
        "y" : 284.32021915250846
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "763",
        "shared_name" : "8",
        "name" : "8",
        "SUID" : 763,
        "id_original" : "8",
        "type" : "chemical",
        "selected" : false
      },
      "position" : {
        "x" : 271.26890715162097,
        "y" : 137.8327313595397
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "762",
        "shared_name" : "7",
        "name" : "7",
        "SUID" : 762,
        "id_original" : "7",
        "type" : "chemical",
        "selected" : false
      },
      "position" : {
        "x" : -75.58693543871107,
        "y" : 169.99018680387564
      },
      "selected" : false
    } ],
    "edges" : [ {
      "data" : {
        "id" : "785",
        "source" : "769",
        "target" : "767",
        "SUID" : 785,
        "source_original" : "2",
        "id_original" : "e2-4",
        "selected" : false,
        "target_original" : "4"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "784",
        "source" : "769",
        "target" : "764",
        "SUID" : 784,
        "source_original" : "2",
        "id_original" : "e2-1",
        "selected" : false,
        "target_original" : "1"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "774",
        "source" : "768",
        "target" : "765",
        "SUID" : 774,
        "source_original" : "6",
        "id_original" : "e6-3",
        "selected" : false,
        "target_original" : "3"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "782",
        "source" : "767",
        "target" : "766",
        "SUID" : 782,
        "source_original" : "4",
        "id_original" : "e4-5",
        "selected" : false,
        "target_original" : "5"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "781",
        "source" : "767",
        "target" : "765",
        "SUID" : 781,
        "source_original" : "4",
        "id_original" : "e4-3",
        "selected" : false,
        "target_original" : "3"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "780",
        "source" : "767",
        "target" : "764",
        "SUID" : 780,
        "source_original" : "4",
        "id_original" : "e4-1",
        "selected" : false,
        "target_original" : "1"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "779",
        "source" : "767",
        "target" : "762",
        "SUID" : 779,
        "source_original" : "4",
        "id_original" : "e4-7",
        "selected" : false,
        "target_original" : "7"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "775",
        "source" : "766",
        "target" : "763",
        "SUID" : 775,
        "source_original" : "5",
        "id_original" : "e5-8",
        "selected" : false,
        "target_original" : "8"
      },
      "selected" : false
    } ]
  };

var cy = cytoscape({
  container: $('#cy')[0],
  
  boxSelectionEnabled: false,
  autounselectify: true,
  
  elements: elems,
    style: [
    {
      selector: 'node',
      style: {
        "background-color" : 'data(color)',
        'content': 'data(label)',
      }
    },{
      selector: 'node[NodeType="protein"]',
      style: {
        "shape" : "circle"
      }
    },{
      selector: 'node[NodeType="nucleotide"]',
      style: {
        "shape" : "rectangle",
      }
    },{
      selector: 'node[NodeType="ligand"]',
      style: {
        "shape" : "diamond",
      }
    },
    ],
  
//   layout: {
//     name: 'cose',
//     padding: 10
//   }
layout: {
    name: 'preset',
    padding: 10
  }
});
  
  
  
cy.on('tap', 'node', function(){
  try { // your browser may block popups
    console.log('You clicked node: ' + this.data('id'));
    console.log('Type is: ' + this.data('type'));
  } catch(e){ // fall back on url change
    window.location.href = this.data('href'); 
  } 
});

}); // on dom ready