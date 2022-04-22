import p5Types from 'p5'
import dynamic from 'next/dynamic'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

export default () => {
  let rows = 25
  let columns = 25
  const rectSize = 36
  const fadeSpeed = 10
  let cells: number[][] = []
  let colPal = [
    '#5d275d',
    '#b13e53',
    '#ef7d57',
    '#ffcd75',
    '#a7f070',
    '#38b764',
    '#257179',
    '#29366f',
    '#3b5dc9',
    '#3b5dc9',
    '#41a6f6',
    '#73eff7',
    '#94b0c2',
    '#566c86',
    '#333c57',
  ]
  function setup(p5: p5Types) {
    let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
    canvas.position(0, 0)
    canvas.style('z-index', '-1');
    p5.noStroke()
    p5.fullscreen()
    rows = p5.height / rectSize
    columns = p5.width / rectSize
    for (let r: number = 0; r < rows; r++) {
      cells[r] = []
      for (let c: number = 0; c < columns; c++) {
        cells[r][c] = 0
      }
    }
  }

  function draw(p5: p5Types) {
    const cellWidth = rectSize
    const cellHeight = rectSize

    if (
      p5.mouseX > 0 &&
      p5.mouseX < p5.width &&
      p5.mouseY > 0 &&
      p5.mouseY < p5.height
    ) {
      const mouseR = p5.floor(rows * (p5.mouseY / p5.height))
      const mouseC = p5.floor(columns * (p5.mouseX / p5.width))
      cells[mouseR][mouseC] = 255
    }

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        cells[r][c] -= fadeSpeed
        if (cells[r][c] > 96) {
          p5.fill(68, 64, 60)
        } else if (cells[r][c] < 120 && cells[r][c] > 5) {
          p5.fill(colPal[p5.int(p5.random(15))])
        } else {
          p5.fill(245, 245, 244)
        }
        // cells[r][c] = constrain(cells[r][c], 0, 255);

        const y = p5.height * (r / rows)
        const x = p5.width * (c / columns)

        // p5.fill(cells[r][c], 0, 128);
        p5.rect(x, y, cellWidth, cellHeight)
      }
    }
  }

  function windowResized(p5: p5Types) {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
    rows = p5.height / rectSize
    columns = p5.width / rectSize
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />
}
