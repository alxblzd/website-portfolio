
# Website Portfolio

This website was created for an assignements at the University of Centria
The objective is to make a website using HTML, CSS and JS 

The website is running with nodejs and express and also an engine called ejs to use html templating in order to avoid reusin same code in multiples html pages.

the npm module "nodemon" is also installed and is used to refresh automatically the server when a modification have been made on the files.

A dockerfile is inside the repo, it can be used to run easily the server using Docker


Everything is not functionnal however there is still some html css and js that have been used.

# What "are/should be" the main parts of the site
- A parts dedicated to Wiki pages about into
- A parts for making Tutorials, != Wiki pages
- a Projects sections to describe something more complex than a Tutorial
- Useful links of others website, sort of resources
- Pages about me, act as a Portfolio

## What Is available ?
- Responsive on some pages
- a Tutorial on ansible using markdown
- a Tutorial on linux disks using markdown


## What doesnt works ?
- Responsive is far from being good
- a lot of parts of my Website
- No Projects pages for the moment

The "Ansible" and "Linux" tutorials were created by me previously. Personally, I use Obsidian (https://obsidian.md/) for taking daily notes.

I wanted to see if I could access my notes from a web server. Unfortunately, by default, Obsidian doesn't offer the ability to convert notes into HTML. Therefore, I found a Python framework that can export my notes into HTML: https://obsidian-html.github.io/general-information/about-obsidianhtml.html

## How to build and run the docker image :

Clone the project:
```bash
git clone https://github.com/alxblzd/website-portfolio.git
```

Go into the cloned directory:
```bash
cd website-portfolio
```

Build the docker image using this command inside the directory:
```bash
sudo docker build . -t alxblzd/website-portfolio
```

Run the docker image and expose port 8080 locally:
```bash
sudo docker run -p 8081:3000 -d alxblzd/website-portfolio
```
