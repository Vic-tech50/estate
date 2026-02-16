
      <!-- Footer Section Start -->
      <footer class="section-padding-t">

    
         <div
            class="container mb-6 grid w-full grid-cols-1 sm:text-center  gap-3 px-3 md:mb-10 md:grid-cols-3 lg:mb-14 2xl:px-0"
         >


            <div data-aos="fade-up" class="">
               {{-- <a href="/" class="flex items-center gap-x-3">
                  <img
                      src="{{ $settings->logo ? asset($settings->logo) : asset('assets/logo.png') }}"
                     alt="Logo"
                     width="{{ $settings->logo_width ?? '150px' }}"
                     height="{{ $settings->logo_height ?? '150px' }}"
                     class="size-fit"
                  />
               </a> --}}

               <div class="mt-10">
                  <h5 class="mb-5 text-lg font-bold text-nature-600 md:text-xl">
                     Address
                  </h5>
                  <address
                     class="font-poppins text-sm text-nature-400 md:text-base" style = "text-transform: capitalize"
                  >
                   {!! $settings->address  !!}, {!! $settings->city  !!} <br>  {!! $settings->state  !!}, {!! $settings->country  !!}
                     <span class="my-2 block"> {!! $settings->contact_phone  !!}</span>
                     {!! $settings->contact_email  !!}
                  </address>
               </div>
            </div>
            <div
               data-aos="fade-up"
               data-aos-delay="150"
               class=""
            >
               <h5
                  class="mb-2.5 text-lg font-bold text-nature-600 md:mb-3.5 md:text-xl lg:mb-5"
               >
                  About Us
               </h5>
               <ul
                  class="grid gap-2 font-poppins text-sm text-nature-400 md:gap-3 md:text-base lg:gap-4"
               >
                  <li class="transition-all hover:text-nature-500">
                     <a href="#">Press</a>
                  </li>
                  <li class="transition-all hover:text-nature-500">
                     <a href="/disclaimer">Disclaimer</a>
                  </li>
                  <li class="transition-all hover:text-nature-500">
                     <a href="/terms">Terms</a>
                  </li>
                  <li class="transition-all hover:text-nature-500">
                     <a href="/privacy">Privacy Policy</a>
                  </li>
                
               </ul>
            </div>
            <div
               data-aos="fade-up"
               data-aos-delay="300"
               class=""
            >
               <h5
                  class="mb-2.5 text-lg font-bold text-nature-600 md:mb-3.5 md:text-xl lg:mb-5"
               >
                 Newsletter
               </h5>

               <form data-aos="fade-right" class="max-w-[366px]" action="/subscribe" method="post">
                  @csrf
                     <div class="flex items-center gap-0">
                        <input
                           type="email"
                           placeholder="Your email address"
                           name="email"
                           required
                           class="rounded-l-md rounded-r-none px-[20px] py-[17px] text-nature-600 placeholder:font-poppins placeholder:text-sm placeholder:text-nature-200"
                        />
                        <button
                           type="submit"
                           class="rounded-l-none rounded-r-md bg-primary px-[23px] py-[17px]"
                        >
                           <i
                              class="fa-solid fa-magnifying-glass text-[22px]"
                           ></i>
                        </button>
                     </div>
                  </form>

              
            </div>
            
         </div>
         <div class="container max-w-[1230px]">
            <hr />
         </div>
         <div
            class="container mb-3.5 mt-5 flex max-w-[1230px] flex-col items-center justify-center gap-y-3.5 px-3 md:mb-6 md:mt-10 md:flex-row md:justify-between lg:mb-9 lg:mt-[54px] 2xl:px-0"
         >
            <p class="text-sm leading-[14px] text-nature-400">
               &copy; <script>document.write(new Date().getFullYear())</script> {{ $settings->sitename }}. All Rights Reserved.
            </p>
            <p
               class="pt-3.5 text-center text-sm leading-[14px] text-nature-400 sm:hidden"
            >
               Get The App
            </p>
            <div class="flex items-center gap-x-2 md:gap-x-3">
               <p
                  class="hidden text-sm leading-[14px] text-nature-400 sm:inline-block"
               >
                  Get The App
               </p>
               <a href="#">
                  <img
                     src="assets/images/image-56.png"
                     alt="Homelist_footer"
                     class="max-h-[38px] max-w-[135px] object-cover object-center"
                  />
               </a>
               <a href="#">
                  <img
                     src="assets/images/image-7.png"
                     alt="Homelist_footer"
                     class="max-h-[38px] max-w-[135px] object-cover object-center"
                  />
               </a>
            </div>
            <div class="flex items-center gap-x-4 md:gap-x-7 lg:gap-x-10">
               <p class="text-sm leading-[14px] text-nature-400">Follow Us</p>
               <ul class="flex items-center gap-x-4 md:gap-x-7 lg:gap-x-10">
                  <li>
                     <a href="{{ $settings->facebook }}"  target = "_blank"
                        ><i
                           class="fa-brands fa-facebook-f text-sm text-nature-200 transition-all hover:text-[#1877f2] md:text-base lg:text-lg"
                        ></i
                     ></a>
                  </li>
                  <li>
                     <a href="{{ $settings->twitter }}" target = "_blank"
                        ><i
                           class="fa-brands fa-x-twitter text-sm text-nature-200 transition-all hover:text-[#000] md:text-base lg:text-lg"
                        ></i
                     ></a>
                  </li>
                  <li>
                     <a href="{{ $settings->instagram }}" target = "_blank"
                        ><i
                           class="fa-brands fa-instagram text-sm text-nature-200 transition-all hover:text-[#c32aa3] md:text-base lg:text-lg"
                        ></i
                     ></a>
                  </li>
                  <li>
                     <a href="{{ $settings->linkedin }}" target = "_blank"
                        ><i
                           class="fa-brands fa-linkedin-in text-sm text-nature-200 transition-all hover:text-[#0a66c2] md:text-base lg:text-lg"
                        ></i
                     ></a>
                  </li>

                      <li>
                     <a href="{{ $settings->youtube }}" target = "_blank"
                        ><i
                           class="fa-brands fa-youtube text-sm text-nature-200 transition-all hover:text-[#0a66c2] md:text-base lg:text-lg"
                        ></i
                     ></a>
                  </li>
               </ul>
            </div>
         </div>
      </footer>

      <!-- NOTE: splitted content -->

      <!-- drawer component -->
      <div
         id="drawer-right-example"
         class="fixed right-0 top-0 z-[60] h-screen w-96 translate-x-full overflow-y-auto border-l bg-white p-10 transition-transform"
         tabindex="-1"
         aria-labelledby="drawer-right-label"
      >
         <a href="index.html">
            <img src="assets/images/logo.png" alt="Homelist" />
         </a>
         <button
            type="button"
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            class="group absolute right-10 top-10 inline-flex size-[38px] items-center justify-center rounded-full bg-rose-100 text-sm text-rose-600"
         >
            <svg
               class="size-3.5 transition-transform duration-500 ease-in-out group-hover:rotate-180"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 14 14"
            >
               <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
               />
            </svg>
            <span class="sr-only">Close menu</span>
         </button>

         <div class="mt-8">
            <article
               class="prose prose-ul:m-0 prose-ul:list-none prose-ul:space-y-2.5 prose-ul:pl-0 prose-li:pl-0"
            >
               <h3>About Us</h3>
               <p>
                  {!! $settings->about_us  !!}
               </p>
               <h3>Contact Info</h3>
               <div>
                  <ul>
                     <li>
                        <h4 class="m-0 font-semibold">Email</h4>
                        <div class="flex items-center gap-x-1.5">
                           <span
                              class="inline-flex size-8 items-center justify-center rounded-md bg-primary-50 text-primary"
                           >
                              <i class="fa-solid fa-envelope text-primary"></i>
                           </span>
                           <span class="text-base leading-none text-slate-500"
                              >support@homelist.com</span
                           >
                        </div>
                     </li>
                     <li>
                        <h4 class="m-0 font-semibold">Phone</h4>
                        <div class="flex items-center gap-x-1.5">
                           <span
                              class="inline-flex size-8 items-center justify-center rounded-md bg-primary-50 text-primary"
                           >
                              <i class="fa-solid fa-phone text-primary"></i>
                           </span>
                           <span class="text-base text-slate-500"
                              >{!! $settings->contact_phone  !!}</span
                           >
                        </div>
                     </li>
                     <li>
                        <h4 class="m-0 font-semibold">Address</h4>
                        <div class="flex items-center gap-x-1.5">
                           <span
                              class="inline-flex size-8 items-center justify-center rounded-md bg-primary-50 text-primary"
                           >
                              <i
                                 class="fa-solid fa-map-marker-alt text-primary"
                              ></i>
                           </span>
                           <span class="text-base text-slate-500"
                              > {!! $settings->address  !!}, {!! $settings->city  !!} <br>  {!! $settings->state  !!}, {!! $settings->country  !!}</span
                           >
                        </div>
                     </li>
                  </ul>
               </div>

               <div class="mt-8">
                  <h3>Follow Us</h3>
                  <menu class="flex items-center gap-x-2.5">
                     <li>
                        <a
                           href="{{ $settings->facebook }}"
                           class="group flex size-10 items-center justify-center rounded-full bg-primary-50"
                        >
                           <i
                              class="fa-brands fa-facebook text-lg text-primary transition-transform duration-700 group-hover:rotate-[360deg] group-hover:scale-125"
                           ></i>
                        </a>
                     </li>
                     <li>
                        <a
                           href="{{ $settings->twitter }}"
                           class="group flex size-10 items-center justify-center rounded-full bg-primary-50"
                        >
                           <i
                              class="fa-brands fa-twitter text-lg text-primary transition-transform duration-700 group-hover:rotate-[360deg] group-hover:scale-125"
                           ></i>
                        </a>
                     </li>
                     <li>
                        <a
                           href="{{ $settings->instagram }}"
                           class="group flex size-10 items-center justify-center rounded-full bg-primary-50"
                        >
                           <i
                              class="fa-brands fa-instagram text-lg text-primary transition-transform duration-700 group-hover:rotate-[360deg] group-hover:scale-125"
                           ></i>
                        </a>
                     </li>
                     <li>
                        <a
                           href="{{ $settings->linkedin }}"
                           class="group flex size-10 items-center justify-center rounded-full bg-primary-50"
                        >
                           <i
                              class="fa-brands fa-linkedin text-lg text-primary transition-transform duration-700 group-hover:rotate-[360deg] group-hover:scale-125"
                           ></i>
                        </a>
                     </li>
                  </menu>
               </div>
            </article>
         </div>
      </div>

      <!-- search modal -->
      <div
         id="search-modal"
         data-modal-backdrop="static"
         tabindex="-1"
         aria-hidden="true"
         class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
      >
         <div
            class="flex max-h-full w-full max-w-screen-md flex-col items-center justify-center p-4"
         >
            <button
               data-modal-hide="search-modal"
               class="group flex size-8 items-center justify-center rounded-full bg-rose-100 text-xl text-rose-600"
            >
               <i
                  class="fa-solid fa-times transition-transform duration-500 group-hover:rotate-180"
               ></i>
            </button>

            <form class="mx-auto mt-16 w-full">
               <label
                  for="default-search"
                  class="sr-only mb-2 text-sm font-medium text-gray-900"
                  >Search</label
               >
               <div class="relative">
                  <div
                     class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"
                  >
                     <svg
                        class="h-4 w-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                     >
                        <path
                           stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                     </svg>
                  </div>
                  <input
                     type="search"
                     id="default-search"
                     class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-primary focus:ring-primary"
                     placeholder="Search for Properties..."
                     required
                  />
                  <button
                     type="submit"
                     class="absolute bottom-2.5 end-2.5 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                     Search
                  </button>
               </div>
            </form>
         </div>
      </div>
      <!-- splitd content end -->

      <!-- responsive menu content started -->
      <div
         id="responsive-menu"
         tabindex="-1"
         aria-labelledby="responsive-menu-label"
         class="fixed left-0 top-0 z-[60] h-screen w-64 -translate-x-full overflow-y-auto border-r bg-white p-4 transition-transform"
      >
         <a href="#">
            <img src="assets/images/logo.png" />
         </a>
         <button
            type="button"
            data-drawer-hide="responsive-menu"
            aria-controls="responsive-menu"
            class="absolute end-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
         >
            <svg
               class="h-3 w-3"
               aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 14 14"
            >
               <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
               />
            </svg>
            <span class="sr-only">Close menu</span>
         </button>
         <div class="overflow-y-auto py-4">
            <ul class="space-y-2 font-medium">
               <!-- homes -->
              <li>
                  <a
                     href="/"
                     class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
                  >
                     <i
                        class="fa-solid fa-home h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                     ></i>

                     <span class="ms-3 flex-1 whitespace-nowrap"
                        >Home</span
                     >
                  </a>
               </li>

               <li>
                  <a
                    <a  type="button"
                  data-drawer-target="drawer-right-example"
                  data-drawer-show="drawer-right-example"
                  data-drawer-placement="right"
                  aria-controls="drawer-right-example"
                     class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 cursor-pointer"
                  >
                     <i
                        class="fa-solid fa-info-circle h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                     ></i>

                     <span class="ms-3 flex-1 whitespace-nowrap"
                        >About Us</span
                     >
                  </a>
               </li>

                 <li>
                  <a
                     href="/property"
                     class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
                  >
                     <i
                        class="fa-solid fa-building h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                     ></i>

                     <span class="ms-3 flex-1 whitespace-nowrap"
                        >Properties</span
                     >
                  </a>
               </li>

                 <li>
                  <a
                     href="map-view-1.html"
                     class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
                  >
                     <i
                        class="fa-solid fa-location-crosshairs h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                     ></i>

                     <span class="ms-3 flex-1 whitespace-nowrap"
                        >Agents</span
                     >
                  </a>
               </li>


                 <li>
                  <a
                     href="/blog"
                     class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
                  >
                     <i
                        class="fa-solid fa-newspaper h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                     ></i>

                     <span class="ms-3 flex-1 whitespace-nowrap"
                        >Blog</span
                     >
                  </a>
               </li>

                 <li>
                  <a
                     href="/faq"
                     class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
                  >
                     <i
                        class="fa-solid fa-question h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                     ></i>

                     <span class="ms-3 flex-1 whitespace-nowrap"
                        >FAQs</span
                     >
                  </a>
               </li>

                 <li>
                  <a
                     href="/contact"
                     class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
                  >
                     <i
                        class="fa-solid fa-paper-plane h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                     ></i>

                     <span class="ms-3 flex-1 whitespace-nowrap"
                        >Contact</span
                     >
                  </a>
               </li>

               
                 <li>
                  <a
                     href="/login"
                     class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
                  >
                     <i
                        class="fa-solid fa-right-to-bracket h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                     ></i>

                     <span class="ms-3 flex-1 whitespace-nowrap"
                        >Login</span
                     >
                  </a>
               </li>

               
                 <li>
                  <a
                     href="/register"
                     class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
                  >
                     <i
                        class="fa-solid fa-user-plus h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                     ></i>

                     <span class="ms-3 flex-1 whitespace-nowrap"
                        >Create Account</span
                     >
                  </a>
               </li>

        
            </ul>
         </div>
      </div>
      <!-- Splitted code ended -->

  

      <!-- Footer Section End -->
      <script src="{{ asset('js/fontawesome.min.js') }}"></script>
      <script src="{{ asset('js/flowbite.min.js') }}"></script>
      <script src="{{ asset('js/aos.js') }}"></script>
      <script src="{{ asset('js/odometer.js') }}"></script>
      <script src="{{ asset('js/swiper-bundle.min.js') }}"></script>
      <script src="{{ asset('js/index.js') }}"></script>
      <script src="https://cdn.jsdelivr.net/npm/flowbite@4.0.1/dist/flowbite.min.js"></script>

          @include('sweetalert::alert')
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

          // reviews
         const swiper2 = new Swiper(".h2-reviews-swiper", {
            slidesPerView: 3,
            pagination: {
               el: ".h2-reviews-swiper-pagination",
               clickable: true,
               dynamicBullets: true,
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
            },
         });

         // agent
         const agent = new Swiper(".h2-agent-swiper", {
            slidesPerView: 3,
            navigation: {
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
            },
            breakpoints: {
               0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
               },
               768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
               },
            },
         });
      </script>

    
   </body>

</html>
