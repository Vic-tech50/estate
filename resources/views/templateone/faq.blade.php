<x-templateone.layout>

  <!-- Details Started -->
      <section class="bg-primary-10">
         <div
            class="h-auto w-full bg-cover bg-center bg-no-repeat"
            style="background-image: url(_assets/images/layer.html)"
         >
            <div
               class="container flex h-[225px] flex-col items-center justify-center sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]"
            >
               <h1 class="common-hero-heading">FAQs</h1>

               <div class="flex" aria-label="Breadcrumb">
                  <ol class="inline-flex items-center space-x-1 md:space-x-2">
                     <li class="inline-flex items-center">
                        <a
                           href="/"
                           class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white"
                        >
                           <i class="fa-solid fa-house me-2.5 h-3 w-3"></i>
                           Home
                        </a>
                     </li>

                     <li aria-current="page">
                        <div class="flex items-center">
                           <i
                              class="fa-solid fa-chevron-right mx-1 h-3 w-3 text-gray-400"
                           ></i>
                           <span
                              class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2"
                              >FAQs</span
                           >
                        </div>
                     </li>
                  </ol>
               </div>
            </div>
         </div>
      </section>
      <!-- Details Ended -->

      <!-- Accordion Started -->
      <section
         class="section-padding-120 gap-30 container grid px-4 md:grid-cols-2 xl:px-0"
      >
         <div>
            <div
               id="accordion-flush"
               data-accordion="collapse"
               data-active-classes="bg-white shadow-shadow10 dark:bg-gray-900 text-gray-900 dark:text-white mb-4"
               data-inactive-classes="text-gray-500 dark:text-gray-400 mb-4"
            >
              @foreach ($faqs as $faq)
               <h2
                  id="accordion-flush-heading-{{ $loop->index + 1 }}"
                  class="rounded-[20px] bg-white shadow-shadow10"
               >
                  <button
                     type="button"
                     class="px-30 flex w-full items-center gap-3 rounded-t-[20px] bg-white py-5 font-medium"
                     data-accordion-target="#accordion-flush-body-{{ $loop->index + 1 }}"
                     aria-expanded="true"
                     aria-controls="accordion-flush-body-{{ $loop->index + 1 }}"
                  >
                     <i
                        class="fa-solid fa-circle-plus shrink-0 rotate-180 text-xl text-secondary"
                        data-accordion-icon
                        aria-hidden="true"
                     ></i>
                     <span class="text-xl text-new-900"
                        >{{ $faq->question }}</span
                     >
                  </button>
               </h2>
               <div
                  id="accordion-flush-body-{{ $loop->index + 1 }}"
                  class="p-30 mb-4 hidden rounded-b-[20px] bg-white !pt-0 shadow-shadow10"
                  aria-labelledby="accordion-flush-heading-{{ $loop->index + 1 }}"
               >
                  <div class="pt-5 dark:border-gray-700">
                     <p class="text-gray-500 dark:text-gray-400">
                        {{ $faq->answer }}
                     </p>
                  </div>
               </div>
                  
              @endforeach
            

            </div>
         </div>
      </section>
      <!-- Accordion Ended -->
 </x-templateone.layout>    