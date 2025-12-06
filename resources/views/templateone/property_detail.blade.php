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
               <h1 class="common-hero-heading">Property Details</h1>

               <div class="flex" aria-label="Breadcrumb">
                  <ol class="inline-flex items-center space-x-1 md:space-x-2">
                     <li class="inline-flex items-center">
                        <a
                           href="#"
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
                              href="properties.html"
                              class="ms-1 text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-400 dark:hover:text-white md:ms-2"
                              >Properties</a
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
                              >Property Details</span
                           >
                        </div>
                     </li>
                  </ol>
               </div>
            </div>
         </div>
      </section>
      <!-- Details Ended -->

      <!-- content Details Started -->
      <section
         class="section-padding-120 gap-30 container grid gap-y-5 px-4 lg:grid-cols-3 xl:px-0"
      >
         <div class="lg:col-span-2">
            <!-- img -->
            <div class="w-full">
               <img
                  src="{{ asset('assets/images/image-65.png') }}"
                  alt="Property"
                  class="h-auto w-full object-cover object-center"
               />
            </div>
            <!-- content -->
            <div class="mt-60p">
               <p
                  class="text-xl font-medium text-new-900 lg:text-2xl xl:text-3xl 2xl:text-[34px]"
               >
                  ${{$property->price}}<span class="font-poppins text-sm text-new-800"
                     >/per day</span
                  >
               </p>

               <h2 class="common-details-heading mt-2.5" style = "text-transform: capitalize">
                 {{$property->title}}
               </h2>

               <p
                  class="mb-30 mt-5 flex items-center gap-x-1.5 font-poppins text-sm text-new-800 md:gap-x-2 md:text-base lg:gap-x-2.5 lg:text-lg"
               >
                  <i class="fa-solid fa-map-pin text-secondary"></i
                  ><span>{{ $property->address}} ,{{ $property->state }}  {{ $property->country}} </span>
               </p>

               <h4 class="description-h3 !mb-2.5">Preview</h4>

               <hr class="bg-new-200" />

               <div
                  class="gap-30 mt-6 grid w-full grid-cols-2 md:mt-8 md:grid-cols-3 lg:mt-10"
               >
                  <!-- card 1 -->
                  <div class="pd-reviews-card">
                     <div class="pd-reviews-icon">
                        <svg
                           width="20"
                           height="14"
                           viewBox="0 0 20 14"
                           fill="currentColor"
                           xmlns="http://www.w3.org/2000/svg"
                           class="size-10"
                        >
                           <path
                              d="M19.375 10.4375H19.0625V7.9375C19.0621 7.60611 18.9302 7.28842 18.6959 7.0541C18.4616 6.81977 18.1439 6.68793 17.8125 6.6875V1.375C17.8121 1.04361 17.6802 0.725922 17.4459 0.491596C17.2116 0.25727 16.8939 0.125434 16.5625 0.125H3.4375C3.10611 0.125434 2.78842 0.25727 2.5541 0.491596C2.31977 0.725922 2.18793 1.04361 2.1875 1.375V6.6875C1.85611 6.68793 1.53842 6.81977 1.3041 7.0541C1.06977 7.28842 0.937934 7.60611 0.9375 7.9375V10.4375H0.625C0.54212 10.4375 0.462634 10.4704 0.404029 10.529C0.345424 10.5876 0.3125 10.6671 0.3125 10.75V12C0.3125 12.0829 0.345424 12.1624 0.404029 12.221C0.462634 12.2796 0.54212 12.3125 0.625 12.3125H0.9375V13.5625C0.9375 13.6454 0.970424 13.7249 1.02903 13.7835C1.08763 13.8421 1.16712 13.875 1.25 13.875H2.1875C2.25973 13.875 2.32973 13.85 2.38557 13.8042C2.44142 13.7584 2.47965 13.6947 2.49375 13.6238L2.75625 12.3125H17.2437L17.5063 13.6238C17.5204 13.6947 17.5586 13.7584 17.6144 13.8042C17.6703 13.85 17.7403 13.875 17.8125 13.875H18.75C18.8329 13.875 18.9124 13.8421 18.971 13.7835C19.0296 13.7249 19.0625 13.6454 19.0625 13.5625V12.3125H19.375C19.4579 12.3125 19.5374 12.2796 19.596 12.221C19.6546 12.1624 19.6875 12.0829 19.6875 12V10.75C19.6875 10.6671 19.6546 10.5876 19.596 10.529C19.5374 10.4704 19.4579 10.4375 19.375 10.4375ZM2.8125 1.375C2.81272 1.20931 2.87863 1.05046 2.9958 0.933298C3.11296 0.816135 3.27181 0.750217 3.4375 0.75H16.5625C16.7282 0.750217 16.887 0.816135 17.0042 0.933298C17.1214 1.05046 17.1873 1.20931 17.1875 1.375V6.6875H16.5625V5.4375C16.5621 5.10611 16.4302 4.78842 16.1959 4.5541C15.9616 4.31977 15.6439 4.18793 15.3125 4.1875H11.5625C11.2311 4.18793 10.9134 4.31977 10.6791 4.5541C10.4448 4.78842 10.3129 5.10611 10.3125 5.4375V6.6875H9.6875V5.4375C9.68707 5.10611 9.55523 4.78842 9.3209 4.5541C9.08658 4.31977 8.76889 4.18793 8.4375 4.1875H4.6875C4.35611 4.18793 4.03842 4.31977 3.8041 4.5541C3.56977 4.78842 3.43793 5.10611 3.4375 5.4375V6.6875H2.8125V1.375ZM15.9375 5.4375V6.6875H10.9375V5.4375C10.9377 5.27181 11.0036 5.11296 11.1208 4.9958C11.238 4.87863 11.3968 4.81272 11.5625 4.8125H15.3125C15.4782 4.81272 15.637 4.87863 15.7542 4.9958C15.8714 5.11296 15.9373 5.27181 15.9375 5.4375ZM9.0625 5.4375V6.6875H4.0625V5.4375C4.06272 5.27181 4.12863 5.11296 4.2458 4.9958C4.36296 4.87863 4.52181 4.81272 4.6875 4.8125H8.4375C8.60319 4.81272 8.76204 4.87863 8.8792 4.9958C8.99637 5.11296 9.06228 5.27181 9.0625 5.4375ZM1.5625 7.9375C1.56272 7.77181 1.62863 7.61296 1.7458 7.4958C1.86296 7.37863 2.02181 7.31272 2.1875 7.3125H17.8125C17.9782 7.31272 18.137 7.37863 18.2542 7.4958C18.3714 7.61296 18.4373 7.77181 18.4375 7.9375V10.4375H1.5625V7.9375ZM1.93125 13.25H1.5625V12.3125H2.11875L1.93125 13.25ZM18.4375 13.25H18.0688L17.8813 12.3125H18.4375V13.25ZM19.0625 11.6875H0.9375V11.0625H19.0625V11.6875Z"
                           />
                        </svg>
                     </div>

                     <div class="pd-reviews-body">
                        <span>Room</span>
                        <p>{{$property->bedrooms}} Rooms</p>
                     </div>
                  </div>

                  <!-- card 2 -->
                  <div class="pd-reviews-card">
                     <div class="pd-reviews-icon">
                        <i class="fa-solid fa-bed text-4xl"></i>
                     </div>

                     <div class="pd-reviews-body">
                        <span>Bathroom</span>
                        <p>{{$property->bathrooms}} Bath Room</p>
                     </div>
                  </div>

                  <!-- card 3 -->
                  <div class="pd-reviews-card">
                     <div class="pd-reviews-icon">
                        <svg
                           width="40"
                           height="39"
                           viewBox="0 0 40 39"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M1.3125 4.79975L4.90326 1.20898L8.49402 4.79975M34.41 30.7157L38.0007 34.3064L34.41 37.8972"
                              stroke="#FF5C00"
                              stroke-width="1.5612"
                              stroke-miterlimit="10"
                           />
                           <path
                              d="M4.90234 1.20898V34.3064H38"
                              stroke="#FF5C00"
                              stroke-width="1.5612"
                              stroke-miterlimit="10"
                           />
                           <path
                              d="M4.90234 9.32879H29.8816V34.308M4.90234 21.0617L16.6348 9.32879M29.8816 22.5752L18.1492 34.308M4.90234 29.8928L25.4663 9.32879M29.8816 13.7441L9.31765 34.308M31.4428 3.08398H36.1264V7.76759M36.1264 17.1348V10.89M36.1264 26.502V20.2572M12.7083 3.08398H18.9532M22.0756 3.08398H28.3204"
                              stroke="#FF5C00"
                              stroke-width="1.5612"
                              stroke-miterlimit="10"
                           />
                        </svg>
                     </div>

                     <div class="pd-reviews-body">
                        <span>Size</span>
                        <p>{{$property->size}} sqft</p>
                     </div>
                  </div>

                  <!-- card 4 -->
                  <div class="pd-reviews-card">
                     <div class="pd-reviews-icon">
                        <svg
                           width="45"
                           height="40"
                           viewBox="0 0 45 40"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M36.25 22.3975V37.515H38.75V22.3975C37.9225 22.5365 37.0775 22.5365 36.25 22.3975ZM38.75 7.6025C37.9225 7.46357 37.0775 7.46357 36.25 7.6025V2.5H38.75V7.6025Z"
                              fill="#FF5C00"
                           />
                           <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M37.5 17.5C38.163 17.5 38.7989 17.2366 39.2678 16.7678C39.7366 16.2989 40 15.663 40 15C40 14.337 39.7366 13.7011 39.2678 13.2322C38.7989 12.7634 38.163 12.5 37.5 12.5C36.837 12.5 36.2011 12.7634 35.7322 13.2322C35.2634 13.7011 35 14.337 35 15C35 15.663 35.2634 16.2989 35.7322 16.7678C36.2011 17.2366 36.837 17.5 37.5 17.5ZM42.5 15C42.5 16.3261 41.9732 17.5979 41.0355 18.5355C40.0979 19.4732 38.8261 20 37.5 20C36.1739 20 34.9021 19.4732 33.9645 18.5355C33.0268 17.5979 32.5 16.3261 32.5 15C32.5 13.6739 33.0268 12.4021 33.9645 11.4645C34.9021 10.5268 36.1739 10 37.5 10C38.8261 10 40.0979 10.5268 41.0355 11.4645C41.9732 12.4021 42.5 13.6739 42.5 15Z"
                              fill="#FF5C00"
                           />
                           <path
                              d="M21.25 32.3975V37.515H23.75V32.3975C22.9225 32.5365 22.0775 32.5365 21.25 32.3975ZM23.75 17.6025C22.9225 17.4635 22.0775 17.4635 21.25 17.6025V2.5H23.75V17.6025Z"
                              fill="#FF5C00"
                           />
                           <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M22.5 27.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25C25 24.337 24.7366 23.7011 24.2678 23.2322C23.7989 22.7634 23.163 22.5 22.5 22.5C21.837 22.5 21.2011 22.7634 20.7322 23.2322C20.2634 23.7011 20 24.337 20 25C20 25.663 20.2634 26.2989 20.7322 26.7678C21.2011 27.2366 21.837 27.5 22.5 27.5ZM27.5 25C27.5 26.3261 26.9732 27.5979 26.0355 28.5355C25.0979 29.4732 23.8261 30 22.5 30C21.1739 30 19.9021 29.4732 18.9645 28.5355C18.0268 27.5979 17.5 26.3261 17.5 25C17.5 23.6739 18.0268 22.4021 18.9645 21.4645C19.9021 20.5268 21.1739 20 22.5 20C23.8261 20 25.0979 20.5268 26.0355 21.4645C26.9732 22.4021 27.5 23.6739 27.5 25Z"
                              fill="#FF5C00"
                           />
                           <path
                              d="M6.25 22.3975V37.515H8.75V22.3975C7.92246 22.5365 7.07754 22.5365 6.25 22.3975ZM8.75 7.6025C7.92246 7.46357 7.07754 7.46357 6.25 7.6025V2.5H8.75V7.6025Z"
                              fill="#FF5C00"
                           />
                           <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M7.5 17.5C8.16304 17.5 8.79893 17.2366 9.26777 16.7678C9.73661 16.2989 10 15.663 10 15C10 14.337 9.73661 13.7011 9.26777 13.2322C8.79893 12.7634 8.16304 12.5 7.5 12.5C6.83696 12.5 6.20107 12.7634 5.73223 13.2322C5.26339 13.7011 5 14.337 5 15C5 15.663 5.26339 16.2989 5.73223 16.7678C6.20107 17.2366 6.83696 17.5 7.5 17.5ZM12.5 15C12.5 16.3261 11.9732 17.5979 11.0355 18.5355C10.0979 19.4732 8.82608 20 7.5 20C6.17392 20 4.90215 19.4732 3.96447 18.5355C3.02678 17.5979 2.5 16.3261 2.5 15C2.5 13.6739 3.02678 12.4021 3.96447 11.4645C4.90215 10.5268 6.17392 10 7.5 10C8.82608 10 10.0979 10.5268 11.0355 11.4645C11.9732 12.4021 12.5 13.6739 12.5 15Z"
                              fill="#FF5C00"
                           />
                        </svg>
                     </div>

                     
                     <div class="pd-reviews-body">
                        <span>Property Type</span>
                        <p>{{$property->floor ?? ''}}</p>
                     </div>
                  </div>

                  <!-- card 5 -->
                  <div class="pd-reviews-card">
                     <div class="pd-reviews-icon">
                        <svg
                           width="34"
                           height="34"
                           viewBox="0 0 34 34"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M32.9875 9.65765L17.2836 0.147669C17.1965 0.0945226 17.0964 0.0664062 16.9943 0.0664062C16.8923 0.0664063 16.7922 0.0945226 16.7051 0.147669L1.0113 9.65765C0.930773 9.70876 0.865032 9.78007 0.820623 9.86449C0.776214 9.9489 0.754685 10.0435 0.758179 10.1388V33.3677C0.758179 33.6784 0.977765 33.9436 1.28841 33.9436H4.63718C4.78651 33.9401 4.92834 33.8775 5.03158 33.7695C5.13481 33.6616 5.19102 33.5171 5.18787 33.3677V17.4201H28.8129V33.3677C28.8097 33.5171 28.8659 33.6616 28.9692 33.7695C29.0724 33.8775 29.2142 33.9401 29.3636 33.9436H32.7123C33.023 33.9436 33.2426 33.6784 33.2426 33.3677V10.1389C33.2457 10.0434 33.2238 9.94877 33.1791 9.86434C33.1343 9.77991 33.0683 9.70865 32.9875 9.65765ZM5.18787 16.2951V14.0451H28.8129V16.2951H5.18787ZM32.1176 32.8186H29.9379V13.4878C29.9354 13.3368 29.8739 13.1929 29.7665 13.0868C29.6592 12.9807 29.5145 12.9208 29.3636 12.9201H4.63718C4.48623 12.9208 4.34156 12.9807 4.2342 13.0868C4.12684 13.1929 4.06533 13.3368 4.06287 13.4878V32.8186H1.88318V10.456L17.0004 1.28638L32.1176 10.456V32.8186Z"
                              fill="#FF5C00"
                           />
                           <path
                              d="M25.7378 23.7404L24.2512 19.7173C24.1169 19.3552 23.8758 19.0425 23.5597 18.8205C23.2437 18.5986 22.8676 18.478 22.4815 18.4746H11.7838C11.3976 18.478 11.0216 18.5987 10.7055 18.8206C10.3895 19.0425 10.1483 19.3552 10.014 19.7173L8.54812 23.679L7.97057 24.2238C7.6919 24.4638 7.46853 24.7613 7.31584 25.0959C7.16314 25.4305 7.08475 25.7942 7.08604 26.1619V33.3675C7.08319 33.517 7.13968 33.6615 7.24314 33.7694C7.3466 33.8773 7.4886 33.9399 7.63806 33.9434H11.3917C11.4654 33.9415 11.538 33.9251 11.6053 33.8952C11.6727 33.8652 11.7335 33.8222 11.7842 33.7687C11.8349 33.7153 11.8746 33.6523 11.9009 33.5834C11.9272 33.5146 11.9397 33.4412 11.9376 33.3675V31.3418H22.0626V33.3675C22.0605 33.4412 22.073 33.5146 22.0993 33.5834C22.1256 33.6523 22.1653 33.7153 22.216 33.7687C22.2667 33.8222 22.3275 33.8652 22.3949 33.8952C22.4622 33.9251 22.5348 33.9415 22.6085 33.9434H26.3621C26.5116 33.9399 26.6536 33.8773 26.7571 33.7694C26.8605 33.6615 26.917 33.517 26.9142 33.3675V26.0102C26.9145 25.6666 26.8456 25.3265 26.7115 25.0102C26.5774 24.6939 26.3809 24.4078 26.1337 24.1692L25.7378 23.7404ZM11.0689 20.1199C11.1223 19.9716 11.219 19.8427 11.3464 19.75C11.4739 19.6572 11.6262 19.6048 11.7838 19.5996H22.4815C22.639 19.6048 22.7914 19.6572 22.9188 19.75C23.0462 19.8427 23.1429 19.9716 23.1963 20.1199L24.4278 23.4668H9.83737L11.0689 20.1199ZM10.8126 32.8184H8.21104V31.3418H10.8126V32.8184ZM23.1876 32.8184V31.3418H25.7892V32.8184H23.1876ZM25.7892 30.2168H8.21104V26.1619C8.20991 25.9555 8.25386 25.7514 8.33983 25.5637C8.42581 25.3761 8.55172 25.2095 8.70878 25.0755C8.71525 25.0701 8.71898 25.0763 8.72524 25.0705L9.25026 24.5918H24.9714L25.3287 24.9616C25.3366 24.9701 25.3395 24.9724 25.348 24.9803C25.4879 25.1128 25.5992 25.2725 25.6751 25.4497C25.7509 25.6268 25.7898 25.8175 25.7892 26.0102V30.2168Z"
                              fill="#FF5C00"
                           />
                           <path
                              d="M10.9885 25.9277H10.6641C10.2258 25.9277 9.80555 26.1018 9.49568 26.4117C9.1858 26.7216 9.01172 27.1418 9.01172 27.5801C9.01172 28.0183 9.1858 28.4386 9.49568 28.7485C9.80555 29.0583 10.2258 29.2324 10.6641 29.2324H10.9885C11.4267 29.2324 11.847 29.0583 12.1569 28.7485C12.4667 28.4386 12.6408 28.0183 12.6408 27.5801C12.6408 27.1418 12.4667 26.7216 12.1569 26.4117C11.847 26.1018 11.4267 25.9277 10.9885 25.9277ZM10.9885 28.1074H10.6641C10.5242 28.1074 10.3901 28.0519 10.2912 27.953C10.1923 27.8541 10.1367 27.7199 10.1367 27.5801C10.1367 27.4402 10.1923 27.3061 10.2912 27.2072C10.3901 27.1083 10.5242 27.0527 10.6641 27.0527H10.9885C11.1283 27.0527 11.2625 27.1083 11.3614 27.2072C11.4603 27.3061 11.5158 27.4402 11.5158 27.5801C11.5158 27.7199 11.4603 27.8541 11.3614 27.953C11.2625 28.0519 11.1283 28.1074 10.9885 28.1074ZM23.3382 25.9277H23.0138C22.5755 25.9277 22.1552 26.1018 21.8454 26.4117C21.5355 26.7216 21.3614 27.1418 21.3614 27.5801C21.3614 28.0183 21.5355 28.4386 21.8454 28.7485C22.1552 29.0583 22.5755 29.2324 23.0138 29.2324H23.3382C23.7764 29.2324 24.1967 29.0583 24.5066 28.7485C24.8164 28.4386 24.9905 28.0183 24.9905 27.5801C24.9905 27.1418 24.8164 26.7216 24.5066 26.4117C24.1967 26.1018 23.7764 25.9277 23.3382 25.9277ZM23.3382 28.1074H23.0138C22.8739 28.1074 22.7398 28.0519 22.6409 27.953C22.542 27.8541 22.4864 27.7199 22.4864 27.5801C22.4864 27.4402 22.542 27.3061 22.6409 27.2072C22.7398 27.1083 22.8739 27.0527 23.0138 27.0527H23.3382C23.478 27.0527 23.6122 27.1083 23.7111 27.2072C23.81 27.3061 23.8655 27.4402 23.8655 27.5801C23.8655 27.7199 23.81 27.8541 23.7111 27.953C23.6122 28.0519 23.478 28.1074 23.3382 28.1074ZM20.3761 26.5605C20.3761 26.4114 20.3169 26.2683 20.2114 26.1628C20.1059 26.0573 19.9628 25.998 19.8136 25.998H14.1183C13.9691 25.998 13.826 26.0573 13.7206 26.1628C13.6151 26.2683 13.5558 26.4114 13.5558 26.5605V28.6699C13.5558 28.8191 13.6151 28.9622 13.7206 29.0677C13.826 29.1732 13.9691 29.2324 14.1183 29.2324H19.8136C19.9628 29.2324 20.1059 29.1732 20.2114 29.0677C20.3169 28.9622 20.3761 28.8191 20.3761 28.6699V26.5605ZM19.3214 28.1074H14.6808V27.123H19.3214V28.1074Z"
                              fill="#FF5C00"
                           />
                        </svg>
                     </div>

                     <div class="pd-reviews-body">
                        <span>Room</span>
                        <p>3 Space</p>
                     </div>
                  </div>

                  <!-- card 5 -->
                  <div class="pd-reviews-card">
                     <div class="pd-reviews-icon">
                        <i class="fa-solid fa-bath text-4xl"></i>
                     </div>

                     <div class="pd-reviews-body">
                        <span>Room</span>
                        <p>3 Space</p>
                     </div>
                  </div>
               </div>

               <img
                  src="assets/images/image-69.png"
                  alt="Property"
                  class="my-7 h-auto w-full object-cover object-center"
               />

               <h3 class="description-h3">About This Listing</h3>

              

               <p class="description-p">
                  {{$property->description ?? 'Coming Soon...'}}
               </p>

               <div>
                  <h3 class="description-h3">Features</h3>
                   <div class="grid grid-cols-2 gap-6  md:grid-cols-4 ">
      <!-- Feature Card -->
      
     <x-feature content="Internet"/>

      <div class="flex flex-col items-center border bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
        <div class="p-3 bg-blue-100 rounded-full mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M6 10v10h12V10" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-800 p-2">Steady Water Supply</p>
      </div>

      <div class="flex flex-col items-center border bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
        <div class="p-3 bg-blue-100 rounded-full mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17h16M4 12h16M4 7h16" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-800 p-2">Spacious Parking</p>
      </div>

      <div class="flex flex-col items-center border bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
        <div class="p-3 bg-blue-100 rounded-full mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3-2 5-5 5s-5-2-5-5 2-5 5-5 5 2 5 5z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11V5l8 4-8 4z" />
          </svg>
        </div>
        <p class="text-lg font-semibold  text-gray-800 p-2">24/7 Security</p>
      </div>

      <div class="flex flex-col items-center bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
        <div class="p-3 bg-blue-100 rounded-full mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21v-2a4 4 0 00-3-3.87V9a4 4 0 10-8 0v6.13A4 4 0 006 19v2" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-800 p-2">Peaceful Environment</p>
      </div>

      <div class="flex flex-col items-center border bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
        <div class="p-3 bg-blue-100 rounded-full mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </div>
        <p class="text-lg font-semibold text-gray-800 p-2">Constant Power Supply</p>
      </div>
                   </div>

               </div>

             
            </div>
         </div>
         <!-- sidebar -->
         <div class="gap-30 flex flex-col">
            <div class="relative w-full">
               @if($property->agentid)
               <img
                  src="{{ asset($agent->passport) }}"
                  alt="Property"
                  class="w-full rounded-[20px] object-cover object-center"
               />
               @else

                <img
                  src="{{ asset('assets/images/image-71.png') }}"
                  alt="Property"
                  class="w-full rounded-[20px] object-cover object-center"
               />
               @endif

               <div
                  class="my__gradient3 px-30 absolute inset-0 z-10 flex items-end rounded-[20px] pb-10 text-white"
               >
                  <h4 class="text-base font-bold md:text-lg lg:text-xl">
                     Agent
                  </h4> -

                   <p class="text-base font-bold md:text-lg lg:text-xl">
                     {{ $agent->name }}
                  </p>
               </div>
            </div>

            <div class="p-30 rounded-[20px] shadow-shadow10">
               <h4 class="text-base font-bold text-new-900 md:text-lg lg:text-xl lg:font-medium xl:text-2xl">Contact</h4>
               <hr class="my-3 bg-new-200 md:my-3.5 lg:my-4 xl:my-5" />

               <div class="flex items-center gap-4">
                  <img
                     src="{{ asset($agent->passport ?? 'assets/images/image-71.png') }}"
                     alt="{{ $agent->name ?? 'Agent' }}"
                     class="w-16 h-16 rounded-full object-cover object-center shadow-sm"
                  />
                    </div>
                  <div class="text-center mt-2">
                     <p class="text-base font-bold text-new-900">{{ $agent->name ?? 'Agent' }}</p>
                     <p class="text-sm text-new-800">{{ $agent->role ?? 'Property Agent' }}</p>

                     <div class="mt-1 text-center items-center gap-2">
                        <div class="flex justify-center text-yellow-400">
                           @php $rating = isset($agent->rating) ? round($agent->rating) : 4; @endphp
                           @for ($i = 0; $i < 5; $i++)
                              <svg class="w-4 h-4 {{ $i < $rating ? 'fill-current' : 'opacity-30' }}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M10 1.5l2.6 5.27 5.8.84-4.2 4.09.99 5.77L10 15.9 4.81 17.47l.99-5.77L1.6 7.61l5.8-.84L10 1.5z"/>
                              </svg>
                           @endfor
                        </div>
                        <span class="text-sm text-new-800">({{ $agent->rating ?? '4.8' }})</span>
                     </div>
                  </div>
             

               <div class="mt-4 space-y-3">
                  <a href="mailto:{{ $agent->email ?? '#' }}" class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-white hover:opacity-95">
                     <i class="fa-regular fa-envelope"></i>
                     Email Agent
                  </a>

                  <a href="tel:{{ $agent->phone ?? '#' }}" class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-new-200 px-4 py-2 text-sm font-medium text-new-900 hover:bg-new-50">
                     <i class="fa-solid fa-phone"></i>
                     Call Agent
                  </a>

                  <button
                     type="button"
                     onclick="document.getElementById('contact-message-{{ $property->id ?? 'property' }}').classList.toggle('hidden')"
                     class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-new-900 shadow hover:shadow-md"
                  >
                     <i class="fa-solid fa-paper-plane"></i>
                     Send Message
                  </button>
               </div>

               <div id="contact-message-{{ $property->id ?? 'property' }}" class="hidden mt-4">
                  <form action="#" method="POST" class="space-y-3">
                     @csrf
                     <input type="hidden" name="agent_id" value="{{ $agent->id ?? '' }}">
                     <input type="hidden" name="property_id" value="{{ $property->id ?? '' }}">

                     <input name="name" type="text" placeholder="Your name" class="w-full rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary" />

                     <input name="email" type="email" placeholder="Your email" class="w-full rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary" />

                     <textarea name="message" rows="4" placeholder="Write a short message..." class="w-full rounded-[12px] border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"></textarea>

                     <div class="flex gap-2">
                        <button type="submit" class="flex-1 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-white">Send</button>
                        <button type="button" onclick="document.getElementById('contact-message-{{ $property->id ?? 'property' }}').classList.add('hidden')" class="flex-1 rounded-full border px-4 py-2 text-sm font-medium text-new-900">Cancel</button>
                     </div>
                  </form>
               </div>

               <div class="mt-5 border-t pt-4">
                  <p class="mb-3 text-sm font-medium text-new-900">Follow</p>
                  <div class="flex items-center gap-3 text-sm">
                     <a href="{{ $agent->facebook ?? '#' }}" class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90" aria-label="Facebook">
                        <i class="fa-brands fa-facebook-f"></i>
                     </a>
                     <a href="{{ $agent->twitter ?? '#' }}" class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1DA1F2] text-white hover:opacity-90" aria-label="Twitter">
                        <i class="fa-brands fa-x-twitter"></i>
                     </a>
                     <a href="{{ $agent->linkedin ?? '#' }}" class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2] text-white hover:opacity-90" aria-label="LinkedIn">
                        <i class="fa-brands fa-linkedin-in"></i>
                     </a>
                     <a href="{{ $agent->instagram ?? '#' }}" class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:opacity-90" aria-label="Instagram">
                        <i class="fa-brands fa-instagram"></i>
                     </a>
                  </div>
               </div>
            </div>
       </div>

            

      </section>

      <section
         class="section-padding-120  container sm:mx-10 px-4"
      >
      <h4 class="mb-6 text-2xl font-semibold">Related Properties</h4>
      <div class="grid gap-5 md:grid-cols-3">
         
         
          
            @foreach ($related as $related)
                
         <article class="h5-description-card overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
            <a href="{{ url('/property_details/' . urlencode($related->title ?? '')) }}" class="block group" aria-label="View details for {{ $related->title ?? 'property' }}">
               <div class="h5-description-img">
                  <img
                     src="{{ asset($related->thumbnail ?? 'assets/images/placeholder.png') }}"
                     alt="{{ $related->title ?? 'Property' }}"
                     class="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                     loading="lazy"
                     style="height:260px"
                  />
               </div>

               <div class="h5-description-body !bg-new-100 p-4">
                  <h3 class="title text-lg font-semibold text-new-900 mb-1" title="{{ $related->title ?? '' }}">
                     {{ \Illuminate\Support\Str::limit($related->title ?? 'Spacious Home', 60) }}
                  </h3>

                  <p class="text-sm text-new-800 mb-3">
                     {{ trim(implode(', ', array_filter([$related->address ?? '', $related->state ?? '', $related->country ?? '']))) }}
                  </p>

                  <div class="h5-description-icons flex flex-wrap gap-3 text-sm text-new-800 mb-4">
                     <div class="flex items-center gap-2">
                        <img src="{{ asset('assets/icons/bed-outline.svg') }}" alt="Beds" class="h-4 w-4" />
                        <span>{{ $related->bedrooms ?? 0 }} Beds</span>
                     </div>

                     <div class="flex items-center gap-2">
                        <img src="{{ asset('assets/icons/bath-outline.svg') }}" alt="Bathrooms" class="h-4 w-4" />
                        <span>{{ $related->bathrooms ?? 0 }} Baths</span>
                     </div>

                     <div class="flex items-center gap-2">
                        <img src="{{ asset('assets/icons/sqft.svg') }}" alt="Size" class="h-4 w-4" />
                        <span>{{ $related->size ?? 0 }} sqft</span>
                     </div>
                  </div>

                  <div class="h5-description-footer flex items-center justify-between text-sm">
                     <span class="text-base font-bold text-new-900">
                        {{ $related->currency ?? '₦' }}{{ number_format($related->price ?? 0) }}
                     </span>

                     <a href="{{ url('/property_details/' . urlencode($related->title ?? '')) }}" class="inline-flex items-center gap-2 text-secondary font-medium hover:underline" aria-label="View details for {{ $related->title ?? 'property' }}">
                        View Details
                        <i class="fa-solid fa-arrow-right-long text-secondary" aria-hidden="true"></i>
                     </a>
                  </div>
               </div>
            </a>
         </article>

             @endforeach
      </div>
      </section>
     

</x-templateone.layout>