<x-templateone.layout>
  <!-- Details Started -->
      <section class="bg-primary-10">
         <div
            class="h-auto bg-cover bg-center bg-no-repeat"
            style="background-image: url(_assets/images/layer.html)"
         >
            <div
               class="container flex h-[225px] flex-col items-center justify-center sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]"
            >
               <h1 class="common-hero-heading">Blog Details</h1>

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
                     <li>
                        <div class="flex items-center">
                           <i
                              class="fa-solid fa-chevron-right mx-1 h-3 w-3 text-gray-400"
                           ></i>
                           <a
                              href="/blogs"
                              class="ms-1 text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white md:ms-2"
                              >Blogs</a
                           >
                        </div>
                     </li>
                     <li aria-current="page">
                        <div class="flex items-center">
                           <i
                              class="fa-solid fa-chevron-right mx-1 h-3 w-3 text-gray-400"
                           ></i>
                           <span
                              class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2"
                              >Blog Details</span
                           >
                        </div>
                     </li>
                  </ol>
               </div>
            </div>
         </div>
      </section>
      <!-- Details Ended -->

      <!-- Blog Details Started -->
      <section
         class="section-padding-120 gap-30 container grid px-4 lg:grid-cols-3 xl:px-0"
      >
         <div class="lg:col-span-2">
            <div class="relative w-full">
               <img
                src="{{ asset($blog->image ?? 'assets/images/image-22.png') }}"
                     alt="{{ $blog->title ?? 'Property' }}"
                  style="height: 500px"
                  alt="Blogs"
                  class="h-[300px] w-full rounded-[20px] object-cover object-center"
               />

               <div
                  class="absolute bottom-5 left-5 size-fit rounded-[10px] bg-secondary px-3.5 py-2 text-center text-white md:px-5 md:py-2.5"
               >
                  <p
                     class="text-sm font-medium sm:text-base md:text-xl lg:text-2xl"
                  >
                     18
                  </p>
                  <p class="font-poppins text-xs font-medium md:text-sm">May</p>
               </div>
            </div>

            <h2
               class="my-2.5 text-xl font-bold tracking-tight text-new-900 md:my-3 md:text-2xl lg:my-4 lg:text-3xl xl:my-5 xl:text-4xl 2xl:text-5xl 2xl:leading-[64px]"
            >
               {{ $blog->title }}
            </h2>

            <div
               class="mb-2.5 flex items-center gap-x-2 font-poppins text-xs font-semibold text-new-900 sm:gap-x-3 md:mb-3 md:gap-x-4 md:text-sm lg:mb-4 lg:gap-x-5 xl:mb-5"
            >
               <span>By Admin</span
               ><i class="fa-solid fa-circle text-[5px] text-secondary"></i
               ><span>{{$blog->category}}</span
               ><i class="fa-solid fa-circle text-[5px] text-secondary"></i
               ><span> {{ \Carbon\Carbon::parse($blog->created_at)->format('d, F , Y') }}</span>
            </div>

            <p class="description-p">
               {!! $blog->content !!}
            </p>

            
          
<div class="my-10 flex items-center justify-between">

   {{-- Previous Post --}}
   @if($previous)
   <div class="gap-30 flex">
      <div>
         <a href="/blog_details/$previous->slug"
            class="flex size-[45px] items-center justify-center rounded-[5px] border border-new-200 transition-all hover:border-secondary hover:text-secondary md:size-[50px] lg:size-[55px] xl:size-[60px]">
            <i class="fa-solid fa-arrow-left text-lg xl:text-xl"></i>
         </a>
      </div>
      <div>
         <p class="font-poppins text-sm font-medium text-new-800 md:text-base lg:text-lg">Previous Post</p>
         <h6 class="text-sm font-bold text-new-900 sm:text-base md:text-lg lg:text-xl">
            {{ $previous->title }}
         </h6>
      </div>
   </div>
   @endif

   {{-- Next Post --}}
   @if($next)
   <div class="gap-30 flex">
      <div>
         <p class="text-end font-poppins text-xs font-medium text-new-800 sm:text-sm md:text-base lg:text-lg">
            Next Post
         </p>
         <h6 class="text-end text-sm font-bold text-new-900 sm:text-base md:text-lg lg:text-xl">
            {{ $next->title }}
         </h6>
      </div>
      <div>
         <a href="/blog_details/$next->slug"
            class="flex size-[45px] items-center justify-center rounded-[5px] border border-new-200 transition-all hover:border-secondary hover:text-secondary md:size-[50px] lg:size-[55px] xl:size-[60px]">
            <i class="fa-solid fa-arrow-right text-lg xl:text-xl"></i>
         </a>
      </div>
   </div>
   @endif

</div>


        


         </div>
         <!-- sidebar -->
         <div class="gap-30 flex w-full flex-col">
            <div class="p-30 rounded-[20px] shadow-shadow10">
               <h4
                  class="text-base font-bold text-new-900 md:text-lg lg:text-xl lg:font-medium xl:text-2xl"
               >
                  Search Here
               </h4>
               <hr class="my-3 bg-new-200 md:my-3.5 lg:my-4 xl:my-5" />

               <form class="mx-auto max-w-md">
                  <label
                     for="default-search"
                     class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                     >Search</label
                  >
                  <div class="relative">
                     <div
                        class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"
                     >
                        <svg
                           class="h-4 w-4 text-gray-500 dark:text-gray-400"
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
                        placeholder="Search..."
                        required
                     />
                     <button
                        type="submit"
                        class="absolute bottom-2.5 end-2.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                     >
                        Search
                     </button>
                  </div>
               </form>
            </div>

            <div class="p-30 rounded-[20px] shadow-shadow10">
               <h4
                  class="text-base font-bold text-new-900 md:text-lg lg:text-xl lg:font-medium xl:text-2xl"
               >
                  Top Categories
               </h4>
               <hr class="my-3 bg-new-200 md:my-3.5 lg:my-4 xl:my-5" />

               <ol
                  class="space-y-5 font-poppins text-sm font-medium text-new-900 md:text-base lg:text-lg"
               >
                  <li class="transition-all hover:text-secondary-400">
                     <a href="#">Modern Luxury Living</a>
                  </li>
                  <li class="transition-all hover:text-secondary-400">
                     <a href="#">Pro Home Finders</a>
                  </li>
                  <li class="transition-all hover:text-secondary-400">
                     <a href="#">Free Service</a>
                  </li>
                  <li class="transition-all hover:text-secondary-400">
                     <a href="#">Rent Home</a>
                  </li>
                  <li class="transition-all hover:text-secondary-400">
                     <a href="#">Home Awaits</a>
                  </li>
                  <li class="transition-all hover:text-secondary-400">
                     <a href="#">Forever Home</a>
                  </li>
               </ol>
            </div>

          

           
         </div>
      </section>
      <!-- Blog Details Ended -->

    </x-templateone.layout>