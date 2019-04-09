const getProjectContent = () => {
	const url = window.location.pathname
  const filename = url.substring(url.lastIndexOf('/')+1, url.lastIndexOf('.html'))

	const projectItem = projectsData.find( item => item.ref === filename )

	const imagesUrls = projectItem.images.map((imagesUrl) => {
		return `<img class="projectImage" src="../projects/images/${imagesUrl}">`
	})
	
	document.querySelector(`body`).innerHTML = `
		<div class="projectContent">
			<h1 class="projectTitle">${projectItem.title}</h1>

			<p class="projectDescription">${projectItem.description || ''}</p>
			
			${imagesUrls.join('')}
		</div>
	`

	document.querySelector('body').style.backgroundColor = `
    rgb(${projectItem.color.r}, ${projectItem.color.g}, ${projectItem.color.b})
  `

  document.querySelector('#headTitle').innerHTML = projectItem.title
}