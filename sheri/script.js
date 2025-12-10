let main = document.querySelector('main')
let btn = document.querySelector('.btn')


// Div Design


// btn.addEventListener('click',() => {
    
//     let div = document.createElement('div')
//     let c1 = Math.random()*255
//     let c2 = Math.random()*255
//     let c3 = Math.random()*255

//     let x = Math.floor(Math.random()*100)
//     let y = Math.floor(Math.random()*100)
//     div.style.position = "absolute"
//     div.style.width = "70px"
//     div.style.height = "70px"
//     div.style.backgroundColor=`rgb(${c1},${c2},${c3})`
//     div.style.top = y + '%'
//     div.style.left = x + '%'
//     main.append(div)
    
// })


let arr = ['Hello World','This JS Project','Hello Vivek','This is learning Project','Hello JS','Sheriyans Coding School','I Have to make Python Project','This is Dummy Text']
btn.addEventListener('click',() => {
    
    let text = document.createElement('H2')
    let pos = Math.floor(Math.random()*arr.length)
    

    let x = Math.floor(Math.random()*100)
    let y = Math.floor(Math.random()*100)
    let rot = Math.floor(Math.random()*50)
    let scal = Math.floor(Math.random()*3)
    text.innerHTML = arr[pos]
    text.style.position = "absolute"
    text.style.color = "white"
    text.style.top = y + '%'
    text.style.left = x + '%'
    text.style.rotate = rot + 'deg'
    text.style.scale = scal


    main.append(text)
    
})