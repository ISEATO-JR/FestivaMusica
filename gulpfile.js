// function tarea(done){
//     console.log("Mi tarea");

//     done();
// }

// exports.tarearun= tarea;
const {src, dest,watch} = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function css(done){
    src('src/scss/app.scss')// Identificar el file de sas
    .pipe(sass())// Compilarlo
    .pipe(dest("build/css"))//Almacenarla en el disco duro 

    done(); //Callback que avisa a gulp cuando llegamos  al final
}

function dev(done){
    watch('src/scss/app.scss',css)
    done();
}

exports.cssrun = css;
exports.devrun = dev