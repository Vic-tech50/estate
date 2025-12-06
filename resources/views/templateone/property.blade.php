<x-templateone.layout>

  <x-breadcrumb heading="Properties" page="Property" />

      <!-- Content Started -->
      <section class="section-padding-120 container px-4 xl:px-0">
         <div
            class="gap-30 mb-30 flex flex-col items-center justify-between sm:flex-row"
         >
            <div
               class="flex w-full items-center rounded-full border border-new-200 px-4 sm:w-1/2 md:w-1/4 lg:w-[190px]"
            >
               <i class="fa-solid fa-mountain-city text-[#777777]"></i>
               <select
                  class="block w-full rounded-lg border-0 bg-white p-2.5 text-sm text-gray-900 !shadow-none focus:border-0 focus:ring-0"
               >
                  <option selected disabled>Status</option>
                  <option value="1">Status 1</option>
                  <option value="2">Status 2</option>
                  <option value="3">Status 3</option>
                  <option value="4">Status 4</option>
                  <option value="5">Status 5</option>
               </select>
            </div>

            <div
               class="flex w-full items-center rounded-full border border-new-200 px-4 sm:w-1/2 md:w-1/4 lg:w-[300px]"
            >
               <i class="fa-solid fa-layer-group text-[#777777]"></i>
               <select
                  class="block w-full rounded-lg border-0 bg-white p-2.5 text-sm text-gray-900 !shadow-none focus:border-0 focus:ring-0"
               >
                  <option selected disabled>Type</option>
                  <option value="1">Type 1</option>
                  <option value="2">Type 2</option>
                  <option value="3">Type 3</option>
                  <option value="4">Type 4</option>
                  <option value="5">Type 5</option>
               </select>
            </div>

            <div
               class="flex w-full items-center rounded-full border border-new-200 px-4 sm:w-1/2 md:w-1/4 lg:flex-1"
            >
               <i class="fa-solid fa-map-pin text-[#777777]"></i>
               <input
                  class="block w-full rounded-lg border-0 bg-white p-2.5 text-sm text-gray-900 !shadow-none focus:border-0 focus:ring-0"
                  placeholder="Location"
               />
            </div>

            <div
               class="flex max-w-[200px] items-center rounded-full border border-secondary px-4"
            >
               <i class="fa-solid fa-magnifying-glass text-secondary"></i>
               <button
                  class="block w-full rounded-lg border-0 bg-white p-2.5 text-sm text-secondary !shadow-none focus:border-0 focus:ring-0"
                  placeholder="Location"
               >
                  Search
               </button>
            </div>
         </div>

         <div class="flex items-center justify-between">
            <div>
               <p class="font-poppins text-new-800">Showing 1-10 of 23</p>
            </div>
            <div class="gap-30 flex items-center">
               <select
                  id="countries"
                  class="block w-full rounded-lg border-0 bg-white p-2.5 text-sm text-new-900 shadow-none focus:border-0 focus:ring-0"
               >
                  <option selected disabled>Default Sort</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
               </select>

               <button>
                  <i class="fa-solid fa-sort text-xl text-new-800"></i>
               </button>
               <button>
                  <i class="fa-solid fa-globe text-xl text-new-800"></i>
               </button>
            </div>
         </div>

         <div
            class="gap-30 section-padding-t grid w-full sm:grid-cols-2 md:grid-cols-3"
         >
            <!-- Card 1 -->

            @foreach ($properties as $property)
                
           
            <div class="h5-description-card">
               <div class="h5-description-img">
                  <img src="{{ $property->thumbnail}}" alt="Property" style = "height: 260px" />
               </div>
               <div class="h5-description-body !bg-new-100">
                  <a class="title" href="/property_details/{{ $property->title }}">Spacious Home</a>
                  <p>{{ $property->address}} ,{{ $property->state }}  {{ $property->country}} </p>
                  <div class="h5-description-icons">
                     <div>
                        <img
                           src="assets/icons/bed-outline.svg"
                           alt="Homelist5_desc"
                        />
                        <span>{{ $property->bedrooms ?? 0}} Beds</span>
                     </div>

                     <div>
                        <img
                           src="assets/icons/bath-outline.svg"
                           alt="Homelist5_desc"
                        />
                        <span>{{ $property->bathrooms ?? 0}} Beds</span>
                     </div>

                     <div>
                        <img src="assets/icons/sqft.svg" alt="Homelist5_desc" />
                        <span>{{ $property->size ?? 0}}sqrt</span>
                     </div>
                  </div>

                  <div class="h5-description-footer">
                     <span>{{ $property->currency}}{{ $property->price}}</span>
                     <a href="/property_details/{{ $property->title }}"
                        >View Details
                        <i
                           class="fa-solid fa-arrow-right-long text-secondary"
                        ></i
                     ></a>
                  </div>
               </div>
            </div>

             @endforeach

         </div><br><br>

         {{ $properties->links() }}

      </section>
      <!-- Content Ended -->


</x-templateone.layout>

