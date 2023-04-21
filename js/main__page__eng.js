var langChanger__container = document.querySelector(".language__changer")
var eng__lang = document.querySelector(".lang__eng")
var arrow = document.querySelector(".language__arrow")
var langChanger__index = 0
function show__rus() {
    if(langChanger__index == 0){
        var rus__tag = document.createElement("a")
        var rus__icon = document.createElement("img")
        rus__icon.setAttribute('src', 'media/Language__russian.png')
        rus__icon.className  = "language__country__rus"
        rus__tag.setAttribute('href', 'main__page__rus.html')
        rus__tag.className = "lang__rus__link"
        var rus__text = document.createTextNode("RUS")
        rus__tag.appendChild(rus__icon)
        rus__tag.appendChild(rus__text)
        langChanger__container.appendChild(rus__tag)
        langChanger__index++
        arrow.style.transform = "rotate(180deg)"
        
    }

    else if(langChanger__index !== 0){
        
        var rus = document.querySelector(".lang__rus__link")
        rus.remove()
        arrow.style.transform = "rotate(360deg)"
        langChanger__index--
    }
    
}


eng__lang.addEventListener("click", show__rus)