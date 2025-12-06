<x-templateone.layout>

      <!-- Landing Start -->
      <section
         class="section-padding container flex flex-col gap-14 px-3 lg:flex-row 2xl:px-0"
      >
         <div class="grid flex-1">
            <div>
               <h1
                  data-aos="fade-right"
                  class="mb-4 text-center text-5xl font-bold -tracking-[2%] text-nature-800 lg:mb-6 lg:text-start lg:text-6xl lg:leading-[84px] xl:mb-[30px] xl:text-7xl"
               >
                   {!! $settings->header !!}
               </h1>
               <p
                  data-aos="fade-right"
                  data-aos-delay="150"
                  class="text-center font-poppins text-lg font-normal -tracking-[2%] text-nature-300 md:text-xl lg:text-start lg:text-2xl"
               >
                  {!! $settings->header_content !!}
               </p>

               <!-- Form from SM to Large -->
               <div
                  data-aos="fade-down"
                  data-aos-delay="300"
                  class="relative z-20 mt-7 hidden h-[70px] sm:block md:mt-10 md:h-[90px] lg:mt-12 lg:h-[120px] xl:mt-[60px]"
               >
                  <form
                     action="/search"
                     method="GET"
                     class="my__gradient absolute left-0 top-0 flex w-full items-center justify-between rounded-md border border-[#ededed] bg-white px-4 py-4 shadow-shadow4 md:px-6 md:py-[18px] lg:w-[900px] lg:px-8 lg:py-5 xl:px-10 xl:py-[25px]"
                  >
                     <div class="space-y-1 lg:space-y-[10px]">
                        <label
                           for="city"
                           class="font-poppins text-xs font-normal text-nature-200 md:text-sm lg:text-base"
                        >
                           City/Street
                        </label>
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
                           <label
                              for="type"
                              class="font-poppins text-xs font-normal text-nature-200 md:text-sm lg:text-base"
                           >
                              Property Type
                           </label>
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
                           <label
                              for="price"
                              class="font-poppins text-xs font-normal text-nature-200 md:text-sm lg:text-base"
                           >
                              Price Range
                           </label>
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
                              class="flex size-fit items-center gap-x-4 rounded-xl bg-primary px-2.5 py-2 font-normal text-white md:px-3 md:py-[10px] lg:px-[14px] lg:py-[14px] xl:px-4 xl:py-4"
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
                  </form>
               </div>
            </div>

            <div
               data-aos="fade-up"
               data-aos-delay="300"
               class="mx-auto mt-4 flex size-fit gap-x-4 md:mt-6 md:gap-x-9 lg:mx-0 lg:mt-8 lg:gap-x-12 xl:mt-10 xl:gap-x-[60px]"
            >
               <div>
                  <h2 class="text-[34px] font-medium text-nature-500 lg:mb-3">
                     <span id="h2-award" class="odometer">0</span>K<span
                        class="text-primary"
                        >+</span
                     >
                  </h2>
                  <p
                     class="font-poppins font-normal text-nature-200 lg:text-lg"
                  >
                     Award Winning
                  </p>
               </div>

               <div>
                  <h2 class="text-[34px] font-medium text-nature-500 lg:mb-3">
                     <span id="h2-property" class="odometer"></span>K<span
                        class="text-primary"
                        >+</span
                     >
                  </h2>
                  <p
                     class="font-poppins font-normal text-nature-200 lg:text-lg"
                  >
                     Property Ready
                  </p>
               </div>

               <div>
                  <h2 class="text-nature-500lg:mb-3 text-[34px] font-medium">
                     <span id="h2-customer" class="odometer"></span>M<span
                        class="text-primary"
                        >+</span
                     >
                  </h2>
                  <p
                     class="font-poppins font-normal text-nature-200 lg:text-lg"
                  >
                     Happy Customer
                  </p>
               </div>
            </div>
         </div>
         <div data-aos="fade-left" class="mx-auto size-fit">
            <img
               src="assets/images/image-59.png"
               alt="Homelist2"
               class="h-auto md:max-w-[500px] lg:max-w-[617px]"
            />
         </div>

         <!-- Small to SM -->
         <div class="container -mt-5 sm:hidden">
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
      </section>
      <!-- Landing End -->

      <!-- How it Works Start -->
      <section
         class="section-padding container flex flex-col items-center justify-center"
      >
         <h2 data-aos="zoom-in-up" class="heading-2">How it work</h2>
         <p data-aos="zoom-in-up" data-aos-delay="150" class="heading-tagline">
            Keep calm & travel on
         </p>

         <div
            class="relative flex w-full flex-col items-center justify-center gap-20 overflow-hidden md:flex-row md:justify-between md:gap-16 lg:gap-24 xl:gap-32 2xl:gap-40"
         >
            <div
               data-aos="zoom-in"
               data-aos-delay="200"
               class="absolute -z-10 rotate-90 md:left-0 md:top-[16%] md:rotate-180 lg:left-[110px] lg:top-[17%]"
            >
               <svg
                  width="1058"
                  height="172"
                  viewBox="0 0 1058 172"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M1055.84 5.50012C1037.24 30.9095 899.149 172.169 757.882 170.593C626.705 169.129 572.18 -46.8501 330.892 75.2073C118.89 182.45 68.0815 65.6482 1.51415 1.91464"
                     stroke="#B3B8C7"
                     stroke-width="2.51953"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-dasharray="5.04 15.12"
                  />
               </svg>
            </div>
            <!-- Card 1 -->
            <div data-aos="zoom-in" class="size-fit !max-w-[322px]">
               <img
                  src="assets/images/image-61.png"
                  alt="Homelist2_how-it-work"
               />
               <div class="mt-30 space-y-3 md:space-y-4 lg:space-y-5">
                  <h3
                     class="text-center text-xl font-medium text-nature-500 lg:text-[25px] xl:text-[34px]"
                  >
                     Book & Relax
                  </h3>
                  <p
                     class="text-center font-poppins text-sm font-normal text-nature-200 md:text-base xl:text-lg"
                  >
                     We realize ideas from simple to complex, everything becomes
                     easy to use.
                  </p>
               </div>
            </div>

            <!-- Card 2 -->
            <div data-aos="zoom-in" class="size-fit !max-w-[322px]">
               <img
                  src="assets/images/image-62.png"
                  alt="Homelist2_how-it-work"
               />
               <div class="mt-30 space-y-3 md:space-y-4 lg:space-y-5">
                  <h3
                     class="text-center text-xl font-medium text-nature-500 lg:text-[25px] xl:text-[34px]"
                  >
                     Smart checklist
                  </h3>
                  <p
                     class="text-center font-poppins text-sm font-normal text-nature-200 md:text-base xl:text-lg"
                  >
                     We realize ideas from simple to complex, everything becomes
                     easy to use.
                  </p>
               </div>
            </div>

            <!-- Card 2 -->
            <div data-aos="zoom-in" class="size-fit !max-w-[322px]">
               <img
                  src="assets/images/image-63.png"
                  alt="Homelist2_how-it-work"
               />
               <div class="mt-30 space-y-3 md:space-y-4 lg:space-y-5">
                  <h3
                     class="text-center text-xl font-medium text-nature-500 lg:text-[25px] xl:text-[34px]"
                  >
                     Save more
                  </h3>
                  <p
                     class="text-center font-poppins text-sm font-normal text-nature-200 md:text-base xl:text-lg"
                  >
                     We realize ideas from simple to complex, everything becomes
                     easy to use.
                  </p>
               </div>
            </div>
         </div>
      </section>
      <!-- How it Works End -->

      <!-- Service Start -->
      <section
         class="section-padding container flex flex-col items-center justify-center px-3 2xl:px-0"
      >
         <h2 data-aos="zoom-in-up" class="heading-2 xl:!leading-[64px]">
            You can count on us for the <br />
            best destinations
         </h2>

         <p data-aos="zoom-in-up" data-aos-delay="150" class="heading-tagline">
            Exponent is a pixel perfect theme, that is tailor made for startups
            and businesses. <br />
            Build your website swiftly and easily.
         </p>

         <div
            class="grid w-full gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:gap-10"
         >
            <!-- Card 1 -->

              @foreach ($property as $property)
            <div data-aos="zoom-in" class="h2-service-card">
               <div class="h2-service-img">
                  <img
                     src="{{ $property->thumbnail}}"
                     alt="{{ $property->title}}"
                     class="max-h-[250px] w-full object-cover"
                  />
                  <div class="h2-service-price">
                     <span> {{ $property->currency }}  {{ $property->price }} </span>
                  </div>
               </div>
               <div
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  class="h2-service-body"
               >
                  <a href="/property_details/{{ $property->title }}" class="title"
                     > {{ $property->title }} </a
                  >
                  <p>  {{ $property->address}} ,{{ $property->state }}  {{ $property->country}} </p>
                  <div class="h2-service-icon">
                     <div>
                        <i class="fa-solid fa-bed text-base text-new-900"></i>
                        <span>{{ $property->bedrooms ?? 0 }} Beds</span>
                     </div>
                     <div>
                        <i class="fa-solid fa-bath text-base text-new-900"></i>
                        <span>{{ $property->bathrooms ?? 0 }} Baths</span>
                     </div>
                  </div>
                  <a href="/property_details/{{ $property->title }}"
                     ><span>View Details</span>
                     <i
                        class="fa-solid fa-arrow-right text-base font-black text-primary"
                     ></i
                  ></a>
                
               </div>
            </div>

               @endforeach
         
      
         </div>

          <a
            data-aos="flip-up"
            href="/property"
            class="group mx-auto mt-3 flex size-fit items-center gap-x-2 rounded-full border border-[#F1F1F1] px-4 py-3 text-center font-poppins text-sm font-medium text-nature-500 transition-all duration-200 ease-in-out hover:border-primary hover:text-primary sm:px-5 md:mt-4 md:px-6 md:py-3.5 md:text-base lg:mt-5 lg:px-7 lg:py-4 lg:text-lg xl:mt-7 xl:px-8"
            ><span>View All</span
            ><i
               class="fa-solid fa-arrow-right-long text-sm text-nature-500 group-hover:text-primary md:text-base lg:text-lg"
            ></i
         ></a>
      </section>
      <!-- Service End -->

      <!-- Features Start -->
      <section class="py-6 md:py-9 lg:py-12 xl:py-16 2xl:py-[90px]">
         <div
            class="container flex max-w-[1410px] flex-col gap-8 rounded-[40px] bg-new-100 p-7 md:flex-row md:gap-14 lg:gap-16 lg:p-10 xl:gap-20 xl:p-12 2xl:gap-24 2xl:p-[60px]"
         >
            <div data-aos="flip-up" class="flex flex-1 flex-col justify-center">
               <h2
                  class="mb-4 text-center text-3xl font-bold tracking-tight text-nature-500 md:text-start lg:mb-5 lg:text-4xl xl:mb-6 xl:text-5xl xl:leading-[64px]"
               >
                  Our Experience Will Make Us Your Best Choice
               </h2>

               <p
                  class=" prose prose-sm prose-slate text-2xl text-center font-poppins text-base font-normal text-nature-200 md:text-start lg:text-lg"
               >
                 {!! $settings->about_us !!}
               </p>
               <a
                   type="button"
                  data-drawer-target="drawer-right-example"
                  data-drawer-show="drawer-right-example"
                  data-drawer-placement="right"
                  aria-controls="drawer-right-example"
                  class="mx-auto cursor-pointer my-5 block size-fit rounded-lg bg-primary px-[34px] py-4 font-poppins text-sm font-medium text-white md:mx-0 md:my-7 md:text-base lg:my-8 lg:text-lg xl:my-10"
                  >Learn More</a
               >

               <div
                  class="flex justify-between gap-x-4 md:justify-start md:gap-x-6 lg:gap-x-8 xl:gap-x-10"
               >
                  <div>
                     <h3
                        class="mb-1.5 text-3xl font-bold tracking-tight text-nature-500 md:mb-2.5 lg:mb-3 lg:text-4xl xl:text-5xl"
                     >
                        30
                     </h3>
                     <p
                        class="font-poppins text-sm font-medium text-nature-400 md:text-base lg:text-lg lg:leading-[26px]"
                     >
                        Years of <br />
                        Experiences
                     </p>
                  </div>
                  <div>
                     <h3
                        class="mb-1.5 text-3xl font-bold tracking-tight text-nature-500 md:mb-2.5 lg:mb-3 lg:text-4xl xl:text-5xl"
                     >
                        50
                     </h3>
                     <p
                        class="font-poppins text-sm font-medium text-nature-400 md:text-base lg:text-lg lg:leading-[26px]"
                     >
                        Destination <br />
                        Collaboration
                     </p>
                  </div>
                  <div>
                     <h3
                        class="mb-1.5 text-3xl font-bold tracking-tight text-nature-500 md:mb-2.5 lg:mb-3 lg:text-4xl xl:text-5xl"
                     >
                        1000<span class="text-primary">+</span>
                     </h3>
                     <p
                        class="font-poppins text-sm font-medium text-nature-400 md:text-base lg:text-lg lg:leading-[26px]"
                     >
                        Tourist <br />
                        Destination
                     </p>
                  </div>
               </div>
            </div>
            <div data-aos="flip-down" class="mx-auto md:mx-0">
               <img
                  src="assets/images/image-44.png"
                  class="rounded-xl"
                  alt="Homelist2_feature"
               />
            </div>
         </div>
      </section>
      <!-- Features End -->


      <!-- Brand Logo Start -->
      <section
         class="section-padding container flex flex-col items-center justify-center"
      >
         <h4
            data-aos="zoom-in"
            class="text-center text-xl font-medium text-nature-500 lg:text-2xl"
         >
            Trusted by the world's best
         </h4>
         <div
            class="mt-6 flex w-full flex-wrap items-center justify-around gap-3.5 *:mx-auto *:size-fit md:mt-8 lg:mt-12 xl:mt-[60px]"
         >
            <img
               data-aos="zoom-out-up"
               class="col-span-2 md:col-span-1"
               src="assets/images/bg-1.svg"
               alt="Homelist2_brand-logo"
            />
            <img
               data-aos="zoom-out-up"
               data-aos-delay="200"
               src="assets/images/client-1.svg"
               alt="Homelist2_brand-logo"
               class="col-span-2 md:col-span-1"
            />
            <img
               data-aos="zoom-out-up"
               data-aos-delay="250"
               src="assets/images/client-2.svg"
               alt="Homelist2_brand-logo"
               class="col-span-2 md:col-span-1"
            />
            <img
               data-aos="zoom-out-up"
               data-aos-delay="300"
               src="assets/images/client-3.svg"
               alt="Homelist2_brand-logo"
               class="col-span-3 md:col-span-1"
            />
            <img
               data-aos="zoom-out-up"
               data-aos-delay="350"
               src="assets/images/client-4.svg"
               alt="Homelist2_brand-logo"
               class="col-span-3 md:col-span-1"
            />
         </div>
      </section>
      <!-- Brand Logo End -->

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

      <!-- Contact Us Start -->
      <section
         class="section-padding container flex flex-col items-center justify-center"
      >
         <h2 data-aos="zoom-in-up" class="heading-2">How to reach us</h2>
         <p data-aos="zoom-in-up" data-aos-delay="150" class="heading-tagline">
            World-class care for everyone. Our health System offers unmatched,
            expert health care.
         </p>

         <div
            class="flex w-full flex-col gap-3 px-3 md:flex-row md:gap-6 lg:gap-9 xl:gap-12 2xl:px-0"
         >
            <div
               data-aos="flip-left"
               class="relative grid w-full items-stretch justify-start overflow-hidden rounded-[22px] bg-primary-600 p-3.5 text-white md:w-1/2 md:p-5 lg:w-[40.5%] lg:p-7 xl:p-10"
            >
               <div
                  class="absolute -bottom-48 -right-60 size-[447px] rounded-full bg-white opacity-10 shadow-shadow6"
               ></div>
               <div>
                  <h2
                     class="mb-2 text-[20px] font-medium md:mb-2.5 md:text-[26px] lg:mb-3 lg:text-[30px] xl:text-[34px]"
                  >
                     Contact Information
                  </h2>

                  <p class="font-poppins text-base font-normal lg:text-lg">
                     Fill up the form and our Team will get back to you within
                     24 hours.
                  </p>

                  <div
                     class="mt-4 flex flex-col gap-y-4 md:mt-7 md:gap-y-5 lg:mt-10 lg:gap-y-6 xl:mt-[50px] xl:gap-y-7"
                  >
                     <div class="flex gap-x-2 lg:gap-x-3">
                        <div
                           class="flex size-10 items-center justify-center rounded-md bg-primary xl:size-12"
                        >
                           <i
                              class="fa-solid fa-phone-volume text-lg xl:text-xl"
                           ></i>
                        </div>
                        <div class="size-fit">
                           <p class="font-poppins font-medium lg:text-lg">
                              {{$settings->support_phone}}
                           </p>
                           <span class="font-poppins text-sm font-normal"
                              >Help phone support</span
                           >
                        </div>
                     </div>
                     <div class="flex gap-x-2 lg:gap-x-3">
                        <div
                           class="flex size-10 items-center justify-center rounded-md bg-primary xl:size-12"
                        >
                           <i
                              class="fa-solid fa-envelope text-lg xl:text-xl"
                           ></i>
                        </div>
                        <div class="size-fit">
                           <p class="font-poppins font-medium lg:text-lg">
                              {{$settings->support_email}}
                           </p>
                           <span class="font-poppins text-sm font-normal"
                              >Help email support</span
                           >
                        </div>
                     </div>
                     <div class="flex gap-x-2 lg:gap-x-3">
                        <div
                           class="flex size-10 items-center justify-center rounded-md bg-primary xl:size-12"
                        >
                           <i
                              class="fa-solid fa-map-pin text-lg xl:text-xl"
                           ></i>
                        </div>
                        <div class="size-fit">
                           <p class="font-poppins font-medium lg:text-lg">
                             {{$settings->address}}
                           </p>
                           <span class="font-poppins text-sm font-normal"
                              >Our office address</span
                           >
                        </div>
                     </div>
                  </div>
               </div>

               <div
                  class="mt-5 flex size-fit items-center gap-2.5 self-end md:mt-0 md:gap-x-5 lg:gap-x-7"
               >
                  <a href="{{ $settings->facebook }}"
                     ><i
                        class="fa-brands fa-square-facebook text-xl text-white"
                     ></i
                  ></a>
                  <a href="{{ $settings->instagram }}"
                     ><i
                        class="fa-brands fa-square-instagram text-xl text-white"
                     ></i
                  ></a>
                  <a href="{{ $settings->linkedin }}"
                     ><i class="fa-brands fa-linkedin text-xl text-white"></i
                  ></a>
                  <a href="{{ $settings->twitter }}"
                     ><i
                        class="fa-brands fa-square-x-twitter text-xl text-white"
                     ></i
                  ></a>
               </div>
            </div>
            <!-- right side -->
            <div data-aos="flip-right" class="flex-1">
               <form class="grid w-full gap-2.5 md:gap-4 lg:gap-5 xl:gap-6">
                  <div class="w-full">
                     <label
                        for="name"
                        class="mb-1.5 block font-poppins text-base font-medium text-nature-600 md:mb-2.5 lg:mb-3"
                        >Your Name</label
                     >
                     <input
                        type="text"
                        placeholder="Enter your name"
                        id="name"
                        class="placeholder:font-poppins placeholder:text-sm placeholder:text-nature-50"
                     />
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
                        <input
                           type="text"
                           placeholder="Enter your email"
                           id="email"
                           class="placeholder:font-poppins placeholder:text-sm placeholder:text-nature-50"
                        />
                     </div>
                     <div class="w-full">
                        <label
                           class="mb-1.5 block font-poppins text-base font-medium text-nature-600 md:mb-2.5 lg:mb-3"
                           for="phone"
                           >Phone</label
                        >
                        <input
                           id="phone"
                           type="text"
                           placeholder="Enter your phone"
                           class="placeholder:font-poppins placeholder:text-sm placeholder:text-nature-50"
                        />
                     </div>
                  </div>

                  <div class="w-full">
                     <label
                        class="mb-1.5 block font-poppins text-base font-medium text-nature-600 md:mb-2.5 lg:mb-3"
                        for="property"
                        >Property Type</label
                     >
                     <select name="property" id="property">
                        <option
                           value=""
                           class="font-poppins text-sm text-nature-50"
                        >
                           Choose type
                        </option>
                        <option value="property-1">Property 1</option>
                        <option value="property-2">Property 2</option>
                        <option value="property-3">Property 3</option>
                        <option value="property-4">Property 4</option>
                     </select>
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
                        placeholder="Your message"
                        rows="8"
                        class="max-h-36 placeholder:font-poppins placeholder:text-sm placeholder:text-nature-50 md:max-h-40 lg:max-h-48 xl:max-h-56"
                     ></textarea>
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
      <!-- Contact Us End -->

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
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut <br />
               labore et dolore magna aliqua. Ut enim ad minim veniam.
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

   </x-templateone.layout>