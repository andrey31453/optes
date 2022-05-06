// html
const html_src = [
  // header
  'app/__template/header.html',

  // body
  'app/header/*.html',
  'app/gallery/*.html',
  'app/preview/*.html',
  'app/brands/*.html',
  'app/advantages/*.html',
  'app/description/*.html',
  'app/footer/*.html',

  // footer
  'app/__template/footer.html',
]

// sass
const sass_src = [
  'app/__template/_preset.sass',
  'app/**/_preset.sass',
  'app/__template/*.sass',
  'app/**/*.sass',
]

// js
const js_src = ['app/**/*.js']

//images
const images_src = [
  'app/**/*.jpg',
  'app/**/*.svg',
  'app/**/*.png',
  'app/**/*.webp',
  'app/**/*.ico',
]

// json
const json_src = ['app/**/*.json']

// files
const files_src = ['app/**/*.doc']
const fonts_src = [
  'app/__template/fonts/**/*.eot',
  'app/__template/fonts/**/*.woff',
  'app/__template/fonts/**/*.ttf',
]

//
// подключение модулей
//
const { src, dest, series, watch } = require('gulp') // галп
const sass = require('gulp-sass')(require('sass'))
const auto_prefixer = require('gulp-autoprefixer')
const concat = require('gulp-concat')
const del = require('del')

//
// основное тело галпа
//

// del src
const del_src = () => {
  return del('dist/')
}

// html build
const build_html = () => {
  return src(html_src).pipe(concat('index.html')).pipe(dest('dist/'))
}

// css build
const build_css = () => {
  return src(sass_src)
    .pipe(concat('style.sass'))
    .pipe(
      sass({
        indentedSyntax: false,
      })
    )
    .pipe(
      auto_prefixer({
        overrideBrowserslist: 'last 2 versions',
      })
    )
    .pipe(concat('style.css'))
    .pipe(dest('dist/'))
}

// js build
const build_js = () => {
  return src(js_src).pipe(concat('script.js')).pipe(dest('dist/'))
}

// export
const export_images = () => {
  return src(images_src).pipe(dest('dist/images/'))
}

const export_json = () => {
  return src(json_src).pipe(dest('dist/json/'))
}

const export_files = () => {
  return src(files_src).pipe(dest('dist/files/'))
}

const export_fonts = () => {
  return src(fonts_src).pipe(dest('dist/fonts/'))
}

//
// to watch
//
const to_watch = () => {
  watch(html_src, series(build_html))
  watch(sass_src, series(build_css))
  watch(js_src, series(build_js))

  watch(images_src, series(export_images))
  watch(json_src, series(export_json))
  watch(files_src, series(export_files))
}

//
// объявление функции для консоли
//
exports.default = series(
  //del
  del_src,

  // build
  build_html,
  build_css,
  build_js,

  // export
  export_images,
  export_json,
  export_files,
  export_fonts,

  // watch
  to_watch
)
