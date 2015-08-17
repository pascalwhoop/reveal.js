Reveal.initialize({

    width: 1920,
    height: 1080,
    margin: 0.2,

    controls: true,
    progress: true,
    // Push each slide change to the browser history
    history: true,
    center: true,
    // Number of milliseconds between automatically proceeding to the
    // next slide, disabled when set to 0, this value can be overwritten
    // by using a data-autoslide attribute on your slides
    autoSlide: 0,

    transition: Reveal.getQueryHash().transition || 'linear', // default/cube/page/concave/zoom/linear/fade/none

    // Optional libraries used to extend on reveal.js
    dependencies: [
        { src: 'lib/js/classList.js', condition: function () {
            return !document.body.classList;
        } },
        { src: 'plugin/markdown/marked.js', condition: function () {
            return !!document.querySelector('[data-markdown]');
        } },
        { src: 'plugin/markdown/markdown.js', condition: function () {
            return !!document.querySelector('[data-markdown]');
        } },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function () {
            hljs.initHighlightingOnLoad();
        } },
        { src: 'plugin/zoom-js/zoom.js', async: true, condition: function () {
            return !!document.body.classList;
        } },
        { src: 'plugin/notes/notes.js', async: true, condition: function () {
            return !!document.body.classList;
        } }/*,
         { src: 'plugin/remotes/remotes.js', async: true, condition: function () {
         return !!document.body.classList;
         } }*//*,
         { src: 'plugin/math/math.js', async: true, condition: function () {
         return !!document.body.classList;
         } }*/

    ]
});