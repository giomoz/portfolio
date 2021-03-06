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
				<svg width="46" height="40" viewBox="0 0 46 40" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M44.3216 18.6471C44.2888 23.952 43.1811 26.7999 40.9985 27.1907C37.7247 27.7768 37.7576 22.2894 37.7247 18.6471C37.6917 15.0047 35.9625 0.181188 41.5521 0.0038761C45.2785 -0.114332 46.6408 2.47117 45.639 7.76037C44.7607 10.7647 44.3216 13.6756 44.3216 16.493C44.3216 19.3104 44.3216 20.0284 44.3216 18.6471V18.6471Z" fill="white"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8049 26.5566C15.2639 24.7995 14.5014 22.5466 15.5176 19.798C17.0418 15.675 21.8912 15.4325 24.0027 15.675C26.1142 15.9175 32.9856 18.0791 33.1851 24.4248C33.3846 30.7704 28.9389 38.4953 18.8899 39.8551C8.84093 41.215 0.927253 32.7458 0.0978103 25.1896C-0.731633 17.6334 3.64038 5.22929 16.0427 1.94562C24.311 -0.243491 28.7383 0.851065 29.3248 5.22929C29.9287 9.09981 28.0257 11.5247 23.6159 12.5039C17.001 13.9728 11.7804 16.1711 11.9945 22.1941C12.2087 28.217 16.2008 28.644 17.2225 28.6437C18.2441 28.6434 19.2892 28.4685 18.8899 27.187C18.5388 26.9948 18.1771 26.7846 17.8049 26.5566V26.5566Z" fill="white"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M40.927 30.6383C43.1566 30.9019 44.2661 31.9032 44.2553 33.6423C44.2391 36.251 42.1631 37.3893 40.382 37.445C38.6008 37.5006 36.2504 36.2831 36.6382 33.6423C36.8968 31.8818 38.3264 30.8805 40.927 30.6383V30.6383Z" fill="white"/>
				</svg>
	    </a>
	    <div class="menuSection">
	      <a href="../contact.html" class="menuLink">Contact</a>
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