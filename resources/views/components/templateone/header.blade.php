
<!doctype html>
<html lang="{{ $settings->default_language }}">

<head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name ="description" content="{{ $settings->meta_description }}" />
      <meta name="keywords" content="{{ $settings->meta_keywords }}" />
      <meta name="author" content="{{ config('app.name') }}" />

      <link rel="stylesheet" href="{{ asset('styles/aos.css')}}" />
      <link rel="stylesheet" href="{{ asset('styles/odometer-theme-default.css')}}" />
      <link rel="stylesheet" href="{{ asset('styles/swiper-bundle.min.css')}}" />
      <link rel="stylesheet" href="{{ asset('styles/styles.css')}}" />
      <link rel="shortcut icon" href="{{ $settings->favicon ? asset($settings->favicon) : asset('assets/favicon.png') }}" type="image/x-icon" />
      <title>{{ config('app.name') }} - {{ $settings->slogan }} </title>
      <link href="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.css" rel="stylesheet" />

      
   </head>


   <body class="z-[100] bg-white">
  
      <!-- Navbar started -->

      
    <!-- Small Modal -->
<div id="small-modal" 
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-blue-400 border border-2 border-default rounded-md shadow-sm p-4 md:p-6">
            <!-- Modal header -->
            <div class="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                <h3 class="text-lg font-medium text-heading">
                    Terms of Service
                </h3>
                <button type="button" class="text-red-500 bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="small-modal">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="space-y-4 md:space-y-6 py-4 md:py-6">
                <p class="leading-relaxed text-white">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="leading-relaxed text-white">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <!-- Modal footer -->
            
                <button data-modal-hide="small-modal" type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Close</button>
            </div>
        </div>
    </div>
</div>

<script>
function welcomeMessage() {
    // Show the modal
    const modal = document.getElementById("small-modal");
    modal.classList.remove("hidden");

    // Optional: prevent scrolling when modal is open
    document.body.classList.add("overflow-hidden", "fixed", "top-0", "left-0", "right-0", "z-50", "w-full", "p-4", "overflow-x-hidden", "overflow-y-auto", "md:inset-0", "h-[calc(100%-1rem)]", "max-h-full");
}
</script>

      <header
         class="sticky left-0 top-0 z-50 flex h-nav-2 items-center bg-white shadow-sm"
      >
         <nav class="container flex items-center justify-between px-3 2xl:px-0">
            <div>
               <a href="/" >
                  <img
                     src="{{ $settings->logo ? asset($settings->logo) : asset('assets/logo.png') }}"
                     alt="Logo"
                     width="{{ $settings->logo_width ?? '150' }}"
                     height="{{ $settings->logo_height ?? '50' }}"
                     class="shrink-0"
                  />
               </a>
            </div>

            <div class="flex items-center gap-x-6 text-nature-500">
               <menu
                  class="mr-2.5 hidden items-center gap-x-3 text-sm font-semibold hover:*:text-primary hover:*:duration-300 md:flex lg:gap-x-5 lg:text-[17px] xl:space-x-6"
               >
                  <li
                     role="button"
                     id="homesDropdownButton"
                     data-dropdown-toggle="homes-dropdown-hover"
                     data-dropdown-trigger="hover"
                  >
                     <a class="group relative" role="button" href="/"
                        > Home
                       
                        <div
                           aria-hidden="true"
                           class="absolute top-6 h-[2px] w-0 bg-gradient-to-r from-primary to-primary-400 transition-all duration-500 group-hover:w-[40px]"
                        ></div>
                     </a>
                  </li>

                   <li>
                     <a class="group relative cursor-pointer" type="button"
                  data-drawer-target="drawer-right-example"
                  data-drawer-show="drawer-right-example"
                  data-drawer-placement="right"
                  aria-controls="drawer-right-example"
                        >   
               About us
               
                        <div
                           aria-hidden="true"
                           class="absolute top-6 h-[2px] w-0 bg-gradient-to-r from-primary to-primary-400 transition-all duration-500 group-hover:w-[40px]"
                        ></div
                     ></a>
                  </li>

                  <div
                     id="homes-dropdown-hover"
                     class="z-10 hidden w-60 rounded-xl bg-white shadow"
                  >
                     
                  </div>
                  <li
                     role="button"
                     id="propertiesDropdownButton"
                     data-dropdown-toggle="properties-dropdown-hover"
                     data-dropdown-trigger="hover"
                  >
                     <a class="group relative" href="/property"
                        >Properties
                        
                        <div
                           aria-hidden="true"
                           class="absolute top-6 h-[2px] w-0 bg-gradient-to-r from-primary to-primary-400 transition-all duration-500 group-hover:w-[40px]"
                        ></div>
                     </a>
                  </li>

            

                  <li>
                     <a class="group relative" href="/blogs"
                        >Blogs
                        <div
                           aria-hidden="true"
                           class="absolute top-6 h-[2px] w-0 bg-gradient-to-r from-primary to-primary-400 transition-all duration-500 group-hover:w-[40px]"
                        ></div
                     ></a>
                  </li>


                   <li>
                     <a class="group relative" href="/faqs"
                        >FAQs
                        <div
                           aria-hidden="true"
                           class="absolute top-6 h-[2px] w-0 bg-gradient-to-r from-primary to-primary-400 transition-all duration-500 group-hover:w-[40px]"
                        ></div
                     ></a>
                  </li>

                  <li>
                     <a class="group relative" href="/contact"
                        >Contacts
                        <div
                           aria-hidden="true"
                           class="absolute top-6 h-[2px] w-0 bg-gradient-to-r from-primary to-primary-400 transition-all duration-500 group-hover:w-[40px]"
                        ></div
                     ></a>
                  </li>

                  <li>
                     <a class="group relative" href="/login"
                        ><i class = "fa fa-user fa-lg"></i>
                       </a>
                  </li>
               </menu>
               <button
                  data-modal-target="search-modal"
                  data-modal-toggle="search-modal"
                  type="button"
                  class="transition duration-300 hover:text-primary"
               >
                  <i
                     class="fa-solid fa-magnifying-glass text-xl text-nature-600 duration-300 hover:text-primary"
                  ></i>
               </button>
               <button
                  class="hidden size-[60px] bg-primary text-white md:block"
                  type="button"
                  data-modal-target="small-modal" data-modal-toggle="small-modal" 
                  {{-- data-drawer-target="drawer-right-example"
                  data-drawer-show="drawer-right-example"
                  data-drawer-placement="right"
                  aria-controls="drawer-right-example" --}}
               >
                  <i class="fa-solid fa-lines-leaning text-2xl"></i>
               </button>
               <button
                  class="md:hidden"
                  type="button"
                  data-drawer-target="responsive-menu"
                  data-drawer-show="responsive-menu"
                  aria-controls="responsive-menu"
               >
                  <svg
                     class="size-6"
                     stroke="currentColor"
                     fill="currentColor"
                     stroke-width="0"
                     viewBox="0 0 24 24"
                     height="200px"
                     width="200px"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path fill="none" d="M0 0h24v24H0V0z"></path>
                     <path
                        d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"
                     ></path>
                  </svg>
               </button>
            </div>

             <button data-modal-target="small-modal" data-modal-toggle="small-modal" class="inline-flex text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
    Small modal
    </button>

         </nav>
      </header>
      <!-- Navbar ended -->

     