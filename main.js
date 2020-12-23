let bookImage = document.getElementById('readMore')
let open = false;
bookImage.addEventListener('mouseover', changeImage)

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
    