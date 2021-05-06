const contact = document.getElementById('contact')
const me = document.getElementById('me')

const tile2 = document.querySelector('.tile2')
const tile2StartText = tile2.innerHTML;
tile2.style.backgroundImage= `url('../img/me.jpg.jpg')`

const back = document.getElementById('back')
const allTiles = Array.from(document.querySelectorAll('.tile'))

const projectDiv = document.querySelector('.projectsDiv')

function removeActiveClass() {
      for(let tile of allTiles) {
            tile.classList.remove('active')
            
      }
}
 
console.log(tile2.style.backgroundImage)
function prepareTile2() {

      back.style.backgroundImage =  tile2.style.backgroundImage
      tile2.style.animation = 'hiddeDescription 2s ease-in-out'
      projectDiv.style.display = "none"
      tile2.style.overflowY = 'unset'
      if(!(tile2.innerHTML === tile2StartText)) {
            back.innerHTML = tile2.innerHTML
      } else {
            const a = document.querySelector('.tile2-content')
            a.style.animation = 'none'
            back.innerHTML = tile2.innerHTML
      }
      
}




contact.addEventListener('click', () => {
      removeActiveClass()
      contact.classList.add('active')
      prepareTile2()
      tile2.style.backgroundImage = 'linear-gradient(135deg, #333, rgb(155, 145, 145))'
      tile2.style.zIndex = '-2'
      setTimeout(() => {
           
            tile2.style.animation = 'showDescription 1s ease-in-out'
            tile2.innerHTML = `
            <div class="contact-details">
                  <pre><a href="tel:511685335"><i class="fas fa-phone-alt"></i> 511-685-335</a></pre>
                  <pre><a href="mailto:jamarcin2901@wp.pl "><i class="fas fa-envelope"></i> jamarcin2901@wp.pl</a></pre>
                  <pre><a href="https://github.com/Marcin2901" target="_blank"> <i class="fab fa-github"></i> Mój github</a></pre>
            </div>
      `
            tile2.style.zIndex = '1'
}, 1000) 
})

me.addEventListener('click', () => { 
      removeActiveClass()
      me.classList.add('active')
      prepareTile2()
      tile2.style.backgroundImage = `url('../img/me.jpg.jpg')`
      tile2.style.zIndex = '-2'
      setTimeout(() => {
            tile2.style.animation = 'showDescription 1s ease-in-out'
            tile2.innerHTML = tile2StartText
            tile2.style.zIndex = '1'
}, 1000) 


})



const cv = document.getElementById('cv')

cv.addEventListener('click', () => {
     removeActiveClass()
      cv.classList.add('active')
      prepareTile2()
      tile2.style.backgroundImage = `linear-gradient(135deg, rgb(47, 47, 82), rgb(160, 160, 235))`
      tile2.style.zIndex = '-2'
      setTimeout(() => {
            tile2.style.animation = 'showDescription 1s ease-in-out'
            tile2.innerHTML = `
                        <div class='dark-text'>
                              <p>Kliknij poniższy przycisk aby przejść do  CV</p>
                               <button class="btn-primary"><a target="_blank" href="cv/CV_Marcin_Jaworski.pdf">Odtwóż</a></button>
                        </div>`

            tile2.style.zIndex = '1'
}, 1000) 
})

const projects = document.getElementById('projects') 


projects.addEventListener('click', () => {
      removeActiveClass()
      projects.classList.add('active')
      prepareTile2()
      tile2.style.backgroundImage = `url('../img/pro.jpg')`
      tile2.style.zIndex = '-2'

      setTimeout(() => {
            tile2.style.animation = 'showDescription 1s ease-in-out'
           
            projectDiv.style.display = "block"

            tile2.innerHTML = ''
            tile2.style.overflowY = 'auto'
            tile2.appendChild(projectDiv)
            


            tile2.style.zIndex = '1'
}, 1000) 
})


const time = document.querySelector('.time')
time.textContent = '00:00:00'

setInterval(() => {
      let date = new Date()
      let  hour = date.getHours()
      let minute = date.getMinutes()
      minute<10 ? minute=`0${minute}`: minute = minute
      let second = date.getSeconds()
      second<10 ? second=`0${second}` : second = second
      
      time.textContent = `${hour}:${minute}:${second}`
},1000)
