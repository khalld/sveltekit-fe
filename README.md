# sveltekit-fe

Simple project that show how to publish a SvelteKit project using GitHub pages.

## Manual deploy

Before must set on 'Settings' --> 'Pages' and select Source Branch 'gh-pages' '/root' and execute

```bash
npm run gh-pages
```

In this way is possible make an edit witouth make a commit.

## GitHub Actions

On Settings repository, page must select as source branch 'main'. Each commit will deploy a new instance of the app.

From official documentation guideline, is necessary disable Jekyll build process by creating an empty file named .nojekyll at the root of the project.
