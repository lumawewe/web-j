# Deployment Plan

## Step 1: Generate Static Files

Run the following command to generate static files for the website:

```bash
yarn generate
```

This will create a `dist` directory with all the static files needed for the website.

## Step 2: Setup GitHub Actions

Create a `.github/workflows/deploy.yml` file with the following content:

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: 14

    - name: Install dependencies
      run: yarn install

    - name: Generate static files
      run: yarn generate

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

This will automatically deploy the website to GitHub Pages whenever changes are pushed to the `main` branch.

## Step 3: Setup Custom Domain

Add a `CNAME` file to the `public` directory with the following content:

```
agenciamav.com.br
```

This will ensure that the website is accessible at `www.agenciamav.com.br`.

## Step 4: Enable GitHub Pages

Go to the repository settings on GitHub and enable GitHub Pages for the `gh-pages` branch.

## Step 5: Update DNS Settings

Update the DNS settings for `www.agenciamav.com.br` to point to GitHub Pages. The exact steps for this will depend on your DNS provider.