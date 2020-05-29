<template>
  <div class="add-article-page">
    <h1 class="mb-4">
      Add new article
    </h1>
    <form @submit.prevent="onCreateArticle">
      <div class="form-group">
        <label for="title">Title</label>
        <input id="title" v-model="article.title" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="preview-text">Preview text</label>
        <div
          id="preview-text"
          ref="previewText"
          contenteditable="true"
          class="form-control"
          @input="onInput($event.target.innerText)"
        />
      </div>
      <div class="form-group">
        <label for="detail-text">Detail text</label>
        <div
          id="detail-text"
          ref="detailText"
          contenteditable="true"
          class="form-control"
          @input="onInputDetail($event.target.innerText)"
        />
      </div>
      <button type="submit" class="btn btn-primary btn-block">
        Create
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data: () => ({
    article: {
      title: '',
      previewText: '',
      detailText: '',
      previewImage: 'https://www.fillmurray.com/1110/300/',
      detailImage: 'https://www.fillmurray.com/1110/300/',
      detailImages: [
        'https://www.fillmurray.com/1110/300/',
        'https://www.fillmurray.com/1110/302/',
        'https://www.fillmurray.com/1110/303/',
        'https://www.fillmurray.com/1110/304/'
      ]
    }
  }),
  methods: {
    onCreateArticle () {
      this.$axios.$post('/articles', this.article)
      this.$router.push({ name: 'articles' })
    },
    onInput (text) {
      let newText = text.replace(/true/g, '<span class="text-success">true</span>')
      newText = newText.replace(/false/g, '<span class="text-danger">false</span>')
      /*  let newText = text.replace(/(<)(.{1, 4})(>)/g, '<span class="text-warning">$1</span><span class="text-info">$2</span><span class="text-warning">$3</span>')
       newText = newText.replace(/false/g, '<span class="text-danger">false</span>') */
      this.$refs.previewText.innerHTML = newText
      this.placeCaretAtEnd(this.$refs.previewText)
      this.article.previewText = newText
    },
    onInputDetail (text) {
      let newText = text.replace(/true/g, '<span class="text-success">true</span>')
      newText = newText.replace(/false/g, '<span class="text-danger">false</span>')
      /*  let newText = text.replace(/(<)(.{1, 4})(>)/g, '<span class="text-warning">$1</span><span class="text-info">$2</span><span class="text-warning">$3</span>')
       newText = newText.replace(/false/g, '<span class="text-danger">false</span>') */
      this.$refs.detailText.innerHTML = newText
      this.placeCaretAtEnd(this.$refs.detailText)
      this.article.detailText = newText
    },
    placeCaretAtEnd (el) {
      el.focus()
      if (typeof window.getSelection !== 'undefined' && typeof document.createRange !== 'undefined') {
        const range = document.createRange()
        range.selectNodeContents(el)
        range.collapse(false)
        const sel = window.getSelection()
        sel.removeAllRanges()
        sel.addRange(range)
      } else if (typeof document.body.createTextRange !== 'undefined') {
        const textRange = document.body.createTextRange()
        textRange.moveToElementText(el)
        textRange.collapse(false)
        textRange.select()
      }
    }
  }
}
</script>

<style scoped lang="sass">
  .add-article-page
    padding-bottom: 60px

    textarea
      resize: none

    div[contenteditable]
      height: 200px
</style>
