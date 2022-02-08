let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.textContent = 'Rizzo'
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let img= document.createElement('img')
img.setAttribute('class', 'dog-image')
img.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(img)
