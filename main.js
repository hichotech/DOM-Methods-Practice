const body =document.querySelector('.body')


const button = document.createElement('button')   
const main = document.createElement('main')
button.append('remove')
body.append(button)
body.append(main)

const image =document.createElement('img')

image.src='https://bit.ly/37LUTvH'

main.append(image)

const link =document.createElement('a')
link.href='www.cars.com'
link.append('new cars')
main.append(link)


button.addEventListener("click" ,function(){
    main.remove('')
})
const showbutton =document.createElement('button')
showbutton.className='show'
showbutton.append('show')
body.append(showbutton)

showbutton.addEventListener("click" ,function(){
    body.append(main)
})



