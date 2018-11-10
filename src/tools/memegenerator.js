export default class MemeGenerator {
  constructor ({ canvas, imageSource, topText, topTextSize, bottomText, bottomTextSize }) {
    this.canvas = canvas
    this.imageSource = imageSource
    this.topText = topText
    this.bottomText = bottomText
    this.topTextSize = topTextSize
    this.botttomTextSize = bottomTextSize
    this.ctx = canvas.getContext('2d')
    this.image = new Image()
    this.image.src = imageSource
    this.image.onload = () => {
      this.draw()
    }
  }

  drawText = (text, x, y, method) => {
    const textSize = parseInt(this.ctx.font.replace(/\D/gi, ''))
    let multilineText = []
    let numOfLine = 0
    let words = []
    const width = this.ctx.canvas.width

    multilineText = text.split('\n')
    numOfLine = multilineText.length
    words = multilineText.map(textEachline => textEachline.split(' '))

    multilineText = []
    for (var line = 0; line < numOfLine; line++) {
      let currentLine = ''
      for (var wordPosition = 0; wordPosition < words[line].length; wordPosition++) {
        let testLine = currentLine + words[line][wordPosition] + ' '
        if (
          this.ctx.measureText(testLine).width > width &&
          wordPosition > 0
        ) {
          multilineText.push(currentLine)
          currentLine = words[line][wordPosition] + ''
        } else {
          currentLine = testLine
        }
      }
      multilineText.push(currentLine)
    }
    multilineText.map((eachline, index) => {
      if (method !== 'none') {
        this.ctx.fillText(eachline, x, y + (textSize * index))
        this.ctx.strokeText(eachline, x, y + (textSize * index))
      }
    })
    return {
      textHeight: textSize * multilineText.length
    }
  }
  style = (font, size, align, base) => {
    this.ctx.font = size + 'px ' + font
    this.ctx.textAlign = align
    this.ctx.textBaseline = base
  }
  draw = () => {
    const padding = 15
    // uppercase the text
    var top = this.topText.toUpperCase()
    var bottom = this.bottomText.toUpperCase()

    // set appropriate canvas size
    this.canvas.width = this.image.width
    this.canvas.height = this.image.height

    // draw the image
    this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height)

    // styles
    this.ctx.fillStyle = '#fff'
    this.ctx.strokeStyle = '#000'
    this.ctx.lineWidth = this.canvas.width * 0.004

    var _textSizeTop = this.topTextSize / 100 * this.canvas.width
    var _textSizeBottom = this.bottomTextSize / 100 * this.canvas.width

    // draw top text
    this.style('Impact', _textSizeTop, 'center', 'bottom')

    // text, x, y, method
    this.drawText(top, this.canvas.width / 2, _textSizeTop + padding)

    // draw bottom text
    this.style('Impact', _textSizeBottom, 'center', 'top')
    const height = this.drawText(bottom, 0, 0, 'none').textHeight
    this.drawText(bottom, this.canvas.width / 2, this.canvas.height - padding - height)
  }
  updateText = ({
    topText,
    bottomText,
    topTextSize,
    bottomTextSize
  }) => {
    this.topText = topText
    this.bottomText = bottomText
    this.topTextSize = topTextSize
    this.bottomTextSize = bottomTextSize
    this.draw()
  }

  updateImage = (src) => {
    this.image.src = src
  }
}
