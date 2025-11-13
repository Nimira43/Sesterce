import { DELAY_AI, GRID_CIRCLE, GRID_COLS, GRID_ROWS, MARGIN, COLOUR_BG, COLOUR_FRAME, COLOUR_FRAME_BOTTOM,COLOUR_RI, COLOUR_RI_DARK, COLOUR_AI, COLOUR_AI_DARK, COLOUR_TIE, COLOUR_TIE_DARK, COLOUR_WIN, TEXT_RI, TEXT_AI, TEXT_TIE, TEXT_WIN } from './js/constants'

const canvasEl = document.querySelector('canvas')
const ctx = canvasEl.getContext('2d')

class Cell {
  constructor(left, top, w, h, row, col) {
    this.left = left
    this.right = left + w
    this.top = top
    this.bottom = top + h
    this.w = w
    this.h = h
    this.row = row
    this.col = col
    this.centreX = left + w / 2
    this.centreY = top + h / 2
    this.r = (w * GRID_CIRCLE) / 2
    this.highlight = null
    this.owner = null
    this.winner = false
  }

  contains(x, y) {
    return (
      x > this.left && 
      x < this.right && 
      y > this.top && 
      y < this.bottom
    )
  }

  draw(canvasContext) {
    let colour = this.owner == null
      ? COLOUR_BG 
      : this.owner
        ? COLOUR_RI
        : COLOUR_AI

    canvasContext.fillStyle = colour
    canvasContext.beginPath()
    canvasContext.arc(
      this.centreX,
      this.centreY,
      this.r,
      0,
      Math.PI * 2
    )
    canvasContext.fill()
  
    if (this.winner || this.highlight != null) {
      colour = this.winner 
        ? COLOUR_WIN
        : this.highlight
          ? COLOUR_RI
          : COLOUR_AI
      
      canvasContext.lineWidth = this.r / 4
      canvasContext.strokeStyle = colour
      canvasContext.beginPath()
      canvasContext.arc(
        this.centreX,
        this.centreY,
        this.r,
        0,
        Math.PI * 2  
      )
      canvasContext.stroke()
    }
  }
}

let gameOver,
    gameTied,
    grid = [],
    playersTurn,
    timeAI

let width,
    height,
    margin
setDimensions()

canvasEl.addEventListener('click', click)
canvasEl.addEventListener('mousemove', highlightGrid)
window.addEventListener('resize', setDimensions)

let timeDiff, timeLast
requestionAnimtionFrame(playGame)


function playGame(timeNow) {}

function checkWin(row, col) {}

function connex(cells = []) {}

function click() {}

function createGrid() {}

function drawBackground() {}

function drawGrid() {}

function drawText() {}

function AI(diff) {}

function highlightCell(x, y) {}

function highlightGrid(e) {}

function newGame() {
  playersTurn = Math.random() < 0.5
  gameOver = false
  gameTied = false
  createGrid()
}

function selectCell() {}

function setDimensions() {
  width = window.innerWidth
  height = window.innerHeight
  canvasEl.width = width
  canvasEl.height = height
  margin = MARGIN * Math.min(height, width)

  newGame()
}




