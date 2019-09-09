@extends('layouts.main')


@section('content')

<section class="bg-white">
    <div class="container mx-2 md:mx-0">
                <div class="hidden lg:flex lg:flex-row w-full md:w-4/5 lg:w-2/3 xl:w-2/4 mx-auto items-center content-end  py-8">
                    <form class="w-full mb-8">
                        <div class="text-center">
                            <p class="text-base sm:text-lg md:text-xl xl:text-2xl py-8 text-gray-700 font-semibold">
                                دیگر تولد دوستان و آشنایان خود را فراموش نکنید.
                                <span class="text-xs sm:text-sm md:text-base font-light">روز قبل شما را مطلع خواهیم کرد.</span>
                            </p>
                        </div>
                        <div
                            class="flex shadow-xl py-1 sm:py-3 md:py-4 items-center bg-white rounded-lg appearance-none border border-gray-200 mb-6 rounded w-full px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                            <input
                                class="text-xs sm:text-sm md:text-base appearance-none bg-transparent border-none w-full text-gray-700 mr-3 irsans py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="امیر مهرابیان ..." aria-label="Full name">
                            <input
                                class="text-xs sm:text-sm md:text-base appearance-none bg-transparent border-none w-full text-gray-700 mr-3 irsans py-1 px-2 leading-tight focus:outline-none"
                                type="text" placeholder="۱۸/۰۶/۱۳۷۴" aria-label="Full name">
                            <button
                                class="text-xs sm:text-sm flex-shrink-0 irsans py-2 px-4 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 border-4 text-white py-1 px-2 rounded"
                                type="button">
                                ذخیره
                            </button>
                            <!-- <button
                                                class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                                                type="button">
                                                Cancel
                                            </button> -->
                        </div>
                    </form>
                </div>
    </div>
</section>

    <nav class="flex items-center justify-between flex-wrap bg-gray-100 p-5 irsans mb-8 ">
        <div class="w-full  flex-grow flex items-center w-auto">
            <div class="text-sm flex-grow">
                <a href="#responsive-header"
                    class=" inline-block text-gray-900 bg-gray-100 px-1 sm:px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded rounded-lg hover:text-blue-500 hover:bg-blue-100">
                    دوستان
                </a>
                <a href="#responsive-header"
                    class=" inline-block text-gray-900 bg-gray-100 px-1 sm:px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded rounded-lg hover:text-blue-500 hover:bg-blue-100">
                    خانواده
                </a>
                <a href="#responsive-header"
                    class=" inline-block text-gray-900 bg-gray-100 px-1 sm:px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded rounded-lg hover:text-blue-500 hover:bg-blue-100">
                    همکاران
                </a>
                <a href="#responsive-header"
                    class=" inline-block text-gray-900 bg-gray-100 px-1 sm:px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded rounded-lg hover:text-blue-500 hover:bg-blue-100">
                    هم‌کلاسی‌ها
                </a>
                <a href="#responsive-header"
                    class=" inline-block text-gray-900 bg-gray-100 px-1 sm:px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded rounded-lg hover:text-blue-500 hover:bg-blue-100">
                    متفرقه
                </a>
            </div>
            <div>
                <a href="#"
                    class="inline-block text-sm px-4 py-2 leading-none  rounded  text-blue-500 hover:bg-blue border-blue-400 hover:bg-blue-100 hover:border-transparent hover:text-gray hover:text-blue-400 hover:bg-blue-100">فیلتر</a>
            </div>
        </div>
    </nav>
    <div class="container mx-auto px-10 md:px-4">
        <div class="px-2">
            <div class="flex flex-wrap -mx-2">
                <!-- <div class="w-full md:w-1/2  lg:w-1/3 xl:w-1/4 md:mb-5 px-2 mb-4 ">
                    <div class="bg-white  rounded-lg hover:shadow-2xl city-card">
                        <img src="images/kerman.jpg"
                            class="w-full h:64 md:h-56  object-cover city-image rounded-t rounded-t-lg" alt="">
                        <div class=" flex flex-row text-2xl irsans text-black items-center p-4">
                            <div class="flex-1 text-right">
                                کرمان
                            </div>
                            <div class="flex-1 text-left">
                                <a href="#"
                                    class="inline-block text-sm px-4 py-2 leading-none border rounded rounded-lg text-blue-600 border-blue-500 irsans hover:border-transparent hover:bg-teal-100 hover:text-teal-600 hover:bg-white mt-4 lg:mt-0 btn-city">مشاهده‌ی
                                    شهر</a>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- Birthday Card -->
                <div class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 md:mb-5 px-2 mb-4 ">
                    <div class="bg-white  rounded-lg  p-1 hover:shadow-2xl city-card flex flex-col">
                        <div class="text-gray-700 text-center  p-2 text-right">
                            <a href="#" class="text-gray-500 hover:text-indigo-500 rounded-full"><i class="fas fa-ellipsis-h"></i></a>
                        </div>
                        <div class="text-gray-700 text-center  px-4">
                            <img src="images/avatars/1.jpg" class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full  flex items-center justify-center mx-auto" alt="">
                            <p class="text-sm md:text-base md:text-lg font-medium text-black p-2 pb-1">امیر مهرابیان</p>
                            <p class="text-xs sm:text-sm md:text-base pb-2">هجدهم شهریور ۱۳۷۴</p>
                        </div>
                    </div>
                </div>
                <!-- End of Birthday Card -->

                <!-- Birthday Card -->
                <div class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 md:mb-5 px-2 mb-4 ">
                    <div class="bg-white  rounded-lg  p-1 hover:shadow-2xl city-card flex flex-col">
                        <div class="text-gray-700 text-center  p-2 text-right">
                            <a href="#" class="text-gray-500 hover:text-indigo-500 rounded-full"><i class="fas fa-ellipsis-h"></i></a>
                        </div>
                        <div class="text-gray-700 text-center  px-4">
                            <img src="images/avatars/1.jpg" class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full  flex items-center justify-center mx-auto" alt="">
                            <p class="text-sm md:text-base md:text-lg font-medium text-black p-2 pb-1">امیر مهرابیان</p>
                            <p class="text-xs sm:text-sm md:text-base pb-2">هجدهم شهریور ۱۳۷۴</p>
                        </div>
                    </div>
                </div>
                <!-- End of Birthday Card -->

                <!-- Birthday Card -->
                <div class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 md:mb-5 px-2 mb-4 ">
                    <div class="bg-white  rounded-lg  p-1 hover:shadow-2xl city-card flex flex-col">
                        <div class="text-gray-700 text-center  p-2 text-right">
                            <a href="#" class="text-gray-500 hover:text-indigo-500 rounded-full"><i class="fas fa-ellipsis-h"></i></a>
                        </div>
                        <div class="text-gray-700 text-center  px-4">
                            <img src="images/avatars/1.jpg" class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full  flex items-center justify-center mx-auto" alt="">
                            <p class="text-sm md:text-base md:text-lg font-medium text-black p-2 pb-1">امیر مهرابیان</p>
                            <p class="text-xs sm:text-sm md:text-base pb-2">هجدهم شهریور ۱۳۷۴</p>
                        </div>
                    </div>
                </div>
                <!-- End of Birthday Card -->
                
                <!-- Birthday Card -->
                <div class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 md:mb-5 px-2 mb-4 ">
                    <div class="bg-white  rounded-lg  p-1 hover:shadow-2xl city-card flex flex-col">
                        <div class="text-gray-700 text-center  p-2 text-right">
                            <a href="#" class="text-gray-500 hover:text-indigo-500 rounded-full"><i class="fas fa-ellipsis-h"></i></a>
                        </div>
                        <div class="text-gray-700 text-center  px-4">
                            <img src="images/avatars/1.jpg" class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full  flex items-center justify-center mx-auto" alt="">
                            <p class="text-sm md:text-base md:text-lg font-medium text-black p-2 pb-1">امیر مهرابیان</p>
                            <p class="text-xs sm:text-sm md:text-base pb-2">هجدهم شهریور ۱۳۷۴</p>
                        </div>
                    </div>
                </div>
                <!-- End of Birthday Card -->
                <!-- Birthday Card -->
                <div class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 md:mb-5 px-2 mb-4 ">
                    <div class="bg-white  rounded-lg  p-1 hover:shadow-2xl city-card flex flex-col">
                        <div class="text-gray-700 text-center  p-2 text-right">
                            <a href="#" class="text-gray-500 hover:text-indigo-500 rounded-full"><i class="fas fa-ellipsis-h"></i></a>
                        </div>
                        <div class="text-gray-700 text-center  px-4">
                            <img src="images/avatars/1.jpg" class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full  flex items-center justify-center mx-auto" alt="">
                            <p class="text-sm md:text-base md:text-lg font-medium text-black p-2 pb-1">امیر مهرابیان</p>
                            <p class="text-xs sm:text-sm md:text-base pb-2">هجدهم شهریور ۱۳۷۴</p>
                        </div>
                    </div>
                </div>
                <!-- End of Birthday Card -->
                
                <!-- Birthday Card -->
                <div class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 md:mb-5 px-2 mb-4 ">
                    <div class="bg-white  rounded-lg  p-1 hover:shadow-2xl city-card flex flex-col">
                        <div class="text-gray-700 text-center  p-2 text-right">
                            <a href="#" class="text-gray-500 hover:text-indigo-500 rounded-full"><i class="fas fa-ellipsis-h"></i></a>
                        </div>
                        <div class="text-gray-700 text-center  px-4">
                            <img src="images/avatars/1.jpg" class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full  flex items-center justify-center mx-auto" alt="">
                            <p class="text-sm md:text-base md:text-lg font-medium text-black p-2 pb-1">امیر مهرابیان</p>
                            <p class="text-xs sm:text-sm md:text-base pb-2">هجدهم شهریور ۱۳۷۴</p>
                        </div>
                    </div>
                </div>
                <!-- End of Birthday Card -->


                <!-- Birthday Boy! -->
                <div class="w-4/5 md:w-3/5 lg:w-2/5 mx-auto px-2 mb-4 ">
                    <div class="bg-indigo-400 rounded-lg p-1 hover:shadow-2xl city-card flex flex-col">

                        <div class="text-white">
                            <div class="flex flex-row  items-center justify-center">
                                <div class="text-white m-2 w-2/5 xl:w-auto">
                                    <!-- <div class="text-right">
                                        <a href="#" class="text-white text-right hover:text-yellow-500 rounded-full"><i class="fas fa-ellipsis-h"></i></a>
                                    </div> -->
                                                                

                                    <img src="images/avatars/1.jpg" class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full  flex items-center justify-center mx-auto" alt="">
                                    <p class="text-base pt-2">امیر مهرابیان</p>
                                </div>
                                <div class="text-white text-center m-2 w-3/5  xl:w-auto">
                                    <h1 class="text-base sm:text-lg md:text-xl font-light text-white lg:text-right">تولد امیر امروز در راه است. <span class="font-semibold">تبریک</span> فراموش نشود!</h1>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
                <!-- Birthday boy! -->
            </div>
        </div>
    </div>
@endsection