function newImage(source, pos, left, bottom) {
    let img = document.createElement('img')
    img.src = source
    img.style.position = pos
    img.style.left = left
    img.style.bottom = bottom
    document.body.append(img)
}

newImage('assets/green-character.gif', 'fixed', '100px', '100px' )
newImage('assets/pine-tree.png', 'fixed', '450px', '200px')
newImage('assets/tree.png', 'fixed', '200px', '300px')
newImage('assets/pillar.png', 'fixed', '350px', '100px')
newImage('assets/crate.png', 'fixed', '150px', '200px')
newImage('assets/well.png', 'fixed', '500px', '425px')

function newItem(source, pos, left, bottom) {
    let img = document.createElement('img')
    img.src = source
    img.style.position = pos
    img.style.left = left
    img.style.bottom = bottom
    document.body.append(img)

    img.addEventListener('click', function () {
        img.remove()
    })
}


newItem('assets/sword.png', 'fixed', '500px', '405px')
newItem('assets/shield.png', 'fixed', '165px', '185px')
newItem('assets/staff.png', 'fixed', '600px', '100px')