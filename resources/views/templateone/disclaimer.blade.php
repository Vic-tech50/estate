<x-templateone.layout>

  <x-breadcrumb heading="Disclaimer" page="Disclaimer" />


    <section class="section-padding-120 container px-4 xl:px-0">
        <div class="max-w-4xl mx-auto">
            <header class="flex items-start gap-4 mb-6">
                <div class="flex-none bg-gradient-to-br from-new-50 to-white p-3 rounded-lg shadow-sm border border-gray-100">
                    <!-- simple shield icon -->
                    <svg class="w-6 h-6 text-new-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2l7 4v6c0 5-3.582 9-7 10-3.418-1-7-5-7-10V6l7-4z" />
                    </svg>
                </div>

                <div class="min-w-0">
                    <h2 class="text-xl font-extrabold text-new-900 md:text-2xl lg:text-3xl">Disclaimer</h2>
                    <p class="mt-1 text-sm text-gray-500">Please read the information below carefully.</p>
                </div>
            </header>

            <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-gray-100 dark:border-slate-800 overflow-hidden">
                <div class="px-6 py-6 md:px-8 md:py-8">
                    <div class="prose prose-lg prose-slate dark:prose-invert max-w-full">
                        {!! $settings->disclaimer !!}
                    </div>
                </div>

                <div class="px-6 py-4 bg-gray-50 dark:bg-slate-800 border-t border-gray-100 dark:border-slate-700">
                    <p class="text-xs text-gray-500">This content is for informational purposes only. If you have questions, contact support.</p>
                </div>
            </div>
        </div>
    </section>
      

</x-templateone.layout>
