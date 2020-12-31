let bookImage = document.getElementById('readMore')
let open = false;
bookImage.addEventListener('mouseover', changeImage)

let btns = document.querySelectorAll('.call')
let phone = document.querySelectorAll('.call img')

btns.forEach(btn => {
    btn.addEventListener("mouseover", function(){
        this.children[0].src = "/images/blackPhone.png"
    })
})

btns.forEach(btn => {
    btn.addEventListener("mouseleave", function(){
        this.children[0].src = "/images/phone.png"
    })
})


function changeImage(){
    this.src = '/images/bookHover.png'
}

bookImage.addEventListener('mouseleave', changeImageBack)

function changeImageBack(){
    this.src = '/images/book.png'
}

bookImage.addEventListener('click', showStory)

function showStory(){
    if(open){
        document.querySelector('.hiddenStory').style.display = 'none'
        return open = false
    }else{
        document.querySelector('.hiddenStory').style.display = 'flex'
        return open = true;
    }
    }
    