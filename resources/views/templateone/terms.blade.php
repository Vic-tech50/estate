<x-templateone.layout>

  <x-breadcrumb heading="Terms" page="Terms" />


    <section class="section-padding-120 container px-4 xl:px-0">
        <div class="max-w-4xl mx-auto">
            <header class="flex items-start gap-4 mb-6">
                <div class="flex-none bg-gradient-to-br from-new-50 to-white p-3 rounded-lg shadow-sm border border-gray-100">
                    <!-- simple shield icon -->
                    <svg class="w-6 h-6 text-new-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <!-- document outline -->
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 2h6l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                        <!-- text lines -->
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 9h6" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 13h6" />
                        <!-- checkmark to indicate agreement/terms -->
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17l2 2 4-4" />
                    </svg>
                </div>

                <div class="min-w-0">
                    <h2 class="text-xl font-extrabold text-new-900 md:text-2xl lg:text-3xl">Terms And Conditions</h2>
                    <p class="mt-1 text-sm text-gray-500">Please read the information below carefully.</p>
                </div>
            </header>

            <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-gray-100 dark:border-slate-800 overflow-hidden">
                <div class="px-6 py-6 md:px-8 md:py-8">
                    <div class="prose prose-lg prose-slate dark:prose-invert max-w-full">
                        {!! $settings->terms_and_conditions !!}
                    </div>
                </div>

                <div class="px-6 py-4 bg-gray-50 dark:bg-slate-800 border-t border-gray-100 dark:border-slate-700">
                    <p class="text-xs text-gray-500">This content is for informational purposes only. If you have questions, contact support.</p>
                </div>
            </div>
        </div>
    </section>
      

</x-templateone.layout>
