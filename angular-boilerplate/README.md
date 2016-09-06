# Angular-boilerplate

Angular 1 (latest version) in component way with best practices.

- ES6 + ES7 with Babel stage-0 : no limit (async/await, destructuring, class property, generator, ...).
- EsLint with AirBnB JavaScript standard, for better code in team.
- Best practices (controllerAs, component, injection, factory only, ...).
- Minified build with WebPack for production.
- Hot-Reload, nice server with WebPack for development.
- Architecture make for rapid and fire project.
- You can use Stylus or CSS, as you want.
- Autoprefixer, you don't need CSS vendor like -webkit.

If you understand it, you can easily move to Angular 2.

# Start dev server :

```sh
npm run dev
```

# Start build process for production :

```sh
npm run build
```

# Installation

```sh
git clone https://github.com/kMeillet/angular-boilerplate
cd angular-boilerplate/
npm i
```

Now, copy configuration :

```sh
cp src/constant/config.example.js src/constant/config.js
```

Make your own "config.js" file and edit some constant.

You can add constant and use them with "configService" in your app.

# Resolving

Angular isn't god, and can't resolve component, service, directive, ... alone.

You will find 3 resolving files on "src" directory :

- app.component.js
- app.services.js
- app.main.js

The first file import all components and register them into "app.components" Angular module.

The second file import all services and register them into "app.services" Angular module.

The third file import the first and second file, and register all dependency (router, ...) into "app" module.

And then, you will find "app.js", who import "app" module and bootstrap it in document.

You can make your own resolving files (for filters or directives).
