# Website repository

## Contributing

Pull requests are welcome.

If you want to add a post to FoxGibbon then simply add `{postName}.md` into the `/posts` directory.

Posts require a title: _string_, name: _string_, tldr: _string_, time: _string_, image: _string_, tags: _array_, date: _YYYY-MM-DD_ and layout: _layouts/post.njk_. These are set at the top of the markdown file, see existing posts for more.

If adding media please add into `/static/images/blog` and create a new folder with the same name as your .md file.

Once everything is added run Eleventy (more below on that) and your post will be converted to html.

## Installation

clone repo:

```bash
git clone https://github.com/ThomasMott/fg.git
```

cd into root folder and install dependencies:

```bash
npm install
```

## Development

This site is powered by the [Eleventy static site generator](https://www.11ty.dev/)

To start development with live reloading of both Eleventy and Sass, run:

```bash
npm run dev
```

This will:
- Start Eleventy with live reload
- Watch and compile Sass files
- Automatically rebuild when files change

## Sass Compilation

If you only need to compile or watch Sass files:

```bash
# One-time compilation
npm run scss

# Watch for changes
npm run watch:scss
```

## Gulp Css

To gulp the scss into a clean css file follow the steps below:

cd into root folder and run:

```bash
gulp
```

This will automatically watch and compile all.css and dark.css when files are saved in the /scss folder

### Gulp issues

If encountering issues:

Make sure Gulp is installed globally

`npm install gulp --global`

If using Windows you may need to make sure it can run unrestricted. Open Powershell and run:

`Set-ExecutionPolicy Unrestricted`

## Local host

To run the project locally use [liveserver plugin](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

Right click on index.html and click Open with Live Server
