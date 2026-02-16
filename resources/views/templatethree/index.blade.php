<x-templateone.layout :settings="$settings">

      <!-- Landing Start -->
      <section
         class="w-full bg-primary-10 pt-10 md:pt-12 lg:pt-14 xl:pt-16 2xl:pt-20"
      >
         <div class="ml-auto flex size-fit max-w-[100rem] flex-col lg:flex-row">
            <div
               class="mt-9 w-full pl-5 md:mt-10 lg:mt-11 lg:w-1/2 xl:mt-12 xl:w-auto 2xl:pl-0"
            >
               <h1
                  data-aos="fade-right"
                  class="heading-hero text-center lg:text-start"
               >
                  {!! $settings->header !!}
               </h1>
               <p
                  data-aos="fade-right"
                  data-aos-delay="200"
                  class="mt-3 text-center font-poppins text-sm font-medium text-new-800 sm:mt-4 md:mt-5 md:text-base lg:mt-6 lg:text-start lg:text-lg xl:mt-[30px]"
               >
                  {!! $settings->header_content !!}
               </p>

               <!-- Small to SM -->
               <div class="container my-5 pr-3 sm:hidden 2xl:pr-0">
                  <form  action="/search"
                     method="GET" class="w-full">
                     <div class="space-y-2 pb-2">
                        <div class="flex">
                           <span
                              class="inline-flex items-center rounded-s-md border border-e-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400"
                           >
                              <i
                                 class="fa-solid fa-location-crosshairs text-sm"
                              ></i>
                           </span>
                           <input
                              type="text"
                              id="city"
                              name="city"
                              class="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                              placeholder="New York City, USA"
                           />
                        </div>

                        <div class="flex">
                           <span
                              class="inline-flex items-center rounded-s-md border border-e-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400"
                           >
                              <i class="fa-solid fa-house-chimney text-sm"></i>
                           </span>
                           <input
                              type="text"
                              id="type"
                              name="type"
                              class="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                              placeholder="Duplex House"
                           />
                        </div>

                        <div class="flex">
                           <span
                              class="inline-flex items-center rounded-s-md border border-e-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400"
                           >
                              <i
                                 class="fa-solid fa-sack-dollar text-sm lg:text-base"
                              ></i>
                           </span>
                           <input
                              type="text"
                              id="price"
                                 name="price"
                              class="block w-full min-w-0 flex-1 rounded-none rounded-e-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                              placeholder="4,00 - 5,00$"
                           />
                        </div>
                     </div>
                     <div class="grid w-full grid-cols-4 divide-x font-medium">
                        <button
                           type="button"
                           class="h1-search-sm active rounded-l-md py-2"
                        >
                           Sell
                        </button>
                        <button type="button" class="h1-search-sm py-2">
                           Buy
                        </button>
                        <button type="button" class="h1-search-sm py-2">
                           Rent
                        </button>
                        <button
                           type="submit"
                           class="h1-search-sm rounded-r-md bg-primary py-2 text-white"
                        >
                           <i class="fa-solid fa-magnifying-glass text-lg"></i>
                        </button>
                     </div>
                  </form>
               </div>

               <!-- Form SM to Large -->
               <form action="/search" method="GET">
               <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                  class="relative mr-5 mt-6 hidden h-[112px] sm:block md:mt-9 lg:mt-11 xl:mt-[51px] 2xl:mr-0"
               >
                  <div
                     class="my__gradient absolute left-0 top-0 flex w-full items-center justify-between rounded-md border border-[#ededed] bg-white px-4 py-4 shadow-shadow4 md:rounded-xl md:px-6 md:py-[18px] lg:w-[945px] lg:rounded-[20px] lg:px-8 lg:py-5 xl:px-10 xl:py-[25px]"
                  >
                     <div class="space-y-1 lg:space-y-[10px]">
                        <p
                           class="font-poppins text-xs font-normal text-nature-200 md:text-sm lg:text-base"
                        >
                           City/Street
                        </p>
                        <div class="flex items-center gap-x-1.5 lg:gap-x-2.5">
                           <input
                              type="text"
                              id="city"
                              name="city"
                              class="focus:placeholder:text-new-300 m-0 block size-fit w-full max-w-28 appearance-none rounded-lg border-0 bg-transparent !p-0 font-poppins text-xs text-nature-500 shadow-none placeholder:text-xs placeholder:font-medium placeholder:text-nature-500 focus:outline-none focus:ring-0 md:text-sm placeholder:md:text-sm lg:text-base placeholder:lg:text-base"
                              placeholder="New Your City"
                           />
                           <i class="fa-solid fa-sort text-[10px]"></i>
                        </div>
                     </div>

                     <div
                        class="hidden !h-[50px] !w-[1px] bg-gray-300 md:block"
                     ></div>

                     <div class="flex flex-col items-center justify-center">
                        <div class="space-y-1 lg:space-y-[10px]">
                           <p
                              class="font-poppins text-xs font-normal text-nature-200 md:text-sm lg:text-base"
                           >
                              Property Type
                           </p>
                           <div
                              class="flex items-center gap-x-1.5 lg:gap-x-2.5"
                           >
                              <input
                                 type="text"
                                 id="type"
                                 name="type"
                                 class="focus:placeholder:text-new-300 m-0 block size-fit w-full max-w-28 appearance-none rounded-lg border-0 bg-transparent !p-0 font-poppins text-xs text-nature-500 shadow-none placeholder:text-xs placeholder:font-medium placeholder:text-nature-500 focus:outline-none focus:ring-0 md:text-sm placeholder:md:text-sm lg:text-base placeholder:lg:text-base"
                                 placeholder="Duplex House"
                              />
                              <i class="fa-solid fa-sort text-[10px]"></i>
                           </div>
                        </div>
                     </div>

                     <div
                        class="hidden !h-[50px] !w-[1px] bg-gray-300 md:block"
                     ></div>
                     <div class="flex flex-col items-center justify-center">
                        <div class="space-y-1 lg:space-y-[10px]">
                           <p
                              class="font-poppins text-xs font-normal text-nature-200 md:text-sm lg:text-base"
                           >
                              Price Range
                           </p>
                           <div
                              class="flex items-center gap-x-1.5 lg:gap-x-2.5"
                           >
                              <input
                                 type="text"
                                 id="price"
                                 name="price"
                                 class="focus:placeholder:text-new-300 m-0 block size-fit w-full max-w-28 appearance-none rounded-lg border-0 bg-transparent !p-0 font-poppins text-xs text-nature-500 shadow-none placeholder:text-xs placeholder:font-medium placeholder:text-nature-500 focus:outline-none focus:ring-0 md:text-sm placeholder:md:text-sm lg:text-base placeholder:lg:text-base"
                                 placeholder="$18,000 - 30,000"
                              />
                              <i class="fa-solid fa-sort text-[10px]"></i>
                           </div>
                        </div>
                     </div>

                     <div
                        class="hidden !h-[50px] !w-[1px] bg-gray-300 md:block"
                     ></div>

                     <div class="flex items-center justify-center md:w-auto">
                        <div>
                           <button
                           type="submit"
                              class="flex size-fit items-center gap-x-4 rounded-full bg-primary px-2.5 py-2 text-xl font-normal text-white md:px-3 md:py-[10px] lg:px-[14px] lg:py-3"
                           >
                              <i
                                 class="fa-solid fa-magnifying-glass text-lg text-white lg:text-xl"
                              ></i>
                              <span class="hidden !font-normal md:block"
                                 >Search</span
                              >
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               </form>
            </div>
            <div
               data-aos="fade-down"
               class="ml-auto w-full pl-5 lg:w-1/2 xl:w-auto xl:pl-0"
            >
               <img
                  src="assets/images/image-64.png"
                  alt="Homelist3"
                  class="ml-auto md:max-w-[500px] lg:max-w-[700px] 2xl:max-w-[859px]"
               />
            </div>
         </div>
      </section>
      <!-- Landing End -->

      <!-- Category Start -->
      <section
         class="container px-3 pt-10 md:pt-16 lg:pt-24 xl:pt-[120px] 2xl:px-0"
      >
         <div
            class="flex flex-col gap-y-5 md:flex-row md:items-end md:justify-between"
         >
            <div
               data-aos="fade-right"
               class="w-full md:max-w-[75%] lg:max-w-[50%]"
            >
               <h2 class="heading-2 !text-start">Experience Luxury</h2>
               <p class="heading-tagline !mb-0 !text-start">
                  We have been operating for over a decade, providing top-notch
                  services to our clients and building a strong track record
               </p>
            </div>
            <div data-aos="fade-left">
               <a
                  href="#"
                  class="flex size-fit items-center gap-x-1.5 rounded-full border border-secondary px-6 py-3.5 text-center font-poppins text-sm text-new-900 transition-all hover:border-secondary hover:text-secondary md:gap-x-2 md:px-7 md:py-4 md:text-base lg:px-8 lg:text-lg"
                  ><span>Explore More</span
                  ><i class="fa-solid fa-arrow-right"></i
               ></a>
            </div>
         </div>

         <div
            class="mt-8 grid w-full gap-4 sm:gap-5 md:mt-10 md:grid-cols-2 md:gap-6 lg:mt-12 lg:grid-cols-3 xl:mt-[60px] xl:gap-[30px]"
         >
            <!-- Card 1 -->
            <div
               data-aos="zoom-in"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               class="h3-category-card"
            >
               <div class="h3-category-img">
                  <img
                     src="assets/icons/category-1.png"
                     alt="Homelist3_category"
                  />
               </div>
               <h4>Buy a home</h4>
               <p>
                  Find your perfect home with ease and confidence.
Explore quality properties designed to match your lifestyle and budget.
               </p>
               <a href="/property">
                  <span>See More</span
                  ><i class="fa-solid fa-arrow-right text-secondary"></i>
               </a>
            </div>
            <!-- Card 2 -->
            <div
               data-aos="zoom-in"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               class="h3-category-card"
            >
               <div class="h3-category-img">
                  <img
                     src="assets/icons/category-2.png"
                     alt="Homelist3_category"
                  />
               </div>
               <h4>Rent a home</h4>
               <p>
                 Rent a home that fits your lifestyle and comfort.
Discover affordable, well-located properties ready for you to move in.
               </p>
               <a href="/property">
                  <span>See More</span
                  ><i class="fa-solid fa-arrow-right text-secondary"></i>
               </a>
            </div>

            <!-- Card 3 -->
            <div
               data-aos="zoom-in"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               class="h3-category-card col-span-1 md:col-span-2 lg:col-span-1"
            >
               <div class="h3-category-img">
                  <img
                     src="assets/icons/category-3.png"
                     alt="Homelist3_category"
                  />
               </div>
               <h4>Sell property</h4>
               <p>
                  Sell your property quickly and at the right value.
Connect with serious buyers and enjoy a smooth, stress-free selling process.
               </p>
               <a href="/register">
                  <span>See More</span
                  ><i class="fa-solid fa-arrow-right text-secondary"></i>
               </a>
            </div>
         </div>
      </section>
      <!-- Category End -->

      <!-- Marquee Line Start -->
      <section class="py-10 md:py-16 xl:py-20 2xl:py-[120px]">
         <marquee scrollamount="20">
            <div
               class="flex items-center gap-x-6 text-4xl font-extrabold text-secondary md:gap-x-8 md:text-5xl lg:gap-x-10 lg:text-6xl xl:text-7xl 2xl:text-[98px]"
            >
               <h1>New Property!</h1>
               <h1 class="text-outline">New Property!</h1>
               <h1>New Property!</h1>
               <h1 class="text-outline">New Property!</h1>
               <h1>New Property!</h1>
               <h1 class="text-outline">New Property!</h1>
            </div>
         </marquee>
      </section>
      <!-- Marquee Line End -->

      <!-- Gallery Start -->
      <section class="mx-auto max-w-[1800px] rounded-[50px] bg-new-100">
         <div class="section-padding container px-3 2xl:px-0">
            <div
               class="flex flex-col gap-y-5 md:flex-row md:items-end md:justify-between"
            >
               <div
                  data-aos="fade-right"
                  class="w-full md:max-w-[75%] lg:max-w-[50%]"
               >
                  <h2 class="heading-2 !text-start">Modern luxury living</h2>
                  <p class="heading-tagline !mb-0 !text-start">
                     We have been operating for over a decade, providing
                     top-notch services to our clients and building a strong
                     track record
                  </p>
               </div>
               <div data-aos="fade-left">
                  <a href="/property">
                  <button
                     class="group flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 transition-colors hover:border-primary hover:text-primary"
                  >
                     Explore More
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="transition-transform group-hover:translate-x-1"
                     >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                     </svg>
                  </button>
                  </a>
               </div>
            </div>

            <!-- Gallery Section -->
            <div class="gallery">
               <!-- Venice Canal -->
                 @foreach ($property as $property)
               <div class="gallery-item">
                  <img src="{{ $property->thumbnail}} "
                        alt="{{ $property->title}}" />
                  <div class="card-content">
                     <span class="chip">
                        <i class="fa-solid fa-location-crosshairs"></i>{{ $property->address}} ,{{ $property->state }}  {{ $property->country}} </span
                     >
                     <h3 class="mb-4 mt-2 text-2xl font-semibold">
                       {{ $property->title }} 
                     </h3>
                     <div class="flex gap-4 text-sm">
                        <span class="flex items-center gap-2">
                           <i class="fa-solid fa-bed text-primary"></i>
                           {{ $property->bedrooms ?? 0 }} Beds
                        </span>
                        <span class="flex items-center gap-2">
                           <i class="fa-solid fa-bath text-primary"></i>
                           {{ $property->bathrooms ?? 0 }} Baths
                        </span>
                     </div>
                      <a
                              href="/property_details/{{ $property->title }}">
                     <button
                        class="group mt-4 flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                     >
                        Learn More
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="16"
                           height="16"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           class="transition-transform group-hover:translate-x-1"
                        >
                           <path d="M5 12h14"></path>
                           <path d="m12 5 7 7-7 7"></path>
                        </svg>
                     </button>
                  </a>
                  </div>
               </div>
               @endforeach


               
            </div>
         </div>
      </section>
      <!-- Gallery End -->

      

      <!-- About Start -->
      <section class="container grid gap-3 px-3 md:grid-cols-2 2xl:px-0">
         <div data-aos="fade-right" class="flex flex-col justify-center">
            <h2 class="heading-2 !text-start xl:leading-[64px]">
               The perfect blend of comfort and style
            </h2>

            <div>
               <div class="flex items-center gap-x-2 md:gap-x-2.5 lg:gap-x-3">
                  <img
                     src="assets/icons/badge.svg"
                     alt="Homelist3_about"
                     class="size-5 sm:size-6 md:size-7 lg:size-8"
                  />
                  <h4 class="text-xl font-medium text-new-900 lg:text-2xl">
                     Find excellent deals
                  </h4>
               </div>
               <p
                  class="mt-3 font-poppins text-sm text-new-800 md:mt-4 md:text-base lg:mt-5 lg:text-lg"
               >
                  Search for homes or spaces with ease. Enter your preferred location, property type, or space to find the perfect match.
               </p>
            </div>

            <div class="my-5 sm:my-6 md:my-7 lg:my-8">
               <div class="flex items-center gap-x-2 md:gap-x-2.5 lg:gap-x-3">
                  <img
                     src="assets/icons/badge-secondary.svg"
                     alt="Homelist3_about"
                     class="size-5 sm:size-6 md:size-7 lg:size-8"
                  />
                  <h4 class="text-xl font-medium text-new-900 lg:text-2xl">
                     Find exceptional opportunities
                  </h4>
               </div>
               <p
                  class="mt-3 font-poppins text-sm text-new-800 md:mt-4 md:text-base lg:mt-5 lg:text-lg"
               >
                  Search homes and spaces by location, property type, or preference.
               </p>
            </div>

            <a
               href="/property"
               class="btn btn-secondary btn-rounded flex items-center gap-x-2.5"
               ><span>See More</span><i class="fa-solid fa-arrow-right"></i
            ></a>
         </div>
         <div data-aos="fade-left" class="mx-auto size-fit">
            <img src="assets/images/image-60.png" alt="Homelist3_about" />
         </div>
      </section>
      <!-- About End -->
<br><br>

      <!-- CTA Start -->
      <section
         class="container max-w-[1800px] rounded-lg bg-new-100 py-9 sm:rounded-xl md:rounded-2xl md:py-14 lg:rounded-3xl lg:py-20 xl:rounded-[50px] xl:py-24 2xl:py-[120px]"
      >
         <marquee scrollamount="20">
            <div
               class="mb-9 flex items-center gap-x-6 text-4xl font-extrabold text-secondary md:mb-14 md:gap-x-8 md:text-5xl lg:mb-20 lg:gap-x-10 lg:text-6xl xl:mb-24 xl:text-7xl 2xl:mb-[120px] 2xl:text-[98px]"
            >
               <h1>About Us!</h1>
               <h1 class="text-outline">About Us!</h1>
               <h1>About Us!</h1>
               <h1 class="text-outline">About Us!</h1>
               <h1>About Us!</h1>
               <h1 class="text-outline">About Us!</h1>
            </div>
         </marquee>

         <div
            class="container flex flex-col gap-3.5 px-3 md:flex-row md:gap-5 lg:gap-6 xl:gap-[30px] 2xl:px-0"
         >
            <div
               data-aos="fade-down"
               class="flex flex-col justify-center rounded-[20px] bg-white px-5 py-5 md:px-8 md:py-6 lg:flex-1 lg:px-10 lg:py-8 xl:px-[50px] xl:py-10"
            >
               <h2 class="heading-2 !text-start">About Us</h2>
               <p
                  class="mb-3 font-poppins text-sm font-medium text-new-800 md:text-base lg:mb-4 lg:text-lg xl:mb-5"
               >
                   {!! $settings->about_us !!}
               </p>
               <br><br>

               <a
                  type="button"
                  data-drawer-target="drawer-right-example"
                  data-drawer-show="drawer-right-example"
                  data-drawer-placement="right"
                  aria-controls="drawer-right-example"
                  class="flex size-fit items-center cursor-pointer gap-x-1.5 rounded-full border border-secondary px-5 py-2 text-center font-poppins font-medium text-new-900 transition-all hover:text-secondary md:gap-x-2 md:px-6 md:py-3 lg:gap-x-[10px] lg:px-7 lg:py-4 xl:px-8"
               >
                  <span>Learn More</span><i class="fa-solid fa-arrow-right"></i>
               </a>
            </div>
            <div data-aos="fade-up">
               <img
                  src="assets/images/image-109.png"
                  alt="Homelist3_cta"
                  class="rounded-[20px] object-cover object-center"
               />
            </div>
         </div>
      </section>
      <!-- CTA End -->

      <!-- User Reviews Start -->
      <section
         class="h2-reviews-swiper section-padding container flex max-w-[1170px] flex-col items-center justify-center overflow-hidden px-3 2xl:px-0"
      >
         <h2 data-aos="zoom-in-up" class="heading-2">What our Client say</h2>
         <p data-aos="zoom-in-up" data-aos-delay="150" class="heading-tagline">
            World-class care for everyone. Our health System offers unmatched,
            expert health care.
         </p>

         <div class="swiper-wrapper w-full">
            <!-- Card 1 -->
              @foreach ($testimonials as $testimonial)
            <div
               data-aos="zoom-in-right"
               class="h2-urs-card-2 swiper-slide group"
            >
               <div class="h2-urs-header">
                  <img
                    src="{{ $testimonial->image ? $testimonial->image : "https://avatar.iran.liara.run/public" }}"
                     alt="{{ $testimonial->name }}"
                  />
                  <div>
                     <h4 class="group-hover:text-white">{{ $testimonial->name }}</h4>
                 
                  </div>
               </div>
               <p class="group-hover:text-white">
                  “{{ $testimonial->content }}”
               </p>
            </div>

            @endforeach

          

       
         </div>

         <div
            data-aos="fade-in"
            class="h2-reviews-swiper-pagination static mx-auto mt-4 w-fit text-center md:mt-6 lg:mt-8 xl:mt-10"
         ></div>
      </section>
      <!-- User Reviews End -->

      
      <!-- Agent Start -->
      <section class="bg-new-100">
         <div
            class="section-padding-b container relative flex flex-col items-center justify-center px-3 pt-[100px] 2xl:px-0"
         >
            <button
               class="swiper-button-prev absolute left-0 top-2/3 z-20 flex size-10 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full border border-line-100 bg-white text-new-200 transition-all ease-in-out hover:border-transparent hover:bg-primary hover:text-white md:size-[45px] lg:size-[50px] xl:size-[55px] xl:-translate-x-1/2 2xl:size-[60px]"
            ></button>
            <button
               class="swiper-button-next absolute right-0 top-2/3 z-20 flex size-10 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full border border-line-100 bg-white text-new-200 transition-all ease-in-out hover:border-transparent hover:bg-primary hover:text-white md:size-[45px] lg:size-[50px] xl:size-[55px] xl:translate-x-1/2 2xl:size-[60px]"
            ></button>
            <h2 data-aos="zoom-in-up" class="heading-2">Our Featured Agents</h2>
            <p
               data-aos="zoom-in-up"
               data-aos-delay="150"
               class="heading-tagline"
            >
               Connect with skilled professionals who understand your needs and are committed to <br />
               making your real estate journey smooth and successful.
            </p>

            <div class="h2-agent-swiper container overflow-hidden">
               <div class="swiper-wrapper w-full">
                  <!-- Card 1 -->
                  @foreach ($agents as $agent)
                     
                
                  <div data-aos="fade-up" class="h2-agent-card swiper-slide">
                     <div class="h2-agent-header">
                        <div class="h2-agent-img">
                           <img
                              src="{{ $agent->passport ? $agent->passport : "https://avatar.iran.liara.run/public"}}"
                              alt="{{ $agent->name }}"
                           />
                        </div>

                        <!-- hover social icons -->
                        <div class="h2-agent-social">
                           <button class="h2-agent-hoverable-btn">
                              <i
                                 class="fa-solid fa-plus text-lg text-[#777E90]"
                              ></i>
                           </button>
                        </div>

                        <!-- icons -->
                        <div
                           class="h2-agent-social-icons absolute left-1/2 top-1/2 hidden"
                        >
                           <a
                              href="{{ $agent->facebook }}"
                              target="_blank"
                              class="absolute left-[50px] top-[98px] flex size-[43px] items-center justify-center rounded-full bg-white text-[#777E90] shadow-shadow7 transition-all hover:text-[#1877f2]"
                              ><i class="fa-brands fa-facebook-f text-base"></i
                           ></a>

                           <a
                              target="_blank"
                              class="absolute left-[103px] top-[43px] flex size-[43px] items-center justify-center rounded-full bg-white text-[#777E90] shadow-shadow7 transition-all hover:text-[#14171a]"
                              href="{{ $agent->twitter }}"
                              ><i class="fa-brands fa-x-twitter text-base"></i
                           ></a>

                           <a
                              target="_blank"
                              href="{{ $agent->skype }}"
                              class="absolute -bottom-[15px] left-[118px] flex size-[43px] items-center justify-center rounded-full bg-white text-[#777E90] shadow-shadow7 transition-all hover:text-[#0a66c2]"
                              ><i class="fa-brands fa-skype text-base"></i
                           ></a>

                           <a
                              target="_blank"
                              href="{{ $agent->instagram }}"
                              class="absolute bottom-[53px] left-[97px] flex size-[43px] items-center justify-center rounded-full bg-white text-[#777E90] shadow-shadow7 transition-all hover:text-[#c32aa3]"
                              ><i class="fa-brands fa-instagram text-base"></i
                           ></a>
                        </div>
                     </div>
                     <div class="h2-agent-body">
                        <div class="h2-agent-body-content">
                           <div class="h2-agent-name">
                              <h4 style = "text-transform: capitalize">{{ $agent->name }}</h4>
                              <p style = "text-transform: capitalize">{{ $agent->title ? $agent->title . ' -' : 'Agent' }} {{ $agent->company ? $agent->company : config('app.name') }}</p>
                           </div>

                           <div class="h2-agent-footer">
                              <p>{{ $agent->agent_properties }} Properties</p>
                              <div class="h2-agent-icons">
                                 <a href="mailto:{{ $agent->email }}">
                                 <button type="button">
                                    <i class="fa-solid fa-envelope"></i>
                                 </button>
                                 </a>
                                 <a href="tel:{{ $agent->phone }}">
                                 <button type="button">
                                    <i class="fa-solid fa-phone-volume"></i>
                                 </button>
                              </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  @endforeach

                
               </div>
            </div>
         </div>
      </section>
      <!-- Agent End -->


      
      <!-- Blog Section Start -->
      <section
         class="section-padding container flex flex-col items-center justify-center overflow-hidden px-3 2xl:px-0"
      >
        <x-heading load=" Blog" title="Explore ideas, trends, and expert advice on <br />
          real estate, homes, and modern living."
               />
        

         <!-- Content -->
         <div
            class="grid w-full gap-5 md:gap-7 lg:grid-cols-7 lg:flex-row lg:gap-10 xl:gap-12"
         >
            <div data-aos="fade-right" class="mx-auto lg:col-span-4">
               <div class="w-full overflow-hidden rounded-2xl">
                  <img
                    src="{{ $blog->image ?? ($blog->category == 'Real Estate' ? 'assets/images/image-22.png' : 'assets/images/image-23.png') }}"
                     alt="Homelist_blog"
                     class="max-h-[432px] w-full max-w-full object-cover object-center transition-all hover:scale-[1.15]"
                  />
               </div>
               <div class="mt-6">
                  <div class="mb-4 flex flex-col justify-between lg:flex-row">
                     <a
                        href="/blog_details/{{ $blog->slug }}"
                        class="order-2 text-[34px] font-medium leading-[44px] text-nature-600 transition-all hover:text-primary hover:underline lg:order-1 lg:w-3/4"
                     >
                        {{ $blog->title }}
                     </a>
                     <span
                        class="order-1 font-poppins text-base font-medium text-nature-200 lg:order-2"
                        >   {{ \Carbon\Carbon::parse($blog->created_at)->format('d, F Y') }}</span
                     >
                  </div>
                  <p
                     class="mb-7 font-poppins text-lg font-normal truncate text-wrap text-nature-200 lg:w-3/4"
                  >
                  {{ \Illuminate\Support\Str::limit(strip_tags($blog->content), 30) }}
                  </p>
                  <a
                     href="/blog_details/{{ $blog->slug }}"
                     class="font-poppins text-lg text-primary transition-all hover:underline"
                  >
                     Read More <i class="fa-solid fa-arrow-right"></i>
                  </a>
               </div>
            </div>
            <div
               data-aos="fade-left"
               class="grid flex-1 gap-4 md:grid-cols-2 md:gap-6 lg:col-span-3 lg:grid-cols-1 lg:gap-8 xl:gap-10 2xl:gap-12"
            >

            @foreach ($blogs as $blog)
              <!-- Card 1 -->
               <div class="blog-card">
                  <div class="blog-content flex-1">
                     <a href="/blog_details/{{ $blog->slug }}" class="blog-header"
                        >{{ $blog->title }}</a
                     >
                     <p class="truncate text-wrap">
                        {{ \Illuminate\Support\Str::limit(strip_tags($blog->content), 20) }}
                     </p>
                     <a  href="/blog_details/{{ $blog->slug }}"
                        >Read More <i class="fa-solid fa-arrow-right"></i
                     ></a>
                  </div>
                  <div class="w-fit overflow-hidden rounded-2xl">
                     <img
                         src="{{ $blog->image ?? ($blog->category == 'Real Estate' ? 'assets/images/image-22.png' : 'assets/images/image-23.png') }}"
                        alt="blog"
                        style="width: 220px; height: 170px;"
                        class="rounded-2xl object-cover object-center transition-all duration-200 ease-in-out hover:scale-[1.2] md:max-h-[170px] md:max-w-[190px] lg:max-h-[190px] lg:max-w-[220px]"
                     />
                  </div>
               </div>
               
            @endforeach
             
            </div>
         </div>
      </section>
      <!-- Blog Section End -->

</x-templateone.layout>