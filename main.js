import { DELAY_AI, GRID_CIRCLE, GRID_COLS, GRID_ROWS, MARGIN, COLOUR_BG, COLOUR_FRAME, COLOUR_FRAME_BOTTOM,COLOUR_RI, COLOUR_RI_DARK, COLOUR_AI, COLOUR_AI_DARK, COLOUR_TIE, COLOUR_TIE_DARK, COLOUR_WIN, TEXT_RI, TEXT_AI, TEXT_TIE, TEXT_WIN } from './js/constants'

const canvasEl = document.querySelector('canvas')
const ctx = canvasEl.getContext('2d')

class Cell {
  constructor(){
  }

  contains() {}
  draw() {}
}

let gameOver,
    gameTied,
    grid = [],
    playersTurn,
    timeAI

let width,
    height,
    margin

let timeDiff, timeLast




function playGame() {}
function checkWin() {}
function connex() {}
function click() {}
function createGrid() {}
function drawBackground() {}
function drawGrid() {}
function drawText() {}
function AI() {}
function highlightCell() {}
function highlightGrid() {}
function newGame() {}
function selectCell() {}
function setDimensions() {}




