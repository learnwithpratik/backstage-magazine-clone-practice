var btn = document.querySelector('button')
var coverArea = document.querySelector('.cover')
var docMain = document.querySelector('main')
var slider = document.querySelector('.slider')
var text = document.querySelector('#first-text')

var bookCover = [
    {
        // id: 0,
        bookImg: 'https://backstagetalks.com/img/backstagetalks_cover2016_n.png',
        bookTheme: '#E20512'
    },
    {
        // id: 1,
        bookImg: 'https://backstagetalks.com/img/backstagetalks_cover2017.png',
        bookTheme: '#1939BE'
    },
    {
        // id: 2,
        bookImg: 'https://backstagetalks.com/img/backstagetalks_cover_issue_3.png',
        bookTheme: '#FFBE00'
    },
    {
        // id: 3,
        bookImg: 'https://backstagetalks.com/img/backstagetalks_cover_issue_4.png',
        bookTheme: '#FC671D'
    },
    {
        // id: 4,
        bookImg: 'https://backstagetalks.com/img/backstagetalks_cover_issue_5.png',
        bookTheme: '#00C2B6'
    }

]


var coverImg = document.createElement('img')
coverArea.appendChild(coverImg)

let currentID = 0


document.addEventListener('wheel', function (event) {
    text.style.display = 'none';

    if (event.deltaY > 0) {
        currentID++
    } else {
        currentID--
    }

    if (currentID >= bookCover.length) {
        currentID = 0
    }

    if (currentID < 0) {
        currentID = bookCover.length - 1
    }

    let currentBook = bookCover[currentID]
    coverImg.src = currentBook.bookImg
    coverImg.style.position = 'fixed'
    coverImg.style.height = "100%"
    coverArea.style.backgroundColor = currentBook.bookTheme
    docMain.style.backgroundColor = currentBook.bookTheme

})

