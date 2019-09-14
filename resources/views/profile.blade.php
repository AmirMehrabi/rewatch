@extends('layouts.main')


@section('content')



    <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">

        <!--Main Col-->
        <div id="profile"
            class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">


            <div class="p-4 md:p-12 text-center lg:text-right">
                <!-- Image for mobile view-->
                <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                    style="background-image: url('images/character.jpg')"></div>

                <h1 class="text-3xl font-bold pt-8 lg:pt-0">{{ $user->name ? $user->name :  'نامشخص' }} </h1>
                <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-blue-500 opacity-25"></div>
                <p class="pt-4 text-base flex items-center justify-center lg:justify-start">
                    <i class="fas fa-calendar  text-blue-700 ml-2  "></i>
                    تاریخ تولد: {{ $user->birthday ? \Morilog\Jalali\Jalalian::forge($user->birthday)->format('%d %B %Y') :  'نامشخص' }}</p>

                <p class="pt-4 text-base flex items-center justify-center lg:justify-start">
                    <i class="fas fa-calendar  text-blue-700 ml-2  "></i>
                    شماره‌ی همراه: {{$user->phone}}</p>
                <p class="pt-4 text-base flex items-center justify-center lg:justify-start">
                    <i class="fas fa-calendar  text-blue-700 ml-2  "></i>
                    آدرس ایمیل: {{ $user->email ? $user->email :  'نامشخص' }}</p>

                <!-- <p class="pt-8 text-sm">Totally optional short description about yourself, what you do and so on.</p> -->

                <div class="pt-12 pb-8">

                    <a href="#modal-edit" class="bg-blue-700 ml-0 inline-block mx-auto irsans hover:bg-blue-900 text-white py-2 px-4 rounded-full">ویرایش مشخصات</a>
                </div>

            </div>

        </div>

        <!--Img Col-->
        <div class="w-full lg:w-2/5">
            <!-- Big profile image for side bar (desktop) -->
            <img src="images/character.jpg" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block">
            <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->

        </div>


        <!-- Pin to top right corner -->
        <!-- <div class="absolute top-0 right-0 h-12 w-18 p-4">
            <button class="js-change-theme focus:outline-none">🌙</button>
        </div> -->

    </div>




<section class="modal--show" id="modal-edit" tabindex="-1" role="dialog" aria-labelledby="modal-label"
    aria-hidden="true">

    <div class="modal-inner">
        <header id="modal-label">
            <h1 class="text-xl">ویرایش مشخصات</h1>
        </header>
        <div class="modal-content">
            <div class="d-flex flex-column w-full md:w-2/3 mx-auto">
                {!! Form::open(['url' => 'profile/update', 'method' => 'post', 'class' => 'rounded-lg px-8 pt-6 pb-8 mb-4']) !!}
                {{-- <form method="POST"  class=" "> --}}
                {{csrf_field()}}


                @error('phone')
                <div class="mb-4">
                    <span class="invalid-feedback text-sm mb-4 irsans text-red-700" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                </div>
                @enderror
                <div class="mb-4">
                    <label for="name" class="mb-2">نام و نام خانوادگی</label>
                    <input
                        class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
                                text-gray-700 leading-tight irsans focus:outline-none focus:bg-white focus:border-blue-500"
                        id="" value="{{$user->name}}" name="name" type="text" placeholder="مثال: قاسم حسن‌خانی">
                </div>

                <div class="mb-4">
                    <label for="email" class="mb-2">آدرس رایانامه</label>
                    <input
                        class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
                                text-gray-700 leading-tight irsans focus:outline-none focus:bg-white focus:border-blue-500"
                        id="" value="{{$user->email}}" name="email" type="text" placeholder="مثال: Ghasem@gmail.com">
                </div>

                <div class="mb-4">
                    <label for="name" class="mb-2">تاریخ تولد</label>
                    <input
                        class="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
                                text-gray-700 leading-tight irsans focus:outline-none focus:bg-white focus:border-blue-500 main-input date_input"
                        id="date_input" type="text" value="{{$user->birthday}}" name="birthday" placeholder="۱۸/۰۶/۱۳۷۴"
                        aria-label="Full name">
                </div>

                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-500 mr-auto w-full rounded-full irsans text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600 hover:text-white"
                        type="submit">
                        ذخیره
                    </button>
                </div>
                {!! Form::close() !!}
            </div>
        </div>
        <footer>
            <!-- Footer -->
        </footer>
    </div>

    <a href="#!" class="modal-close" title="بستن این پنجره" data-close="بستن" data-dismiss="modal">?</a>
</section>


@endsection
