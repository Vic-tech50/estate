<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
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

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />


         @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
        {{-- @notifyCss --}}
    </head>
    <body class="font-sans antialiased">
        
        @inertia

        @include('sweetalert::alert')

         
        @notifyJs

        
      <!-- Footer Section End -->
      <script src="js/fontawesome.min.js"></script>
      <script src="js/flowbite.min.js"></script>
      <script src="js/aos.js"></script>
      <script src="js/odometer.js"></script>
      <script src="js/swiper-bundle.min.js"></script>
      <script src="js/index.js"></script>
      <script>
         AOS.init({
            delay: 0,
            duration: 1000,
         });

         const swiper = new Swiper(".user-reviews-swiper", {
            slidesPerView: 4,
            pagination: {
               el: ".reviews-swiper-pagination",
               clickable: true,
            },
            autoplay: {
               delay: 2500,
               disableOnInteraction: false,
            },
            breakpoints: {
               0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
               },
               320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
               },
               640: {
                  slidesPerView: 2,
                  spaceBetween: 15,
               },
               768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
               },
               1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
               },
            },
         });
      </script>

    </body>
</html>
