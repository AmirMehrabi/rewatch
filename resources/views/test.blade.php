<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>ProgressBar.js - Minimal Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <style>
            .progress {
                height: 300px;
            }
            .progress > svg {
                height: 100%;
                display: block;
            }
        </style>
    </head>
    <body>
        <div class="progress" id="progress"></div>

        <!-- These are probably out dated so you might want to use newest versions -->
        <script src="https://cdn.rawgit.com/kimmobrunfeldt/progressbar.js/0.5.6/dist/progressbar.js"></script>

        <script>
        window.onload = function onLoad() {
    var circle = new ProgressBar.Circle('#progress', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut'
    });

    circle.animate(1);
};
        </script>
    </body>
</html>