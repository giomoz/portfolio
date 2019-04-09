# portfolio

## How to add a new project

1. Upload project images to [images folder](https://github.com/giomoz/portfolio/tree/master/projects/images).
2. Define project content in [projects-data.js](https://github.com/giomoz/portfolio/blob/master/js/projects-data.js).
Each project should have this format:
```js
{
  ref: 'example-project-title',        // set a short name, don't use spaces
  color: { r: 183, g: 48, b: 44 },     // define the color in RGB
  title: 'Example project title',      // this will be the visible title
  introImage: 'web.jpeg',              // this is the homepage image
  images: ['web.jpeg', 'mobile.jpeg'], // these are the images for the project view
  description: `Some example text.`,   // this is the description for the project view (optional)
},
```
3. Go to [projects](https://github.com/giomoz/portfolio/tree/master/projects) folder, duplicate `template.html` and rename it to the to the `ref` defined previously. 
