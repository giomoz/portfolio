const getProjectContent = () => {
	const url = window.location.pathname
  const filename = url.substring(url.lastIndexOf('/')+1, url.lastIndexOf('.html'))

	const projectItem = projectsData.find( item => item.ref === filename )

	const imagesUrls = projectItem.images.map((imagesUrl) => {
		return `<img class="projectImage" src="../projects/images/${imagesUrl}">`
	})
	
	document.querySelector(`body`).innerHTML = `
		<header class="mainHeader">
	    <a href="../index.html" class="logoWrapper">
				<svg width="63" height="54" viewBox="0 0 63 54" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M59.8341 25.1735C59.7898 32.3353 58.2945 36.1799 55.348 36.7074C50.9283 37.4987 50.9727 30.0908 50.9283 25.1735C50.8839 20.2563 48.5493 0.244604 56.0954 0.00523273C61.126 -0.154348 62.9652 3.33607 61.6127 10.4765C60.427 14.5323 59.8341 18.462 59.8341 22.2655C59.8341 26.069 59.8341 27.0384 59.8341 25.1735V25.1735Z" fill="white"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M24.0366 35.8514C20.6062 33.4793 19.5769 30.4379 20.9488 26.7273C23.0065 21.1612 29.5531 20.8338 32.4037 21.1612C35.2542 21.4886 44.5305 24.4068 44.7998 32.9735C45.0692 41.5401 39.0675 51.9687 25.5014 53.8044C11.9353 55.6402 1.25179 44.2069 0.132044 34.006C-0.987704 23.8051 4.91452 7.05953 21.6577 2.62658C32.8198 -0.328717 38.7967 1.14893 39.5885 7.05953C40.4038 12.2847 37.8348 15.5583 31.8814 16.8803C22.9514 18.8633 15.9035 21.8309 16.1926 29.962C16.4817 38.093 21.8711 38.6694 23.2503 38.669C24.6296 38.6686 26.0405 38.4325 25.5014 36.7025C25.0274 36.4429 24.5391 36.1592 24.0366 35.8514V35.8514Z" fill="white"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M55.2514 41.3617C58.2614 41.7175 59.7591 43.0693 59.7446 45.4171C59.7227 48.9389 56.9201 50.4756 54.5156 50.5507C52.1111 50.6259 48.938 48.9822 49.4616 45.4171C49.8106 43.0404 51.7405 41.6886 55.2514 41.3617V41.3617Z" fill="white"/>
				</svg>
	    </a>
	    <div class="menuSection">
	      <a href="../about.html" class="menuLink">About</a>
	    </div>
	  </header>

		<div class="projectContent">
			<a class="projectBackLink" href="../index.html">Back to projects</a>

			<h1 class="projectTitle">${projectItem.title}</h1>

			<p class="projectDescription">${projectItem.description || ''}</p>
			
			${imagesUrls.join('')}
		</div>
	`

	document.querySelector('body').style.backgroundColor = `
    rgb(${projectItem.color.r}, ${projectItem.color.g}, ${projectItem.color.b})
  `

  const filteredTitle = projectItem.title.replace("<br>", "")

  document.querySelector('#headTitle').innerHTML = filteredTitle
}