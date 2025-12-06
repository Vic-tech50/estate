
<x-templateone.layout>

  <x-breadcrumb heading="Blog" page="Blog" />


      <!-- Content Started -->
      <section
         class="section-padding-120 gap-30 container box-border grid px-3 lg:grid-cols-3 2xl:px-0"
      >
         <div class="w-full lg:col-span-2">
            @foreach ($blogs as $blog )
                
            
            <!-- One -->
            <div class="w-full">
               <div class="relative w-full">
                  <img
                     src="{{ $blog->image ?? $blog->category == 'Real Estate' ? 'assets/images/image-22.png' : 'assets/images/image-23.png' }}"
                     alt="Blogs"
                     class="h-[60px] w-full rounded-[20px] object-cover object-center"
                  />

                  <div
                     class="absolute bottom-5 left-5 size-fit rounded-[10px] bg-secondary px-3.5 py-2 text-center text-white md:px-5 md:py-2.5"
                  >
                     <p
                        class="text-sm font-medium sm:text-base md:text-xl lg:text-2xl"
                     >
                        {{ \Carbon\Carbon::parse($blog->created_at)->format('d') }}
                     </p>
                     <p class="font-poppins text-xs font-medium md:text-sm">
                        {{ \Carbon\Carbon::parse($blog->created_at)->format('F') }}
                     </p>
                  </div>
               </div>

               <a
                  href="/blog_details/{{ $blog->slug }}"
                  class="my-2.5 block text-xl font-bold tracking-tight text-new-900 transition-all hover:text-secondary-400 hover:underline md:my-3 md:text-2xl lg:my-4 lg:text-3xl xl:my-5 xl:text-4xl 2xl:text-5xl 2xl:leading-[64px]"
               >
                 {{$blog->title}}
               </a>

               <div
                  class="mb-2.5 flex items-center gap-x-2.5 font-poppins text-sm font-semibold text-new-900 md:mb-3 md:gap-x-3 lg:mb-4 lg:gap-x-4 xl:mb-5 xl:gap-x-5"
               >
                  <span class="capitalize" style = "text-transform: capitalize">By {{$blog->agent_name}}</span
                  ><i class="fa-solid fa-circle text-[5px] text-secondary"></i
                  ><span>{{$blog->category}}</span
                  ><i class="fa-solid fa-circle text-[5px] text-secondary"></i
                  ><span>Comments (50)</span>
               </div>

              <p class="description-p my-3 blog-preview">
    {{ \Str::limit(strip_tags($blog->content), 200) }}
</p> <br><br>
            </div>

            <style>
.blog-preview {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

            @endforeach

          

         </div>

         {{ $blogs->links() }}
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
                  <li class="transition-all hover:text-secondary-400  p-2">
                     <a href="#">Modern Luxury Living</a>
                  </li>
                  <li class="transition-all hover:text-secondary-400  p-2 ">
                     <a href="#">Pro Home Finders</a>
                  </li>
                  <li class="transition-all hover:text-secondary-400  p-2">
                     <a href="#">Free Service</a>
                  </li>
                  <li class="transition-all hover:text-secondary-400  p-2">
                     <a href="#">Rent Home</a>
                  </li>
                  <li class="transition-all hover:text-secondary-400  p-2">
                     <a href="#">Home Awaits</a>
                  </li>
                  <li class="transition-all hover:text-secondary-400  p-2">
                     <a href="#">Forever Home</a>
                  </li>
               </ol>
            </div>

            

           
         </div>
      </section>
      <!-- Content Ended -->

      <hr />

    </x-templateone.layout>