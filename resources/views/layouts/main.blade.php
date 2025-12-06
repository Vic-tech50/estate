<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- Dark-mode inline script as you had before --}}
    <script>
        (function() {
            const appearance = '{{ $appearance ?? "system" }}';

            if (appearance === 'system') {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDark) {
                    document.documentElement.classList.add('dark');
                }
            }
        })();
    </script>

    <style>
        html { background-color: oklch(1 0 0); }
        html.dark { background-color: oklch(0.145 0 0); }
    </style>

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    {{-- Favicon etc --}}
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    {{-- Guest / landing page CSS & assets --}}
    <link rel="stylesheet" href="/styles/aos.css" />
    <link rel="stylesheet" href="/styles/odometer-theme-default.css" />
    <link rel="stylesheet" href="/styles/swiper-bundle.min.css" />
    <link rel="stylesheet" href="/styles/styles.css" />
    <link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon" />

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>
<body class="font-sans antialiased">
  
    @inertia
    @include('sweetalert::alert')
    @notifyJs
</body>
</html>

