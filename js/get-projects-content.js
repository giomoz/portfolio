const getProjectContent = (projectRef) => {
	const projectItem = projectsData.find( item => item.ref === projectRef )

	const imagesUrls = projectItem.images.map((imagesUrl) => {
		return `<img class="projectImage" src="../images/${imagesUrl}">`
	})
	
	document.querySelector(`body`).innerHTML = `
		<div class="projectContent">
			<h1>${projectItem.title}</h1>
			
			${imagesUrls.join('')}
		</div>
	`

	document.querySelector('body').style.backgroundColor = `
    rgb(${projectItem.color.r}, ${projectItem.color.g}, ${projectItem.color.b})
  `

  document.querySelector('#headTitle').innerHTML = projectItem.title
}