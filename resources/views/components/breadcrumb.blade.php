<!-- Header Started -->
      <section class="bg-primary-10">
         <div
            class="h-auto w-full bg-cover bg-center bg-no-repeat"
            style="background-image: url(_assets/images/layer.html)"
         >
            <div
               class="container flex h-[225px] flex-col items-center justify-center sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]"
            >
               <h1 class="common-hero-heading">{{ $heading }}</h1>

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
                              >{{ $page }}</span
                           >
                        </div>
                     </li>
                  </ol>
               </div>
            </div>
         </div>
      </section>
      <!-- Header Ended -->