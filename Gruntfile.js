module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      fonts: {
        files: [{
          cwd: "src",
          src: "**/*",
          dest: "dist",
          expand: true
        }]
      },
      images: {
        files: [{
          cwd: "src/images",
          src: "**/*",
          dest: "dist/images",
          expand: true
        }]
      }
    },
    cssmin: {
      dist: {
        src: ["src/css/reset.css", "src/css/main.css"],
        dest: "dist/css/style.css"
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true
        },
        files: {
          "dist/index.html": "src/index.html"
        }
      }
    },
    clean: ["dist"]
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');


  grunt.registerTask("default", ["clean", "copy", "cssmin", "htmlmin"]);

};