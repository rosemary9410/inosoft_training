<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyek Laravel dengan Vue.js dan Bootstrap</title>

    <!-- Include Bootstrap CSS -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <!-- Komponen ProductComponent -->
        <product-component></product-component>
    </div>

    <!-- Include Bootstrap JavaScript -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
