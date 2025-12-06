 @props(['content'])
 
 <div class="flex flex-col items-center border bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
        <div class="p-3 bg-blue-100 rounded-full mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12l2 2 4-4" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-800 p-2">{{ $content }}</p>
      </div>