<x-templateone.layout>

      <!-- Hero section start -->
      <section
         class="w-full overflow-hidden bg-new-100 px-3 pb-6 md:pb-8 lg:pb-12 xl:pb-16 2xl:px-0"
      >
         <div class="relative w-full">
            <div
               class="container z-10 flex flex-1 flex-col items-center justify-center gap-y-3 py-16 md:items-start md:gap-y-4 md:py-28 lg:gap-y-6 lg:py-36 xl:gap-y-8 xl:py-40 2xl:py-52"
            >
               <h1
                  data-aos="fade-right"
                  class="heading-hero w-fit text-center md:text-start"
               >
                {!! $settings->header !!}
               </h1>
               <p
                  data-aos="fade-right"
                  data-aos-delay="150"
                  class="w-fit text-center font-poppins text-base font-normal text-nature-300 md:text-start lg:text-lg xl:text-xl 2xl:text-2xl"
               >
                  {!! $settings->header_content !!}
               </p>
               <a
                  data-aos="fade-right"
                  data-aos-delay="300"
                  href="#"
                  class="w-fit rounded-full bg-primary px-3 py-2.5 text-center text-white md:py-3 lg:px-5 lg:py-4 lg:text-xl lg:font-bold xl:mt-2 xl:px-7 xl:py-5"
                  >Start your search</a
               >
            </div>

            <!-- bg overlay -->
            <div
               class="absolute inset-y-0 right-0 hidden bg-right bg-no-repeat md:block lg:w-[60%] xl:w-2/3 2xl:bg-[url('assets/images/image-112.png')]"
               data-aos="fade-left"
            >
               <img
                  src="assets/images/image-112.png"
                  class="h-full w-full 2xl:hidden"
                  alt=""
               />
            </div>
         </div>

         <!-- Small to SM -->
         <div class="container sm:hidden">
            <form action="#" class="w-full">
               <div class="space-y-2 pb-2">
                  <div class="flex">
                     <span
                        class="inline-flex items-center rounded-s-md border border-e-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400"
                     >
                        <i class="fa-solid fa-location-crosshairs text-sm"></i>
                     </span>
                     <input
                        type="text"
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
                  <button type="button" class="h1-search-sm py-2">Buy</button>
                  <button type="button" class="h1-search-sm py-2">Rent</button>
                  <button
                     type="submit"
                     class="h1-search-sm rounded-r-md bg-primary py-2 text-white"
                  >
                     <i class="fa-solid fa-magnifying-glass text-lg"></i>
                  </button>
               </div>
            </form>
         </div>

         <!-- From sm to large -->
         <div class="container hidden sm:block">
            <div
               data-aos="zoom-in"
               class="grid max-w-[50%] grid-cols-3 overflow-hidden rounded-tl-md rounded-tr-md bg-[#F9FAFB] font-poppins text-nature-500 *:flex *:cursor-pointer *:items-center *:justify-center *:py-3 md:max-w-[350px] md:text-lg md:font-medium *:md:h-[68px] *:md:w-[125px]"
            >
               <div
                  role="button"
                  class="h1-search text-sm md:text-base"
                  data-type="rent"
               >
                  Rent
               </div>
               <div
                  role="button"
                  class="h1-search text-sm md:text-base"
                  data-type="buy"
               >
                  Buy
               </div>
               <div
                  role="button"
                  class="active h1-search text-sm md:text-base"
                  data-type="sell"
               >
                  Sell
               </div>
            </div>
            <form
               action="#"
               data-aos="fade-up"
               class="flex w-full items-center justify-between rounded-r-xl rounded-bl-xl bg-white px-4 py-4 drop-shadow-2xl md:px-6 md:py-5 lg:px-8 lg:py-6 xl:px-10 xl:py-8"
            >
               <input
                  type="text"
                  class="hidden"
                  id="h1-search-type"
                  name="type"
                  value="sell"
               />

               <div class="space-y-1 lg:space-y-[10px]">
                  <div
                     class="flex items-center gap-x-1 md:gap-x-2 lg:gap-x-[10px]"
                  >
                     <i
                        class="fa-solid fa-location-crosshairs text-sm lg:text-base"
                     ></i>
                     <p class="font-bold text-nature-500 lg:text-xl">
                        Location
                     </p>
                  </div>
                  <div class="relative !m-0">
                     <input
                        type="text"
                        id="location"
                        class="peer m-0 block w-full appearance-none rounded-lg border-0 bg-transparent px-2.5 pb-1.5 pt-3 text-sm text-gray-900 shadow-none placeholder:text-sm focus:outline-none focus:ring-0 md:text-base placeholder:md:text-base"
                        placeholder="New York City, USA"
                     />
                  </div>
               </div>

               <div class="hidden !h-[54px] !w-0.5 bg-[#f1f1f1] md:block"></div>

               <div class="flex flex-col items-center justify-center">
                  <div>
                     <div
                        class="flex items-center gap-x-1 md:gap-x-2 lg:gap-x-[10px]"
                     >
                        <i
                           class="fa-solid fa-house-chimney text-sm lg:text-base"
                        ></i>
                        <p class="font-bold text-nature-500 lg:text-xl">
                           Property
                        </p>
                     </div>
                     <div class="relative !m-0">
                        <input
                           type="text"
                           id="property"
                           class="peer m-0 block w-full appearance-none rounded-lg border-0 bg-transparent px-2.5 pb-1.5 pt-3 text-sm text-gray-900 shadow-none placeholder:text-sm focus:outline-none focus:ring-0 md:text-base placeholder:md:text-base"
                           placeholder="Duplex House"
                        />
                     </div>
                  </div>
               </div>

               <div class="hidden !h-[54px] !w-0.5 bg-[#f1f1f1] md:block"></div>

               <div class="flex flex-col items-center justify-center">
                  <div>
                     <div
                        class="flex items-center gap-x-1 md:gap-x-2 lg:gap-x-[10px]"
                     >
                        <i
                           class="fa-solid fa-sack-dollar text-sm lg:text-base"
                        ></i>
                        <p class="font-bold text-nature-500 lg:text-xl">
                           Price
                        </p>
                     </div>
                     <div class="relative !m-0">
                        <input
                           type="text"
                           id="price"
                           class="peer m-0 block w-full appearance-none rounded-lg border-0 bg-transparent px-2.5 pb-1.5 pt-3 text-sm text-gray-900 shadow-none placeholder:text-sm focus:outline-none focus:ring-0 md:text-base placeholder:md:text-base"
                           placeholder="From $900"
                        />
                     </div>
                  </div>
               </div>

               <div class="hidden !h-[54px] !w-0.5 bg-[#f1f1f1] md:block"></div>

               <div
                  class="col-span-1 flex w-20 items-center justify-end md:w-auto"
               >
                  <button
                     type="submit"
                     class="flex items-center gap-x-4 rounded-xl bg-primary px-4 py-3 text-lg font-bold text-white md:py-3.5 lg:px-5 lg:py-4 xl:px-6 xl:py-5"
                  >
                     <img
                        src="assets/icons/search.svg"
                        class="size-5 md:size-auto"
                     />
                     <span class="hidden md:block">Search</span>
                  </button>
               </div>
            </form>
         </div>
      </section>
      <!-- Hero section end -->

      <!-- Best place section start -->
      <section class="section-padding bg-white px-3 xl:px-0">
         <div class="container flex flex-col items-center justify-center">
         <x-heading  load="Search a best place in the world" title="Whether you're looking for places for a vacation. We are here to
               Guide you 
               about the details you need to check in and ease your trips in
               advance"
               />

            <div
               class="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:divide-x-2 lg:divide-y-2"
            >
            <x-place name="Betu, East Java" image="assets/images/image-9.png" />

               <!-- Card 2 -->
             <x-place name="Ketu" image="assets/images/image-9.png" />

               <!-- Card 3 -->
               <div
                  data-aos-delay="150"
                  data-aos="fade-in"
                  data-aos-easing="ease-in-out"
                  class="best-place-card group !border-t-0"
               >
                  <div>
                     <img
                        src="assets/images/image-11.png"
                        alt="Homelist_bestplace"
                        class="transition-all ease-in-out group-hover:!rounded-[3px] group-hover:shadow-shadow2"
                     />
                  </div>
                  <a href="#">Surabaya, East Java</a>
                  <p class="chip">
                     <i class="fa-solid fa-location-crosshairs"></i>
                     <span>32 Destinations</span>
                  </p>
               </div>

               <!-- Card 4 -->
               <div
                  data-aos-delay="200"
                  data-aos="fade-in"
                  data-aos-easing="ease-in-out"
                  class="best-place-card group !border-t-0"
               >
                  <div>
                     <img
                        src="assets/images/image-12.png"
                        alt="Homelist_bestplace"
                        class="transition-all ease-in-out group-hover:!rounded-[3px] group-hover:shadow-shadow2"
                     />
                  </div>
                  <a href="#">Malang, East Java</a>
                  <p class="chip">
                     <i class="fa-solid fa-location-crosshairs"></i>
                     <span>32 Destinations</span>
                  </p>
               </div>

               <!-- Card 5 -->
               <div
                  data-aos-delay="250"
                  data-aos="fade-in"
                  data-aos-easing="ease-in-out"
                  class="best-place-card group hidden !border-l-0 sm:block"
               >
                  <div>
                     <img
                        src="assets/images/image-13.png"
                        alt="Homelist_bestplace"
                        class="transition-all ease-in-out group-hover:!rounded-[3px] group-hover:shadow-shadow2"
                     />
                  </div>
                  <a href="#">Doemg, Central Java</a>
                  <p class="chip">
                     <i class="fa-solid fa-location-crosshairs"></i>
                     <span>32 Destinations</span>
                  </p>
               </div>

               <!-- Card 6 -->
               <div
                  data-aos-delay="300"
                  data-aos="fade-in"
                  data-aos-easing="ease-in-out"
                  class="best-place-card group hidden sm:block"
               >
                  <div>
                     <img
                        src="assets/images/image-14.png"
                        alt="Homelist_bestplace"
                        class="transition-all ease-in-out group-hover:!rounded-[3px] group-hover:shadow-shadow2"
                     />
                  </div>
                  <a href="#">Nusa Dua, Lombok</a>
                  <p class="chip">
                     <i class="fa-solid fa-location-crosshairs"></i>
                     <span>32 Destinations</span>
                  </p>
               </div>

               <!-- Card 7 -->
               <div
                  data-aos-delay="350"
                  data-aos="fade-in"
                  data-aos-easing="ease-in-out"
                  class="best-place-card group hidden lg:block"
               >
                  <div>
                     <img
                        src="assets/images/image-15.png"
                        alt="Homelist_bestplace"
                        class="transition-all ease-in-out group-hover:!rounded-[3px] group-hover:shadow-shadow2"
                     />
                  </div>
                  <a href="#">Bandung, West Java</a>
                  <p class="chip">
                     <i class="fa-solid fa-location-crosshairs"></i>
                     <span>32 Destinations</span>
                  </p>
               </div>

               <!-- Card 8 -->
               <div
                  data-aos-delay="400"
                  data-aos="fade-in"
                  data-aos-easing="ease-in-out"
                  class="best-place-card group hidden lg:block"
               >
                  <div>
                     <img
                        src="assets/images/image-16.png"
                        alt="Homelist_bestplace"
                        class="transition-all ease-in-out group-hover:!rounded-[3px] group-hover:shadow-shadow2"
                     />
                  </div>
                  <a href="#">Watatobi, Sumatera</a>
                  <p class="chip">
                     <i class="fa-solid fa-location-crosshairs"></i>
                     <span>32 Destinations</span>
                  </p>
               </div>
            </div>
         </div>
      </section>
      <!-- Best place section end -->

      <!-- Feature Destination section started -->
      <section
         class="bg-white pb-10 pt-6 md:pb-16 md:pt-8 lg:pb-20 lg:pt-12 xl:pb-24 xl:pt-16 2xl:pb-28"
      >
         <div
            class="container flex flex-col items-center justify-center px-3 2xl:px-0"
         >
            <div class="space-y-2 md:space-y-3 lg:space-y-5">
                 <x-heading load="Featured Destinations" title=" Popular destinations open to visitors from Indonesia"
               />
            
            </div>

            <div
               class="mt-8 grid gap-4 *:max-w-[410px] md:mt-10 md:gap-7 lg:mt-12 lg:grid-cols-3 xl:mt-16 2xl:mt-20"
            >
               <!-- card 1 -->
               @foreach ($property as $property)
                  
               
               <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  class="rounded-[20px] bg-new-100 transition-all duration-300 ease-in-out hover:shadow-shadow7"
               >
                  <div
                     class="group relative h-auto w-full overflow-hidden rounded-t-[20px]"
                  >
                     <div
                        class="absolute right-0 top-0 z-10 rounded-tr-[20px] bg-primary px-3.5 py-1.5 font-semibold text-white"
                     >
                       {{ $property->type }} 
                     </div>
                     <img
                        src="{{ $property->thumbnail}} "
                        alt="{{ $property->title}}"
                        class="h-full max-h-[250px] w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-[1.15]"
                     />
                  </div>
                  <div class="p-8">
                     <p class="text-2xl font-medium text-new-900">
                        $400.00<span
                           class="font-poppins text-sm font-medium text-new-800"
                           >/per day</span
                        >
                     </p>
                     <h4
                        class="mb-5 mt-3 text-2xl font-medium leading-8 text-new-900 capitalize"
                     >
                        {{ $property->title }} 
                     </h4>
                     <div class="mb-7 flex items-center gap-x-[10px]">
                        <i class="fa-solid fa-map-pin text-secondary"></i>
                        <p
                           class="font-poppins text-sm font-medium text-new-800"
                        >
                           {{ $property->address}} ,{{ $property->state }}  {{ $property->country}} 
                        </p>
                     </div>
                     <hr />
                     <div class="mt-6 grid grid-cols-2 items-center">
                        <div class="flex items-center gap-x-[10px]">
                           <div class="flex items-center gap-x-2">
                              <i class="fa-solid fa-bed text-primary"></i>
                              <span
                                 class="font-poppins text-sm font-normal text-new-900"
                                 >{{ $property->bedrooms ?? 0 }} Beds</span
                              >
                           </div>
                           <div class="flex items-center gap-x-2">
                              <i class="fa-solid fa-bath text-primary"></i>
                              <span
                                 class="font-poppins text-sm font-normal text-new-900"
                                 >{{ $property->bathrooms ?? 0 }}  Baths</span
                              >
                           </div>
                        </div>

                        <div class="flex items-center justify-end">
                           <a
                              href="/property_details/{{ $property->title }}"
                              class="flex items-center gap-x-1.5 transition-all duration-300 ease-in-out hover:gap-x-4 md:gap-x-2 lg:gap-x-2.5"
                           >
                              <span
                                 class="font-poppins text-sm font-medium text-new-900"
                                 >View Details</span
                              >
                              <i
                                 class="fa-solid fa-arrow-right text-primary"
                              ></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               @endforeach
              

            </div>
         </div>
      </section>
      <!-- Feature Destination section end -->

      <!-- How it works section start -->
      <section class="section-padding overflow-hidden">
         <div class="container flex flex-col items-center justify-center">
             <x-heading load="How it works" title="Exponent is a pixel perfect theme, that is tailor made for
               startups <br />and businesses. Build your website swiftly and
               easily."
               />
           
            <div
               class="mt-14 flex w-full flex-col items-center gap-0 gap-y-5 px-3 md:flex-row md:gap-y-0 2xl:px-0"
            >
               <!-- card 1 -->
               <div
                  data-aos="zoom-in-right"
                  class="how-it-works-card group duration-200 ease-in-out hover:shadow-shadow6 hover:transition-all"
               >
                  <div class="how-it-works__rounded-1"></div>
                  <div class="how-it-works__rounded-2"></div>
                  <div
                     class="how-it-works_img-container text-primary hover:transition-all hover:duration-200 hover:ease-in-out group-hover:text-secondary"
                  >
                     <svg
                        width="40"
                        height="36"
                        viewBox="0 0 40 36"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M39.6508 16.5394L34.0935 11.6955V3.23989C34.0935 2.98495 33.8712 2.73001 33.56 2.73001H28.8473C28.5806 2.73001 28.3138 2.94246 28.3138 3.23989V6.68162L21.2893 0.478017C20.5335 -0.159339 19.422 -0.159339 18.6662 0.478017L0.349162 16.5394C-0.36218 17.1343 0.0824085 18.2815 1.0605 18.2815H3.81696L20 3.83476L36.183 18.2815H38.9395C39.9176 18.2815 40.3622 17.1767 39.6508 16.5394Z"
                           fill="currentColor"
                        />
                        <path
                           d="M34.3158 32.0909H34.049C34.049 32.0484 34.049 32.0059 34.049 31.9209V18.409L20 5.8743L5.90652 18.409V31.9209C5.90652 31.9634 5.90652 32.0484 5.90652 32.0909H5.37302C5.01735 32.0909 4.70613 32.3883 4.70613 32.7282V35.3626C4.70613 35.7026 5.01735 36 5.37302 36H34.2713C34.627 36 34.9382 35.7026 34.9382 35.3626V32.7282C34.9827 32.3883 34.7159 32.0909 34.3158 32.0909ZM28.7139 21.2133L26.8022 19.8961L19.1997 29.4565L14.9761 26.5671L10.2635 32.2184L8.30731 30.7312L14.4871 23.2529L18.6662 26.1422L24.7571 18.494L22.8898 17.1768L28.6695 15.4346V21.2133H28.7139Z"
                           fill="currentColor"
                        />
                     </svg>
                  </div>

                  <div class="content">
                     <h4>Search Property</h4>
                     <p>
                        Get started swiftly & easily by imp orting a demo of
                        your choice in a single click.
                     </p>
                  </div>
               </div>
               <!-- line -->
               <div class="h-[3px] w-full flex-1 bg-primary"></div>
               <!-- card 2 -->
               <div
                  data-aos="zoom-in"
                  class="how-it-works-card group duration-200 ease-in-out hover:shadow-shadow6 hover:transition-all"
               >
                  <div class="how-it-works__rounded-1"></div>
                  <div class="how-it-works__rounded-2"></div>
                  <div
                     class="how-it-works_img-container text-primary hover:transition-all hover:duration-200 hover:ease-in-out group-hover:text-secondary"
                  >
                     <svg
                        width="40"
                        height="38"
                        viewBox="0 0 40 38"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M39.3282 16.8827L21.3815 0.538121C20.5938 -0.1794 19.4059 -0.179322 18.6185 0.538043L0.67172 16.8828C0.0407064 17.4575 -0.16773 18.3429 0.14055 19.1385C0.448908 19.9341 1.19969 20.4482 2.05336 20.4482H4.91975V36.8242C4.91975 37.4735 5.44647 37.9999 6.09608 37.9999H15.9331C16.5827 37.9999 17.1094 37.4736 17.1094 36.8242V26.8812H22.8908V36.8243C22.8908 37.4736 23.4175 38 24.0671 38H33.9036C34.5532 38 35.08 37.4736 35.08 36.8243V20.4482H37.9469C38.8005 20.4482 39.5514 19.9341 39.8597 19.1385C40.1676 18.3429 39.9592 17.4575 39.3282 16.8827Z"
                           fill="currentColor"
                        />
                        <path
                           d="M34.7727 2.34679H26.8728L35.949 10.5954V3.52244C35.949 2.87316 35.4224 2.34679 34.7727 2.34679Z"
                           fill="currentColor"
                        />
                     </svg>
                  </div>

                  <div class="content">
                     <h4>Choose Property</h4>
                     <p>
                        Get started swiftly & easily by imp orting a demo of
                        your choice in a single click.
                     </p>
                  </div>
               </div>
               <!-- line -->
               <div class="h-[3px] w-full flex-1 bg-primary"></div>
               <!-- card 3 -->
               <div
                  data-aos="zoom-in-left"
                  class="how-it-works-card group duration-200 ease-in-out hover:shadow-shadow6 hover:transition-all"
               >
                  <div class="how-it-works__rounded-1"></div>
                  <div class="how-it-works__rounded-2"></div>
                  <div
                     class="how-it-works_img-container text-primary hover:transition-all hover:duration-200 hover:ease-in-out group-hover:text-secondary"
                  >
                     <svg
                        width="40"
                        height="36"
                        viewBox="0 0 40 36"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M34.0935 11.6955L39.6508 16.5394C40.3622 17.1767 39.9176 18.2815 38.9395 18.2815H36.183L20 3.83476L3.81696 18.2815H1.0605C0.0824085 18.2815 -0.36218 17.1343 0.349162 16.5394L18.6662 0.478017C19.422 -0.159339 20.5335 -0.159339 21.2893 0.478017L28.3138 6.68162V3.23989C28.3138 2.94246 28.5806 2.73001 28.8473 2.73001H33.56C33.8712 2.73001 34.0935 2.98495 34.0935 3.23989V11.6955Z"
                           fill="currentColor"
                        />
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M34.049 32.0909H34.3158C34.7159 32.0909 34.9827 32.3883 34.9382 32.7282V35.3626C34.9382 35.7026 34.627 36 34.2713 36H5.37302C5.01735 36 4.70613 35.7026 4.70613 35.3626V32.7282C4.70613 32.3883 5.01735 32.0909 5.37302 32.0909H5.90652V18.409L20 5.8743L34.049 18.409V32.0909ZM24 21C24 23.2091 22.2091 25 20 25C17.7909 25 16 23.2091 16 21C16 18.7909 17.7909 17 20 17C22.2091 17 24 18.7909 24 21ZM12 28C12 27.4477 12.4477 27 13 27H16.9458C17.2905 27 17.611 27.1776 17.7938 27.47L19.152 29.6432C19.5437 30.2699 20.4563 30.2699 20.848 29.6432L22.2062 27.47C22.389 27.1776 22.7095 27 23.0542 27H27C27.5523 27 28 27.4477 28 28V33H12V28Z"
                           fill="currentColor"
                        />
                     </svg>
                  </div>

                  <div class="content">
                     <h4>Make your dream</h4>
                     <p>
                        Get started swiftly & easily by imp orting a demo of
                        your choice in a single click.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- How it works section end -->

      <!-- User Activity section start -->
      <section
         class="section-padding container flex items-center justify-around px-3 2xl:px-0"
         id="h1-cta"
      >
         <!-- cta 1 -->
         <div class="cta-content">
            <div class="cta-img">
               <img src="assets/icons/prize.svg" alt="Homelist_cta" />
            </div>
            <div class="cta-data">
               <h2 className="hidden">
                  <span class="odometer" id="h1-award">55</span
                  ><span class="text-primary">M</span>
               </h2>
               <p>Award Winning</p>
            </div>
         </div>

         <!-- cta 2 -->
         <div class="cta-content">
            <div class="cta-img">
               <img src="assets/icons/building.svg" alt="Homelist_cta" />
            </div>
            <div class="cta-data">
               <h2>
                  <span id="h1-property" class="odometer">50</span
                  ><span class="text-secondary">K</span>
               </h2>
               <p>Property Ready</p>
            </div>
         </div>

         <!-- cta 3 -->
         <div class="cta-content">
            <div class="cta-img">
               <img src="assets/icons/happy-customer.svg" alt="Homelist_cta" />
            </div>
            <div class="cta-data">
               <h2>
                  <span id="h1-clients" class="odometer">50</span
                  ><span class="text-primary">M</span>
               </h2>
               <p>Happy Clients</p>
            </div>
         </div>
      </section>
      <!-- User Activity section end -->

      <!-- Testimonial section start -->
      <section
         class="section-padding container flex flex-col items-center justify-center px-3 2xl:px-0"
      >

        <x-heading load="Our trending latest property" title=" Our unique process gives you peace of mind form <br />
            home rent to services"
               />
        
         <div
            class="mt-6 grid w-full gap-3 md:mt-8 md:grid-cols-2 md:gap-[15px] lg:mt-11 lg:gap-[20px] xl:mt-14 xl:gap-[30px]"
         >
            <!-- Card 2 -->
            <div data-aos="zoom-in" class="testimonial-card">
               <div class="testimonial-main-img group">
                  <img
                     src="assets/images/image-101.png"
                     alt="Homelist_testimonial"
                     class="transition-all duration-700 group-hover:scale-[1.2]"
                  />
               </div>
               <div class="testimonial-content">
                  <div class="testimonial-header">
                     <p>$259,000</p>
                     <button class="testimonial-love">
                        <i class="fa-solid fa-lg fa-heart text-primary-400"></i>
                     </button>
                  </div>
                  <h4>Case Alda</h4>
                  <p>Co Rd Tribune Tribune</p>
                  <div class="testimonial-features">
                     <div>
                        <i class="fa-solid fa-bed fa-lg text-primary-400"></i>
                        <span>2 Beds</span>
                     </div>
                     <div>
                        <i class="fa-solid fa-bath fa-lg text-primary-400"></i>
                        <span>2 Baths</span>
                     </div>
                  </div>
                  <a href="property.html" class="testimonial-details"
                     >View Details</a
                  >
               </div>
            </div>

            <!-- Card 1 -->
            <div data-aos="zoom-in" class="testimonial-card">
               <div class="testimonial-main-img group">
                  <img
                     src="assets/images/image-102.png"
                     alt="Homelist_testimonial"
                     class="transition-all duration-700 group-hover:scale-[1.2]"
                  />
               </div>
               <div class="testimonial-content">
                  <div class="testimonial-header">
                     <p>$259,000</p>
                     <button class="testimonial-love">
                        <i class="fa-solid fa-lg fa-heart text-primary-400"></i>
                     </button>
                  </div>
                  <h4>Langes Beach House</h4>
                  <p>375 Highland Ave NE UNIT 1002</p>
                  <div class="testimonial-features">
                     <div>
                        <i class="fa-solid fa-bed fa-lg text-primary-400"></i>
                        <span>2 Beds</span>
                     </div>
                     <div>
                        <i class="fa-solid fa-bath fa-lg text-primary-400"></i>
                        <span>2 Baths</span>
                     </div>
                  </div>
                  <a href="property.html" class="testimonial-details"
                     >View Details</a
                  >
               </div>
            </div>

            <!-- Card 3 -->
            <div data-aos="zoom-in" class="testimonial-card">
               <div class="testimonial-main-img group">
                  <img
                     src="assets/images/image-103.png"
                     alt="Homelist_testimonial"
                     class="transition-all duration-700 group-hover:scale-[1.2]"
                  />
               </div>
               <div class="testimonial-content">
                  <div class="testimonial-header">
                     <p>$259,000</p>
                     <button class="testimonial-love">
                        <i class="fa-solid fa-lg fa-heart text-primary-400"></i>
                     </button>
                  </div>
                  <h4>Supper Delax Home</h4>
                  <p>1398 Lynford Dr SW, Atlanta</p>
                  <div class="testimonial-features">
                     <div>
                        <i class="fa-solid fa-bed fa-lg text-primary-400"></i>
                        <span>2 Beds</span>
                     </div>
                     <div>
                        <i class="fa-solid fa-bath fa-lg text-primary-400"></i>
                        <span>2 Baths</span>
                     </div>
                  </div>
                  <a href="property.html" class="testimonial-details"
                     >View Details</a
                  >
               </div>
            </div>

            <!-- Card 4 -->
            <div data-aos="zoom-in" class="testimonial-card">
               <div class="testimonial-main-img group">
                  <img
                     src="assets/images/image-104.png"
                     alt="Homelist_testimonial"
                     class="transition-all duration-700 group-hover:scale-[1.2]"
                  />
               </div>
               <div class="testimonial-content">
                  <div class="testimonial-header">
                     <p>$259,000</p>
                     <button class="testimonial-love">
                        <i class="fa-solid fa-lg fa-heart text-primary-400"></i>
                     </button>
                  </div>
                  <h4>Clinton Villa</h4>
                  <p>675 Albert St NW, Atlanta</p>
                  <div class="testimonial-features">
                     <div>
                        <i class="fa-solid fa-bed fa-lg text-primary-400"></i>
                        <span>2 Beds</span>
                     </div>
                     <div>
                        <i class="fa-solid fa-bath fa-lg text-primary-400"></i>
                        <span>2 Baths</span>
                     </div>
                  </div>
                  <a href="property.html" class="testimonial-details"
                     >View Details</a
                  >
               </div>
            </div>
         </div>
      </section>
      <!-- Testimonial section end -->

      <!-- Features section Start -->
      <section class="section-padding container max-w-[1430px]">
         <div
            class="grid w-full gap-y-5 rounded-[40px] bg-[#FCF8F7] p-8 md:p-11 lg:grid-cols-2 lg:p-14 xl:p-[70px]"
         >
            <div data-aos="flip-up" class="mx-auto w-fit lg:mx-0">
               <img src="assets/images/image-86.png" alt="Homelist_features" />
            </div>
            <div
               data-aos="flip-up"
               class="mx-auto flex w-fit flex-col justify-center lg:mx-0"
            >
               <h2
                  class="heading-2 mb-3 !text-start !text-nature-600 md:mb-4 lg:mb-5 xl:mb-6"
               >
                  About Us
               </h2>
               <p class="heading-tagline !text-start">
                 {!! $settings->about_us !!}
               </p>

               <div class="my-3.5 md:my-5 lg:my-7 xl:my-10">
                  <ul
                     class="space-y-2.5 *:flex *:items-center *:gap-x-1.5 *:text-base *:font-medium *:text-nature-600 md:space-y-5 *:md:gap-x-2.5 *:md:text-lg lg:space-y-6 *:lg:gap-x-3 *:lg:text-xl xl:space-y-7 *:xl:text-2xl"
                  >
               
                    
                     <li>
                        <a
                          type="button"
                  data-drawer-target="drawer-right-example"
                  data-drawer-show="drawer-right-example"
                  data-drawer-placement="right"
                  aria-controls="drawer-right-example"
                           class="group flex items-center gap-1.5 rounded-[40px] border border-new-200 px-4 py-2.5 font-poppins text-sm font-medium text-nature-500 transition-all hover:border-primary-400 hover:bg-primary-400 hover:text-white md:gap-2.5 md:py-3.5 md:text-base lg:gap-3 lg:px-6 lg:py-4 xl:px-8"
                           ><span>See More</span>
                           <i
                              class="fa-solid fa-arrow-right text-sm text-nature-500 group-hover:text-white md:text-base lg:text-xl"
                           ></i
                        ></a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
      <!-- Features section End -->

      <!-- User Reviews section Start -->
      <section
         class="user-reviews-swiper section-padding container flex flex-col items-center justify-center overflow-hidden px-3 2xl:px-0"
      >
        <x-heading load="Tripen is a favorite among people" title="Transform your online presence with our innovative"
               />
       

         <div class="swiper-wrapper my-4 w-full md:my-7 lg:my-9 xl:my-12">
            <!-- Card 1 -->
            @foreach ($testimonials as $testimonial)
               
         
            <div data-aos="flip-left" class="swiper-slide urs-card">
               <div class="urs-header">
                  <div class="urs-user-img">
                     <img
                        src="{{ $testimonial->image ? $testimonial->image : "https://avatar.iran.liara.run/public" }}"
                        alt="{{ $testimonial->name }}"
                     />
               
                  </div>
                  <div>
                     <h6>{{ $testimonial->name }}</h6>
                     <span>{{ $testimonial->profession }}</span>
                  </div>
               </div>
               <div class="urs-body">
                  <p>
                     “{{ $testimonial->content }} ”
                  </p>
               
               </div>
            </div>
               @endforeach

         </div>

         <div
            data-aos="fade-in"
            class="reviews-swiper-pagination static mx-auto w-fit text-center"
         ></div>
      </section>
      <!-- User Reviews section End -->

      <!-- Blog Section Start -->
      <section
         class="section-padding container flex flex-col items-center justify-center overflow-hidden px-3 2xl:px-0"
      >
        <x-heading load=" Articles & Travel Guiding" title="Travel has helped us to understand the meaning of life and it has
            helped us <br />
            become better people."
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

      <!-- Contact Us Section Start  -->
      <section class="section-padding overflow-hidden bg-primary-10">
         <div
            class="container grid gap-10 px-3 md:grid-cols-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:px-2"
         >
            <div
               data-aos="flip-left"
               class="flex size-fit flex-col px-5 md:col-span-4 xl:px-0"
            >
               <h2 class="heading-2 !mb-0 !text-start xl:!leading-[64px]">
                  We Provide The most Suitable and quality real estate
               </h2>

               <div class="mt-4 md:mt-8 lg:mt-14 xl:mt-20">
                  <h4
                     class="text-xl font-medium text-nature-500 md:text-2xl lg:text-3xl xl:text-[34px]"
                  >
                     Get in touch
                  </h4>
                  <p
                     class="mt-1.5 font-poppins text-nature-300 md:mt-2.5 lg:mt-3 lg:text-lg"
                  >
                     Fill up the form our Team will get back to you within 24
                     hours.
                  </p>
                  <div
                     class="mt-3.5 flex items-center gap-x-3 md:mt-5 md:gap-x-4 lg:mt-6 lg:gap-x-5 xl:mt-[30px] xl:gap-x-6"
                  >
                     <a
                        href="{{ $settings->facebook }}"
                        class="text-nature-400 transition-all hover:text-[#1877f2]"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><i class="fa-brands fa-square-facebook text-2xl"></i
                     ></a>
                     <a
                        href="{{ $settings->instagram }}"
                        class="text-nature-400 transition-all hover:text-[#c32aa3]"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><i class="fa-brands fa-square-instagram text-2xl"></i
                     ></a>
                     <a
                        href="{{ $settings->linkedin }}"
                        class="text-nature-400 transition-all hover:text-[#0a66c2]"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><i class="fa-brands fa-linkedin text-2xl"></i
                     ></a>
                     <a
                        href="{{ $settings->twitter }}"
                        class="text-nature-400 transition-all hover:text-black"
                        target="_blank"
                        rel="noopener noreferrer"
                        ><i class="fa-brands fa-square-x-twitter text-2xl"></i
                     ></a>
                  </div>
                  <div
                     class="mt-5 flex flex-col gap-y-4 md:mt-10 md:gap-y-5 lg:mt-14 lg:gap-y-6 xl:mt-[70px] xl:gap-y-7"
                  >
                     <div class="flex gap-x-2 lg:gap-x-3">
                        <div
                           class="flex size-10 items-center justify-center rounded-md bg-primary xl:size-12"
                        >
                           <i
                              class="fa-solid fa-phone-volume text-lg text-white xl:text-xl"
                           ></i>
                        </div>
                        <div class="size-fit">
                           <p
                              class="font-poppins font-medium text-nature-400 lg:text-lg"
                           >
                             {{$settings->support_phone}}
                           </p>
                           <span
                              class="font-poppins text-sm font-normal text-nature-200"
                              >Help phone support</span
                           >
                        </div>
                     </div>
                     <div class="flex gap-x-2 lg:gap-x-3">
                        <div
                           class="flex size-10 items-center justify-center rounded-md bg-primary xl:size-12"
                        >
                           <i
                              class="fa-solid fa-envelope text-lg text-white xl:text-xl"
                           ></i>
                        </div>
                        <div class="size-fit">
                           <p
                              class="font-poppins font-medium text-nature-400 lg:text-lg"
                           >
                              {{$settings->support_email}}
                           </p>
                           <span
                              class="font-poppins text-sm font-normal text-nature-200"
                              >Help email support</span
                           >
                        </div>
                     </div>
                     <div class="flex gap-x-2 lg:gap-x-3">
                        <div
                           class="flex size-10 items-center justify-center rounded-md bg-primary xl:size-12"
                        >
                           <i
                              class="fa-solid fa-map-pin text-lg text-white xl:text-xl"
                           ></i>
                        </div>
                        <div class="size-fit">
                           <p
                              class="font-poppins font-medium text-nature-400 lg:text-lg"
                           >
                              {{$settings->address}}
                           </p>
                           <span
                              class="font-poppins text-sm font-normal text-nature-200"
                              >Our office address</span
                           >
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div
               data-aos="flip-left"
               class="rounded-2xl bg-white p-7 pt-12 md:col-span-6"
            >
            
            <form  action="/send" method="POST" class="grid w-full gap-2.5 md:gap-4 lg:gap-5 xl:gap-6"  >
                  @csrf
                  <div class="w-full">
                     <label
                        for="name"
                        class="mb-1.5 block font-poppins text-base font-medium text-nature-600 md:mb-2.5 lg:mb-3"
                        >Your Name</label
                     >
                     <div>
                     <input
                        type="text"
                        placeholder="Enter your name"
                        id="name"
                        name="name"
                        class="placeholder:font-poppins placeholder:text-sm placeholder:text-nature-50"
                     />
                     @error('name')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                     @enderror
                     </div>
                  </div>

                   <div class="w-full">
                     <label
                        for="subject"
                        class="mb-1.5 block font-poppins text-base font-medium text-nature-600 md:mb-2.5 lg:mb-3"
                        >Subject</label
                     >
                     <div>
                     <input
                        type="text"
                        placeholder="Enter your subject"
                        id="subject"
                        name="subject"
                        class="placeholder:font-poppins placeholder:text-sm placeholder:text-nature-50"
                     />

                     @error('subject')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                     @enderror
                     </div>

                  </div>

                  <div
                     class="grid grid-cols-2 gap-2.5 md:gap-4 lg:gap-5 xl:gap-6"
                  >
                     <div class="w-full">
                        <label
                           for="email"
                           class="mb-1.5 block font-poppins text-base font-medium text-nature-600 md:mb-2.5 lg:mb-3"
                           >Email</label
                        >
                        <div>
                        <input
                           type="email"
                           placeholder="Enter your email"
                           id="email"
                           name="email"
                           class="placeholder:font-poppins placeholder:text-sm placeholder:text-nature-50"
                        />
                        @error('email')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                     @enderror
                     </div>
                     </div>
                     <div class="w-full">
                        <label
                           class="mb-1.5 block font-poppins text-base font-medium text-nature-600 md:mb-2.5 lg:mb-3"
                           for="phone"
                           >Phone</label
                        >
                        <div>
                        <input
                           id="phone"
                           type="text"
                           name="phone"
                           placeholder="Enter your phone"
                           class="placeholder:font-poppins placeholder:text-sm placeholder:text-nature-50"
                        />
                        @error('phone')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                     @enderror
                     </div>
                     </div>
                  </div>

                  

                  <div class="w-full">
                     <label
                        class="mb-1.5 block font-poppins text-base font-medium text-nature-600 md:mb-2.5 lg:mb-3"
                        for="message"
                        >Message</label
                     >
                     <textarea
                        name="message"
                        id="message"
                        name="message"
                        placeholder="Your message"
                        rows="8"
                        class="max-h-36 placeholder:font-poppins placeholder:text-sm placeholder:text-nature-50 md:max-h-40 lg:max-h-48 xl:max-h-56"
                     ></textarea>
                     @error('message')
                        <p class="text-red-500 text-sm mt-1">{{ $message }}</p>
                     @enderror
                     </div>
                  </div>

                  <div>
                     <button
                        type="submit"
                        class="rounded-xl bg-primary px-8 py-3.5 font-poppins font-medium text-white transition-all hover:bg-primary-400 md:px-9 md:py-4 lg:px-10 lg:py-5 lg:text-lg xl:px-11 xl:py-[22px]"
                     >
                        Send Message
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
      <!-- Contact Us Section End  -->

      <!-- CTA Section Start -->
      <section class="section-padding">
         <div
            data-aos="fade-up"
            data-aos-duration="1500"
            class="container grid max-w-[1600px] items-center gap-5 rounded-[40px] bg-primary bg-[url('assets/map.html')] bg-center bg-no-repeat p-8 text-white md:grid-cols-2 md:p-12 lg:grid-cols-3 lg:p-16 xl:grid-cols-4 xl:p-20 2xl:p-[100px]"
         >
            <div class="mx-auto max-h-[300px] max-w-[300px] md:mx-0">
               <img
                  src="assets/images/image-58.png"
                  alt="Homelist_cta"
                  class="size-full rounded-full"
               />
            </div>
            <div class="xl:col-span-2">
               <h3
                  class="mb-3 text-center text-3xl font-bold -tracking-tight md:text-start lg:text-4xl xl:text-5xl"
               >
                  Travel Matter
               </h3>
               <p
                  class="text-normal text-center font-poppins text-sm md:text-start md:text-base lg:text-lg"
               >
                  We believe sustainable tourism matters. MAKE TRAVEL
                  MATTER&reg; <br />is our commitment to preserving the planet.
               </p>
            </div>
            <div
               class="mx-auto mt-5 md:col-span-2 lg:col-span-1 lg:mt-0 lg:justify-self-end"
            >
               <a
                  href="#"
                  class="size-fit rounded-full bg-secondary-400 px-7 py-[13px] text-center font-poppins text-sm md:px-8 md:py-[15px] md:text-base md:font-medium lg:px-9 lg:py-[17px] lg:text-lg lg:font-semibold xl:px-10"
                  >Find Destination</a
               >
            </div>
         </div>
      </section>
      <!-- CTA Section End -->
    </x-templateone.layout>