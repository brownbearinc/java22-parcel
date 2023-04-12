const img = document.createElement('img')


const imgUrl = new URL('../media/jpg.png', import.meta.url)

img.src = imgUrl
document.body.append(img)
