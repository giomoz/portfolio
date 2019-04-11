const body = document.querySelector('body')
const introSection = document.querySelector('#introSection')

const dots = projectsData.map((index) => {
	return `<div id="dot-${projectsData.indexOf(index)}" class="dot"></div>`
})

document.querySelector('.dots').innerHTML = dots.join('')

const projectIntros = projectsData.map((project, index) => {
	return `
		<div class="projectIntro">
			<div class="projectIntroLink" id="projectIntroLink-${index}"></div>
				<a class="projectIntroLinkWrapper" href="projects/${project.ref}.html">

				<span class="projectIntroImageWrapper">
          <img src="projects/images/${project.introImage}" class="projectIntroImage" />
				</span>
        
				<h2 class="projectIntroTitle">
	  			${project.title}
        </h2>
			</a>
    </div>
	`
})

introSection.innerHTML = projectIntros.join('') + `<div class="projectSpacer"></div>`

const spacerWidth = document.querySelector('.projectSpacer').clientWidth
const totalWidth = introSection.scrollWidth - spacerWidth
//const windowWidth = window.innerWidth
const windowWidth = totalWidth / projectsData.length

document.documentElement.style.setProperty('--r', projectsData[0].color.r)
document.documentElement.style.setProperty('--g', projectsData[0].color.g)
document.documentElement.style.setProperty('--b', projectsData[0].color.b)

const introScrollLeft = () => introSection.scrollLeft
const getScrollPosition = () => introScrollLeft() / windowWidth + 1
const getScreenInnerScroll = () => Math.floor(introScrollLeft() / (totalWidth/projectsData.length))

const screenNumber = (addition) => {
  if (addition) {
    return getScreenInnerScroll() + addition
  }
  return getScreenInnerScroll()
}
const screenNextNumber = () => {
  if (projectsData.length - 1 === getScreenInnerScroll()) {
    return getScreenInnerScroll()
  }
  return getScreenInnerScroll() + 1
}

const setBgColor = () => {
  let ratioPosition = getScrollPosition() - screenNumber(1)
 
  let getR = () => {
    let initialR = projectsData[screenNumber()].color.r
    let finalR = projectsData[screenNextNumber()].color.r

    return Math.floor(initialR - (initialR - finalR) * ratioPosition)
  }
  let getG = () => {
    let initialG = projectsData[screenNumber()].color.g
    let finalG = projectsData[screenNextNumber()].color.g

    return Math.floor(initialG - (initialG - finalG) * ratioPosition)
  }
  let getB = () => {
    let initialB = projectsData[screenNumber()].color.b
    let finalB = projectsData[screenNextNumber()].color.b

    return Math.floor(initialB - (initialB - finalB) * ratioPosition)
  }

  document.documentElement.style.setProperty('--r', getR())
  document.documentElement.style.setProperty('--g', getG())
  document.documentElement.style.setProperty('--b', getB())
}

document.querySelector(`#dot-0`).classList.add('active')
document.querySelector(`#projectIntroLink-1`).classList.add('enabled')

introSection.addEventListener('scroll', () => {
  document.querySelector(`#dot-${screenNumber()}`).classList.add('active')
  
  if(screenNumber() > 0) {
    document.querySelector(`#dot-${screenNumber() - 1}`).classList.remove('active')
  }
  if(screenNumber() < projectsData.length - 1) {
    document.querySelector(`#dot-${screenNumber() + 1}`).classList.remove('active')
  }

  document.querySelector(`#projectIntroLink-${screenNumber()}`).classList.remove('enabled')

  if(screenNumber() < projectsData.length - 1) {
    document.querySelector(`#projectIntroLink-${screenNumber() + 1}`).classList.add('enabled')
  }

  setBgColor()
})

const scrollToProject = () => {
  Object.values(document.querySelectorAll('.projectIntroLink')).map((linkItem, index) => {   
      
    linkItem.addEventListener('click', () => {      
      introSection.scrollTo({
        top: 0,
        left: windowWidth * index,
        behavior: 'smooth'
      })
    })

  })
}

scrollToProject()

const dotsScrollToProject = () => {
  Object.values(document.querySelectorAll('.dot')).map((linkItem, index) => {   
      
    linkItem.addEventListener('click', () => {      
      introSection.scrollTo({
        top: 0,
        left: windowWidth * index,
        behavior: 'smooth'
      })
    })
  })
}

dotsScrollToProject()