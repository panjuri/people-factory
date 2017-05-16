
const App = {
  init() {
    const personForm = document.querySelector('form')
    personForm.addEventListener('submit', (ev) => this.handleSubmit(ev))
  },

  renderColor(hairColor) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = hairColor
    colorDiv.style.height = '50px'
    colorDiv.style.width = '100px'
    return colorDiv
  },

  renderItem(name) {
    const item = document.createElement('li')
    item.innerHTML = `${name}`
    return item
  },

  renderList(person) {
    const list = document.createElement('ul')
    Array.from(person).map((input, _i, _formElements) => {
      if (input.value) {
        let value = input.value
        if (input.type === 'color') {
          value = this.renderColor(value).outerHTML
        }
        const li = this.renderItem(input.name, value)
        list.appendChild(li)
      }
    })
    return list
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')
    const list = document.querySelector("ul")
    const input = document.querySelector("input")
    list.appendChild(this.renderItem(input.value))
  },
}

App.init()