const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
    const colorDiv = document.createElement('li')
    colorDiv.style.backgroundColor = hairColor
    colorDiv.style.height = '50px'
    colorDiv.style.width = '100px'
    return colorDiv
}
const renderitem = (name, value) => {
    const item =document.createElement ('li')
    item.textContent = `${name}: ${value}`
    return item
}
const renderlist = (person) => {
    const list = document.createElement('ul')
    Array.from(person).map((input, _i, _formElement) => {
        const li = renderlist(input.name, input.value)
        list.appendChild(li)
    })
    return list
} 

const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const personName = form.personName.value
    const hairColor = form.hairColor.value
    const age = form.age.value
    const birthplace = form.birthplace.value

    const name = document.createElement('li')
    name.textContent = personName

    const colorDiv = renderColor(hairColor)

    const years = document.createElement('li')
    years.textContent = age 

    const placebirth = document.createElement('li')
    placebirth.textContent = birthplace 

    details.appendChild(name)
    details.appendChild(colorDiv)
    details.appendChild(years)
    details.appendChild(placebirth)
    }
personForm.addEventListener('submit',handleSubmit)

