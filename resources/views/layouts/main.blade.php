<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{config('app.name')}} | @yield('title')</title>
    <meta name="author" content="name" />
    <meta name="description" content="description here" />
    <meta name="keywords" content="keywords,here" />
    <link rel="manifest" href="/site.webmanifest">

    <link rel="stylesheet" href="https://unpkg.com/persian-datepicker@1.1.3/dist/css/persian-datepicker.css">
    <link href="{{asset('fontawesome/css/all.css')}}" rel="stylesheet" />
    <link href=" {{asset('css/circle.css')}}" rel="stylesheet" />
    <link href=" {{asset('css/app.css')}}" rel="stylesheet" />
    <!--Replace with your tailwind.css once created-->
    {{-- <link href="{{asset('css/animate.min.css')}}" rel="stylesheet" /> --}}
</head>

<body class="font-sans leading-normal tracking-normal">
    <div id="app">
            
        <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-3 irsans">
            <div class="flex items-center flex-shrink-0 text-white sm:mx-1 md:mx-6">
                <svg class="fill-current h-6 w-6 md:h-8 md:w-8 md:mr-2" width="54" height="54" viewBox="0 0 54 54"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                </svg>
                <span class="font-semibold text-base sm:text-lg md:text-xl tracking-tight mr-1 md:mr-2">{{config('app.name')}}</span>
            </div>
            <div class="hidden">
                <button
                    class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div class=" flex-grow flex items-center w-auto">
                <div class="text-xs sm:text-sm flex-grow">
                     <a href="/"
                        class="inline-block py-1 px-2 text-blue-100 hover:text-white hover:bg-gray-900 rounded mr-2 md:mr-4">
                        صفحه‌ی نخست 
                    </a>

                </div>
                @if (Auth::check())
                <div class="flex">
                    <a href="#modal-birthday"
                        class="flex text-xs sm:text-sm leading-none  sm:mx-2 rounded rounded-lg text-white hover:border-transparent hover:text-teal-500 px-1 py-2"><i class="fas fa-plus    "></i></a>
                </div> 
                <div class="group">
                    <a href="/profile"
                        class="flex items-center text-xs sm:text-sm px-1 sm:mx-2 leading-none rounded rounded-lg text-white border-white hover:border-transparent hover:text-teal-500"> <img src="{{asset('images/character.jpg')}}" class="w-8 6 fl6 md:h-8 md:w-8x rounded ml-1 border-2 group-hover:border-teal-500" alt=""> {{Auth::user()->name ? Auth::user()->name : 'پروفایل کاربری'}}
                    
                    </a>
                </div>    
                <div>
                    <a href="/logout"
                        class="flex text-xs sm:text-sm px-1 sm:px-2 md:px-4 py-2 leading-none rounded rounded-lg text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">خروج</a>
                </div>     
                    @else 
                <div>
                    <a href="/login"
                        class="flex text-xs sm:text-sm px-1 sm:px-2 md:px-4 py-2 leading-none border rounded rounded-lg text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">ورود</a>
                </div>                
                @endif
            </div>
        </nav>

        <!-- Second nav -->

        @yield('content')




        <footer class="bg-gray-700 p-5 border-t shadow-xl text-white mt-20">
            <p>آزاد و متن‌باز - توسعه داده شده با لاراول</p>
        </footer>

        </div>
        <script src="{{asset('js/app.js')}}"></script>

        <script src="https://unpkg.com/popper.js@1/dist/umd/popper.min.js"></script>
        <script src="https://unpkg.com/tippy.js@4"></script>
        <script src="https://unpkg.com/persian-date@1.0.5/dist/persian-date.js"></script>
        <script src="https://unpkg.com/persian-datepicker@1.1.3/dist/js/persian-datepicker.js"></script>
        <script src="{{URL::asset('js/main.js')}}"></script>

        <script>
            //Init tooltips
            tippy(".avatar");
        </script>

        @yield('footer-assets')
    </div>
</body>

</html>