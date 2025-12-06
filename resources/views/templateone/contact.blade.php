<x-templateone.layout>

    <x-breadcrumb heading="Contact" page="Contact" />

      <!-- Contact Info Started -->
      <section
         class="gap-30 section-padding-120 container grid px-4 sm:grid-cols-2 md:grid-cols-3 xl:px-0"
      >
         <!-- Card 1 -->
         <div
            class="p-30 flex flex-col items-center justify-center rounded-[20px] border border-new-200"
         >
            <div
               class="flex size-12 items-center justify-center rounded-[5px] bg-secondary text-white md:size-14 lg:size-16 xl:size-20"
            >
               <i
                  class="fa-solid fa-paper-plane text-xl md:text-2xl lg:text-3xl xl:text-4xl"
               ></i>
            </div>
            <h3
               class="mb-1.5 mt-3 text-center text-xl font-medium text-new-900 md:mb-2 md:mt-3.5 lg:mb-2.5 lg:mt-4 lg:text-2xl xl:mt-5 xl:text-3xl 2xl:text-[34px]"
            >
               Email
            </h3>
            <p
               class="mb-1.5 text-center font-poppins text-sm text-new-200 md:mb-2 md:text-base lg:mb-2.5 lg:text-lg"
            >
               {!! $settings->contact_email!!}
            </p>
            <p
               class="text-center font-poppins text-sm text-new-200 md:text-base lg:text-lg"
            >
               {!! $settings->support_email  !!}
            </p>
         </div>
         <!-- Card 2 -->
         <div
            class="p-30 flex flex-col items-center justify-center rounded-[20px] border border-new-200"
         >
            <div
               class="flex size-12 items-center justify-center rounded-[5px] bg-secondary text-white md:size-14 lg:size-16 xl:size-20"
            >
               <i
                  class="fa-solid fa-map-pin text-xl md:text-2xl lg:text-3xl xl:text-4xl"
               ></i>
            </div>
            <h3
               class="mb-1.5 mt-3 text-center text-xl font-medium text-new-900 md:mb-2 md:mt-3.5 lg:mb-2.5 lg:mt-4 lg:text-2xl xl:mt-5 xl:text-3xl 2xl:text-[34px]"
            >
               Location
            </h3>
            <p
               class="mb-1.5 text-center font-poppins text-sm text-new-200 md:mb-2 md:text-base lg:mb-2.5 lg:text-lg"
            >
              {!! $settings->address  !!}, {!! $settings->city  !!}
            </p>
            <p
               class="text-center font-poppins text-sm capitalize text-new-200 md:text-base lg:text-lg" style = "text-transform: capitalize"
            >
               {!! $settings->state  !!}, {!! $settings->country  !!}
            </p>
         </div>
         <!-- Card 3 -->
         <div
            class="p-30 mx-auto flex w-full flex-col items-center justify-center rounded-[20px] border border-new-200 sm:col-span-2 sm:w-1/2 md:col-span-1 md:mx-0 md:w-auto"
         >
            <div
               class="flex size-12 items-center justify-center rounded-[5px] bg-secondary text-white md:size-14 lg:size-16 xl:size-20"
            >
               <i
                  class="fa-solid fa-phone-volume text-xl md:text-2xl lg:text-3xl xl:text-4xl"
               ></i>
            </div>
            <h3
               class="mb-1.5 mt-3 text-center text-xl font-medium text-new-900 md:mb-2 md:mt-3.5 lg:mb-2.5 lg:mt-4 lg:text-2xl xl:mt-5 xl:text-3xl 2xl:text-[34px]"
            >
               Phone
            </h3>
            <p
               class="mb-1.5 text-center font-poppins text-sm text-new-200 md:mb-2 md:text-base lg:mb-2.5 lg:text-lg"
            >
              {!! $settings->contact_phone  !!}
            </p>
            <p
               class="text-center font-poppins text-sm text-new-200 md:text-base lg:text-lg"
            >
               {!! $settings->support_phone  !!}
            </p>
         </div>
      </section>
      <!-- Contact Info Ended -->

      <!-- Map Started -->
      <section class="h-[650px] w-full">
         <iframe
            class="h-full w-full border-0"
            src="{{ $settings->map_url }}"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
         ></iframe>
      </section>
      <!-- Map Ended -->

      <!-- Contact Form Started -->
      <section class="my-5">
         <div
            class="section-padding-120 container rounded-[20px] px-4 shadow-shadow10 xl:px-0"
         >
            <div class="container flex max-w-[850px] flex-col items-center">
               <p
                  class="text-center font-poppins text-lg font-medium text-secondary"
               >
                  Contact Us
               </p>
               <h2
                  class="common-details-heading mb-[30px] text-center sm:mb-[35px] md:mb-[40px] lg:mb-[45px] xl:mb-[50px] 2xl:!mb-[60px]"
               >
                  Do you have any <br class="hidden xl:block" />
                  question?
               </h2>
               <form action="#" class="gap-30 flex w-full flex-col">
                  <div class="gap-30 grid grid-cols-2">
                     <input
                        type="text"
                        placeholder="Your Name"
                        class="rounded-[20px] bg-new-100 focus:border-secondary focus:ring-secondary"
                     />
                     <input
                        type="text"
                        placeholder="Your E-mail"
                        class="rounded-[20px] bg-new-100 focus:border-secondary focus:ring-secondary"
                     />
                  </div>
                  <div class="gap-30 grid grid-cols-2">
                     <input
                        type="text"
                        placeholder="Phone Number"
                        class="rounded-[20px] bg-new-100 focus:border-secondary focus:ring-secondary"
                     />
                     <input
                        type="text"
                        placeholder="Subject"
                        class="rounded-[20px] bg-new-100 focus:border-secondary focus:ring-secondary"
                     />
                  </div>
                  <div class="w-full">
                     <textarea
                        placeholder="Your Message"
                        class="h-[130px] rounded-[20px] bg-new-100 focus:border-secondary focus:ring-secondary"
                     ></textarea>
                  </div>
                  <button
                     class="mx-auto size-fit rounded-full bg-secondary px-[30px] py-2.5 text-center font-poppins text-lg font-medium text-white"
                  >
                     Submit Now
                  </button>
               </form>
            </div>
         </div>
      </section>
      <!-- Contact Form Ended -->
</x-templateone.layout>