<template>
  <div class="hello">
    <div class="columns">
      <div class="column">
        <h1 class="title">Meme Generator</h1>
      </div>
    </div>
    <div class="columns">
      <div class="column is-6">
        <canvas id="canvas" crossorigin="Anonymous">
          Canvas requires a browser that supports HTML5.
        </canvas>
      </div>
      <div class="column is-6">
        <fieldset>
          <div class="field">
            <label class="label">Image URL</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Image URL"
                v-model="src"
                @change="sourceUrlChange"
              />
            </div>
            <p class="help">You can put your image source URL from outside</p>
          </div>
          <div class="columns">
            <div class="column is-6">
              <div class="field">
                <label for="top-text-input" class="label">Top text</label>
                <input
                  id="top-text-input"
                  class="input"
                  type="text"
                  placeholder="top text"
                  v-model="topText"
                  @input="textUpdate"
                />
              </div>

            </div>
            <div class="column is-6">
              <div class="field">
                <label for="top-text-size-slider-input" class="label">Top text size: {{topTextSize}}</label>
                <div class="control">
                  <input
                    id="top-text-size-slider-input"
                    class="slider is-fullwidth is-info"
                    type="range"
                    step="2"
                    v-model="topTextSize"
                    min="6"
                    max="20"
                    @input="textUpdate"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6">
              <div class="field">
                <label for="bottom-text-input" class="label">Bottom text</label>
                <input
                  id="bottom-text-input"
                  class="input"
                  type="text"
                  placeholder="bottom text"
                  v-model="bottomText"
                  @input="textUpdate"
                />
              </div>

            </div>
            <div class="column is-6">
              <div class="field">
                <label for="bottom-text-size-slider-input" class="label">Top text size: {{bottomTextSize}}</label>
                <div class="control">
                  <input
                    id="bottom-text-size-slider-input"
                    class="slider is-fullwidth is-info"
                    type="range"
                    v-model="bottomTextSize"
                    min="6"
                    max="20"
                    step="2"
                    @input="textUpdate"
                  />
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import Presenter from '@/presenters/memepresenter'
import MemeGenerator from '@/tools/memegenerator'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      presenter: new Presenter(this),
      topTextSize: 10,
      bottomTextSize: 10,
      memeGen: null,
      topText: 'hello world',
      bottomText: 'Bottom',
      src: 'https://i.memeful.com/media/post/lMzZpAM_700wa_0.gif'
    }
  },
  methods: {
    textUpdate: function () {
      this.memeGen.updateText({
        topText: this.topText,
        bottomText: this.bottomText,
        topTextSize: this.topTextSize,
        bottomTextSize: this.bottomTextSize
      })
    },
    sourceUrlChange: function () {
      this.memeGen.updateImage(this.src)
    }
  },
  mounted () {
    const canvas = document.querySelector('#canvas')
    const imagePath = this.$route.query.image
    if (imagePath) {
      this.src = imagePath
    }
    this.memeGen = new MemeGenerator({
      canvas,
      imageSource: this.src,
      topText: this.topText,
      topTextSize: this.topTextSize,
      bottomText: this.bottomText,
      bottomTextSize: this.bottomTextSize
    })
  }
}
</script>

<style scoped lang="scss">

#canvas {
  max-width: 100%;
  min-width: 100%;
  min-height: 200px;
  background: #c0c0c0;
}

fieldset {
  border: none;
}

</style>
