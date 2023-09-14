class URL {
  constructor(url) {
    this.href = url
    this.origin = ''
    this.protocol = ''
    this.host = ''
    this.port = ''
    this.pathname = ''
    this.search = ''
    this.hash = ''
    this.params = {}
    this.getParams()
  }
  getParams () {
    const url = this.href
    if (!url || typeof url !== 'string') return
    const m = url.match(/(^https?:)\/\/((\w+\.)?(\w+\.?){2,})/)
    if (m) {
      if (m[0]) this.origin = m[0]
      if (m[1]) this.protocol = m[1]
      if (m[2]) this.host = m[2]
    }
    const pathRegExp = new RegExp(m[0] + '(:(\\d+))?([^\?#]*)?[\?#]*')
    const pathMatch = url.match(pathRegExp)
    const searchMatch = url.match(/\?([^#\?]*)?/g)
    const hashMatch = url.match(/#([^?\?]*)?/g)

    if (pathMatch) {
      if (pathMatch[2]) this.port = pathMatch[2]
      if (pathMatch[3]) this.pathname = pathMatch[3]
    }

    if (hashMatch) {
      const arr = []
      hashMatch.forEach((h,i) => {
        const hash = h.substring(1)
        hash.replace(/([^=&]+)?=([^=&]+)?/g, (_, a, b) => {
          this.params[a] = b
        })
        arr.push(i === 0 ? h : h.replace('#', '&'))
      })
      this.hash = arr.join('')
    }

    if (searchMatch) {
      const arr = []
      searchMatch.forEach((s, i) => {
        const search = s.substring(1)
        search.replace(/([^=&]+)?=([^=&]+)?/g, (_, a, b) => {
          this.params[a] = b
        })
        arr.push(i === 0 ? s : s.replace('?', '&'))
      })
      this.search = arr.join('')
    }
  }
}

export default URL