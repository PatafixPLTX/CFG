// All the global variables used in the application

// client data
let preferenceMaxCanvasSize = 600;
let preferenceMinCanvasSize = 200;
let preferredPercentageSize = 0.7;
// end of client data

let contentCreation = null; // variable used when creating content in sub-pages

// BEGIN OF GAME VARIABLES
let ctx = null;
let canvasState = null;

let currentMouseOver = [-100, -100];
let currentCase = [-1, -1];
let currentCaseCopy = [-1,-1];
let lastCase = [-1, -1];
let lastCaseCopy = [-1, -1];
let yourTurn = true;

let oneOnTenHeigth = null;
let oneOnTenWidth = null;
let halfWidthCanvas = null;
let halfHeigthCanvas = null;
let rect = null;
let yourPion, enemyPion;
// END OF GAME VARIABLES