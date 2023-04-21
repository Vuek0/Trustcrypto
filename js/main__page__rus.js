var langChanger__container = document.querySelector(".language__changer")
var rus__lang = document.querySelector(".lang__rus")
var arrow = document.querySelector(".language__arrow")
var langChanger__index = 0


    function show__eng() {
        if(langChanger__index == 0){
            var eng__tag = document.createElement("a")
            var eng__icon = document.createElement("img")
            eng__icon.setAttribute('src', 'media/Language__english.png')
            eng__icon.className  = "language__country__eng"
            eng__tag.setAttribute('href', 'main__page__eng.html')
            eng__tag.className = "lang__eng__link"
            var eng__text = document.createTextNode("ENG")
            eng__tag.appendChild(eng__icon)
            eng__tag.appendChild(eng__text)
            langChanger__container.appendChild(eng__tag)
            langChanger__index++
            arrow.style.transform = "rotate(180deg)"
        }

        else if(langChanger__index !== 0){
            var eng = document.querySelector(".lang__eng__link")
            eng.remove()
            arrow.style.transform = "rotate(360deg)"
            langChanger__index--
        }
        
    }
    rus__lang.addEventListener("click", show__eng)



   
