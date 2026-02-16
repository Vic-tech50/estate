<x-templateone.layout>

  <x-breadcrumb heading="Properties" page="Property" />

      <!-- Content Started -->
      <section class="section-padding-120 container px-4 xl:px-0">
         <div
            class="gap-30 mb-30 flex flex-col items-center justify-between sm:flex-row"
         >
         

{{--            

            <div
               class="flex w-full items-center rounded-full border border-new-200 px-4 sm:w-1/2 md:w-1/4 lg:flex-1"
            >
               <i class="fa-solid fa-map-pin text-[#777777]"></i>
               <input
                  class="block w-full rounded-lg border-0 bg-white p-2.5 text-sm text-gray-900 !shadow-none focus:border-0 focus:ring-0"
                  placeholder="Location"
                     id="locationSearch"
                  {{-- oninput="w3.filterHTML('#id01', '.search-card', this.value)" --}
               />
            </div> --}}

            <!-- Filters -->
<div class="flex flex-wrap gap-4 mb-6 items-center justify-around">
   <div class="relative flex-1 min-w-[160px]">
      <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
      <input
         id="titleSearch"
         class="w-full pl-10 pr-3 py-2 border rounded-lg bg-white shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
         placeholder="Search by title"
         aria-label="Search by title"
      />
   </div>

   <div class="relative flex-1 min-w-[160px]">
      <i class="fa-solid fa-location-dot absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
      <input
         id="locationSearch"
         class="w-full pl-10 pr-3 py-2 border rounded-lg bg-white shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
         placeholder="Search by location (city, state, country)"
         aria-label="Search by location"
      />
   </div>

   <div class="flex gap-2 items-center min-w-[220px]">
      <div class="relative flex-1">
         <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
         <input
            id="minPrice"
            type="number"
            inputmode="numeric"
            class="w-full pl-9 pr-3 py-2 border rounded-lg bg-white shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Min"
            aria-label="Minimum price"
         />
      </div>

      <div class="relative flex-1">
         <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
         <input
            id="maxPrice"
            type="number"
            inputmode="numeric"
            class="w-full pl-9 pr-3 py-2 border rounded-lg bg-white shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Max"
            aria-label="Maximum price"
         />
      </div>
   </div>

   <div class="flex gap-2">
      <button
         type="button"
         class="px-4 py-2 bg-secondary text-white rounded-lg shadow hover:opacity-95 text-sm"
         onclick="document.getElementById('titleSearch').value='';document.getElementById('locationSearch').value='';document.getElementById('minPrice').value='';document.getElementById('maxPrice').value='';document.getElementById('titleSearch').dispatchEvent(new Event('input'));"
         aria-label="Clear filters"
      >
         Clear
      </button>

      <button
         type="button"
         class="px-4 py-2 border border-secondary text-secondary rounded-lg bg-white hover:bg-secondary hover:text-white transition text-sm"
         onclick="document.getElementById('titleSearch').dispatchEvent(new Event('input'));document.getElementById('locationSearch').dispatchEvent(new Event('input'));document.getElementById('minPrice').dispatchEvent(new Event('input'));document.getElementById('maxPrice').dispatchEvent(new Event('input'));"
         aria-label="Apply filters"
      >
         Apply
      </button>
   </div>
</div>
         </div>

        

         <div
            class="gap-30 section-padding-t grid w-full sm:grid-cols-2 md:grid-cols-3" id="propertyContainer"
         >
            <!-- Card 1 -->

           @foreach ($properties as $property)
    <div class="h5-description-card search-card" 
     data-title="{{ strtolower($property->title) }}"
        data-location="{{ strtolower($property->state.' '.$property->city.' '.$property->country) }}"
        data-price="{{ $property->price }}"
        >
        <div class="h5-description-img">
            <img src="{{ $property->thumbnail}}" alt="Property" style="height: 260px" />
        </div>
        <div class="h5-description-body !bg-new-100">
            <a class="title" href="/property_details/{{ $property->title }}">{{ $property->title }}</a>
            <p>{{ $property->address }}, {{ $property->state }} {{ $property->country }}</p>
            <div class="h5-description-icons">
                <div>
                    <img src="assets/icons/bed-outline.svg" alt="Homelist5_desc" />
                    <span>{{ $property->bedrooms ?? 0 }} Beds</span>
                </div>
                <div>
                    <img src="assets/icons/bath-outline.svg" alt="Homelist5_desc" />
                    <span>{{ $property->bathrooms ?? 0 }} Baths</span>
                </div>
                <div>
                    <img src="assets/icons/sqft.svg" alt="Homelist5_desc" />
                    <span>{{ $property->size ?? 0 }} sqft</span>
                </div>
            </div>
            <div class="h5-description-footer">
                <span>{{ $property->currency }}{{ $property->price }}</span>
                <a href="/property_details/{{ $property->title }}">
                    View Details <i class="fa-solid fa-arrow-right-long text-secondary"></i>
                </a>
            </div>
        </div>
    </div>
    @endforeach

         </div><br><br>

         {{ $properties->links() }}

      </section>
      <!-- Content Ended -->

      {{-- <script>
document.getElementById('locationSearch').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const cards = document.querySelectorAll('.search-card');

    cards.forEach(card => {
        const location = card.dataset.location; // state + city + country
        if(location.includes(filter)) {
            card.style.display = ''; // show
        } else {
            card.style.display = 'none'; // hide
        }
    });
});
</script> --}}

<script>
const titleInput = document.getElementById('titleSearch');
const locationInput = document.getElementById('locationSearch');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const cards = document.querySelectorAll('.search-card');

function filterProperties() {
    const titleFilter = titleInput.value.toLowerCase();
    const locationFilter = locationInput.value.toLowerCase();
    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

    cards.forEach(card => {
        const title = card.dataset.title;
        const location = card.dataset.location;
        const price = parseFloat(card.dataset.price);

        const matchesTitle = title.includes(titleFilter);
        const matchesLocation = location.includes(locationFilter);
        const matchesPrice = price >= minPrice && price <= maxPrice;

        if (matchesTitle && matchesLocation && matchesPrice) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Attach event listeners
titleInput.addEventListener('input', filterProperties);
locationInput.addEventListener('input', filterProperties);
minPriceInput.addEventListener('input', filterProperties);
maxPriceInput.addEventListener('input', filterProperties);
</script>



</x-templateone.layout>

