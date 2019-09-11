let mix = require('laravel-mix');

const tailwindcss = require('tailwindcss')


// require('laravel-mix-tailwind');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js');

mix.sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.config.js')],
    })

// mix
//     .sass('resources/sass/app.scss', 'public/assets/css')
//     .options({
//         postCss: [tailwindcss('./tailwind.js')]
//     });

// mix.postCss('resources/sass/app.scss', 'public/css', [
//     require('tailwindcss'),
// ])

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css')
//     .options({
//         postCss: [require('tailwindcss')]
//     });
