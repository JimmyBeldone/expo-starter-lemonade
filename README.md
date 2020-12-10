<h1 align="center" style="border-bottom: none;">Expo Starter Lemonade</h1>
<!-- <h3 align="center">A Gatsby starter with i18n, SEO ready, GDPR consent</h3> -->
<p align="center">
    <a href="https://github.com/JimmyBeldone/expo-starter-lemonade">
        <img alt="github action test" src="https://github.com/JimmyBeldone/expo-starter-lemonade/workflows/TESTING/badge.svg">
    </a>
    <a href="https://github.com/JimmyBeldone/expo-starter-lemonade">
        <img alt="github action publish" src="https://github.com/JimmyBeldone/expo-starter-lemonade/workflows/PUBLISH/badge.svg">
    </a>
    <a href="#badge">
        <img alt="release number" src="https://badgen.net/github/release/JimmyBeldone/expo-starter-lemonade/stable">
    </a>
     <a href="#badge">
        <img alt="dependencies status" src="https://badgen.net/david/dep/JimmyBeldone/expo-starter-lemonade">
    </a>
    <a href="#badge">
        <img alt="dev dependencies status" src="https://badgen.net/david/dev/JimmyBeldone/expo-starter-lemonade">
    </a>
</p>
<p align="center">
    <a href="http://commitizen.github.io/cz-cli/">
        <img alt="commitizen" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
    </a>
    <a href="https://github.com/semantic-release/semantic-release">
        <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
    </a>
    <a href="https://github.com/prettier/prettier">
        <img alt="prettier" src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg">
    </a>
    <a href="https://github.com/JimmyBeldone/expo-starter-lemonade/blob/master/LICENSE">
        <img alt="license" src="https://badgen.net/github/license/JimmyBeldone/expo-starter-lemonade">
    </a>
</p>

## What's in it ?

-   [Expo](https://expo.io/) framework

-   Setup script to make your life easier

-   [Semantic Release](https://semantic-release.gitbook.io/semantic-release/) for fully automated version management and package publishing

-   Auto generetaed CHANGELOG.md relying on [Conventionnal Commits](https://www.conventionalcommits.org/en/v1.0.0/)

-   Strong lint config with Eslint configured extended with Airbnb style guide & Prettier

-   Pre-commit hook that automatically lint & format code

---

## Installation

1. Clone this repo `git clone https://github.com/JimmyBeldone/expo-starter-lemonade.git`

2. Run `yarn setup` (install dependencies & remove .git folder) and follow the instructions

---

## Configure Semantic release

If it isn't done already, init your git repo :

```bash
git init
git remote add origin git@github.com:username/repository.git
git add .
git commit -m "first commit"
git push -u origin master
```

<!-- 1. Run semantic-release-cli : `npx semantic-release-cli setup`.

![semantic-release-cli](https://github.com/semantic-release/semantic-release/raw/master/media/semantic-release-cli.png) -->

1. Go to [https://github.com/settings/tokens](https://github.com/settings/tokens) and generate a personnal access token so that semantic-release is allowed to access your repo.

2. Create a new repository secret named `GH_TOKEN` and past your personnal access token.

3. Your repository url must be set in `package.json`:

```json
"repository": {
    "type": "git",
    "url": "https://github.com/JimmyBeldone/expo-starter-lemonade"
},
```

4. Next time you push on `master` branch, a release will be added if your [conventionnal commit type](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type) is correct.

---

## License

MIT

Copyright (c) 2020 Jimmy Beldone
