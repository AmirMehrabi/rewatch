@extends('layouts.main')

@section('title', 'صفحه‌ی نخست')
    
@section('content')

<section class="bg-indigo-600">
    <div class="container mx-auto">
        <div class="flex flex-col sm:flex-row w-4/5 lg:w-2/3 xl:w-2/4 mx-auto items-center content-end  py-8">
            <div class="w-full mb-8">
                <div class="text-center">
                    <p class="text-base sm:text-lg md:text-xl xl:text-2xl py-4 sm:py-8 text-white font-semibold">
                        دیگر سالگردهای مهم را فراموش نکنید.
                        <span class="text-xs sm:text-sm md:text-base font-light">ما شما را مطلع خواهیم کرد.</span>
                    </p>
                </div>

                {!! Form::open(['route' => 'birthday.store', 'method' => 'post']) !!}
                @csrf
                @error('name')
                    <div class="mb-4">
                        <span class="invalid-feedback text-sm mb-4 irsans text-red-700" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    </div>
                @enderror
                @error('birthday_date')
                    <div class="mb-4">
                        <span class="invalid-feedback text-sm mb-4 irsans text-red-700" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    </div>
                @enderror
                <div
                    class="flex flex-col sm:flex-row shadow-xl py-3 md:py-4 items-center bg-white rounded-lg appearance-none border border-gray-200 mb-6 rounded w-full px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                    <input
                        class="text-xs mb-2 sm:mb-0 md:text-sm appearance-none bg-transparent border-none w-full text-gray-700 sm:mx-2 irsans p-2 leading-tight focus:outline-none"
                        type="text" name="name" placeholder="امیر مهرابیان ..." aria-label="Full name">
                        {!! Form::select('occasions[]', $occasions, null, ['class' => 'text-xs mb-2 sm:mb-0 md:text-sm bg-transparent border-none w-full text-gray-700 sm:mx-2 irsans p-2 leading-tight focus:outline-none focus:shadow-none focus:border-none']) !!}

                        <input
                        class="text-xs mb-2 sm:mb-0 md:text-sm appearance-none bg-transparent border-none w-full text-gray-700 sm:mx-2 irsans p-2 leading-tight focus:outline-none  main-input date_input"
                        id="date_input" type="text" name="birthday_date" placeholder="۱۸/۰۶/۱۳۷۴"
                        aria-label="Full name">


                    @if (Auth::check())
                    <button type="submit"
                        class="text-xs sm:w-auto text-center shadow-2xl rounded-full flex-shrink-0 irsans py-2 px-4 bg-red-600 hover:bg-red-500 border-transparent hover:border-red-500 border-4 text-white p-2 rounded">
                        ذخیره
                    </button>
                    @else
                    <a href="#modal-login"
                        class="text-xs w-full sm:w-auto text-center flex-shrink-0 irsans py-2 px-4 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 border-4 text-white p-2 rounded">ورود</a>
                    @endif

                </div>
                {!! Form::close() !!}

            </div>
        </div>

    </div>
</section>




<section class="pt-8">
    <div class="container mx-auto px-4">
        <div class="px-2">

            <div class="flex flex-wrap -mx-2">

                @foreach ($birthdays as $birthday)

                <!-- Birthday Card -->

                <div class="w-full md:w-1/3 lg:w-1/5 md:mb-5 px-2 mb-4 group">
                    <div
                        class="group hover:bg-indigo-100 bg-white rounded md:rounded-lg  p-1 hover:shadow shadow-lg city-card flex flex-col md:pb-4">

                        <div class="text-gray-700 text-center  p-2 pb-0 text-right hidden md:flex justify-end mb-2 mb-lg-0 md:justify-start">
                            <a href="#modal-{{$loop->index}}"
                                class="inline-flex lg:hidden h-full group-hover:inline-flex items-center content-center justify-center text-gray-500 hover:text-white hover:bg-gray-500 rounded-full p-1 transition-0"><i
                                    class="fas fa-ellipsis-h "></i></a>
                            <a href="#modal-delete-{{$loop->index}}"
                                class="inline-flex lg:hidden h-full group-hover:inline-flex items-center content-center justify-center text-gray-500 hover:text-white hover:bg-red-500 rounded-full p-1 transition-0">
                            <i class="fas fa-trash"></i>
                            </a>
                            <p>&nbsp</p>
                        </div>

                        <div class="hidden md:flex c100 p{{$birthday->percent }} small green mb-2">
                            <span>{{$birthday->countdays($birthday->birthday_date)}} روز</span>
                            <div class="slice">
                                <div class="bar"></div>
                                <div class="fill"></div>
                            </div>
                        </div>

                        <div class="text-gray-700 text-center p-1 md:px-4">
                            {{-- <img src="images/avatars/1.jpg"
                                class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full  flex items-center justify-center mx-auto"
                                alt=""> --}}
                                <div class="flex flex-wrap md:flex-col justify-between">
                                    <p class="flex-grow sm:flex-shrink text-sm md:mb-1 md:text-base xl:text-lg font-medium text-black">
                                        {{ $birthday->name}}</p>
                                    <p class="flex-grow sm:flex-shrink text-xs sm:text-sm md:mb-1 lg:text-base">{{$birthday->countdays($birthday->birthday_date)}} روز مانده تا سال‌گرد بعدی</p>
                                    <p class="flex-grow sm:flex-shrink text-xs sm:text-sm md:mb-1 md:text-base font-light md:pb-2">
                                        {{ \Morilog\Jalali\Jalalian::forge($birthday->birthday_date)->format('%d %B %Y') }}</p>
                                        
                                        <div class="flex-grow sm:flex-shrink text-gray-700 text-center justify-center text-right flex md:hidden">
                                            <a href="#modal-{{$loop->index}}"
                                                class="inline-flex lg:hidden h-full group-hover:inline-flex items-center content-center justify-center text-gray-500 hover:text-white hover:bg-gray-500 rounded-full p-1 transition-0"><i
                                                    class="fas fa-ellipsis-h "></i></a>
                                            <a href="#modal-delete-{{$loop->index}}"
                                                class="inline-flex lg:hidden h-full group-hover:inline-flex items-center content-center justify-center text-gray-500 hover:text-white hover:bg-red-500 rounded-full p-1 transition-0">
                                            <i class="fas fa-trash"></i>
                                            </a>
                                            <p>&nbsp</p>
                                        </div>
                                </div>

                        </div>
                    </div>
                </div>
                <!-- End of Birthday Card -->


                {{-- Birthday Delete Modal --}}
                <section class="modal--show" id="modal-delete-{{$loop->index}}" tabindex="-1" role="dialog" aria-labelledby="modal-label"
                    aria-hidden="true">

                    <div class="modal-inner">
                        <header id="modal-label">
                            <!-- Header -->
                        <h1 class="text-xl">حذف سال‌گرد {{ $birthday->name}}</h1>
                        </header>
                        <div class="modal-content">
                            <div class="d-flex w-full md:w-2/3 mx-auto">
                                {!! Form::open(['route' => ['birthday.destroy', $birthday->id], 'method' => 'delete']) !!}
                                @csrf
                                <h4 class="my-6">آیا از حذف سال‌گرد {{$birthday->name }} اطمینان دارید؟</h4>
                                <div class="flex">
                                    <a href="#!"   data-close="بستن" data-dismiss="modal"
                                        class="mr-auto text-xs shadow-2xl rounded-full sm:text-sm flex-shrink-0 irsans py-2 px-4 bg-red-600 hover:bg-red-500 border-transparent hover:border-red-500 border-4 text-white py-1 px-2 rounded">
                                        خیر، انصراف</a>

                                <button type="submit"
                                        class="text-xs shadow-2xl rounded-full sm:text-sm flex-shrink-0 irsans py-2 px-4 bg-green-600 hover:bg-green-500 border-transparent hover:border-green-500 border-4 text-white py-1 px-2 rounded">
                                        بله، مطمئنم
                                    </button>
                                </div>
                                {!! Form::close() !!}
                            </div>
                        </div>
                        <footer>
                            <!-- Footer -->
                        </footer>
                    </div>

                    <a href="#!" class="modal-close" title="بستن این پنجره">?</a>
                </section>
                {{-- Birthday Delete Modal --}}


                {{-- Birthday Modal --}}
                <section class="modal--show" id="modal-{{$loop->index}}" tabindex="-1" role="dialog" aria-labelledby="modal-label"
                    aria-hidden="true">

                    <div class="modal-inner">
                        <header id="modal-label">
                            <!-- Header -->
                        <h1 class="text-xl">ویرایش سال‌گرد {{ $birthday->name}}</h1>
                        </header>
                        <div class="modal-content">
                            <div class="d-flex flex-column w-full md:w-2/3 mx-auto">
                                {!! Form::open(['route' => ['birthday.update', $birthday->id], 'method' => 'put']) !!}
                                @csrf
                                
                                <input value="{{ $birthday->name }}" class="text-xs mb-6 w-full  mx-auto sm:text-sm md:text-base appearance-none bg-gray-100 border-transparent border rounded-full w-full text-gray-700 mx-4 irsans py-3 px-5 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
                                    type="text" name="name" placeholder="امیر مهرابیان ..." aria-label="Full name">
                                    {!! Form::select('occasions[]', $occasions, $birthday->occasions, ['class' => 'ml-1 text-xs mb-6 w-full  mx-auto sm:text-sm md:text-base appearance-none bg-gray-100 border-transparent border rounded-full w-full text-gray-700 mx-4 irsans py-3 px-5 leading-tight focus:outline-none focus:bg-white focus:border-teal-500']) !!}
                                    {{-- {{$occasions}} --}}

                                    <input
                                    class="text-xs mb-6 w-2/3 mx-auto sm:text-sm md:text-base appearance-none bg-gray-100 border-transparent border rounded-full w-full text-gray-700 mx-4 irsans py-3 px-5 leading-tight focus:outline-none focus:bg-white focus:border-teal-500  main-input date_input"
                                    value="{{ $birthday->birthday_date }}" id="date_input" type="text" name="birthday_date" placeholder="۱۸/۰۶/۱۳۷۴" aria-label="Full name">
                                <button type="submit"
                                    class="text-xs mb-6 w-full shadow-2xl rounded-full sm:text-sm flex-shrink-0 irsans py-2 px-4 bg-red-600 hover:bg-red-500 border-transparent hover:border-red-500 border-4 text-white py-1 px-2 rounded">
                                    ذخیره
                                </button>
                                {!! Form::close() !!}
                            </div>
                        </div>
                        <footer>
                            <!-- Footer -->
                        </footer>
                    </div>

                    <a href="#!" class="modal-close" title="بستن این پنجره" data-close="بستن" data-dismiss="modal">?</a>
                </section>
                {{-- Birthday Modal --}}

                @endforeach

            </div>

            @if (!count($birthdays))
            {{-- Birthday boy flex row --}}
            <div class="flex flex-wrap -mx-2">
                <!-- Birthday Boy! -->
                <div class="w-full md:w-4/5 lg:w-3/5 mx-auto px-2 mb-4 ">
                    <div class="bg-white rounded-lg p-1 shadow-xl hover:shadow-2xl city-card flex flex-col">
                        <div class="flex flex-row  items-center justify-center">

                            <div class="text-gray-700 m-2">
                                <h1 class="text-sm lg:text-base font-light text-center lg:text-right">
                                شما در حال حاضر سال‌گرد ثبت‌شده‌ای ندارید. برای ثبت سال‌گرد جدید <a href="{{Auth::check() ? '#modal-birthday' : '#modal-login'}}" class="text-sm px-2 leading-none  rounded bg-blue-100 border-transparent text-gray text-blue-400 border border-transparent hover:bg-blue-300 hover:text-white">اینجا</a> کلیک کنید.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Birthday boy! -->
            </div>                
            @endif

        </div>
    </div>
</section>




{{-- Add Birthday Modal --}}

<section class="modal--show" id="modal-birthday" tabindex="-1" role="dialog" aria-labelledby="modal-label"
    aria-hidden="true">

    <div class="modal-inner">
        <header id="modal-label">
            <h1 class="text-xl">ثبت سال‌گرد جدید</h1>
        </header>
        <div class="modal-content">
            <div class="d-flex flex-column w-full mx-auto">
                {!! Form::open(['route' => 'birthday.store', 'method' => 'post']) !!}
                @csrf
                <div
                    class="flex flex-col">
                    <input
                        class="shadow py-2 sm:py-3 items-center bg-gray-200 rounded-lg appearance-none border border-transparent mb-6 rounded w-full px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        type="text" name="name" placeholder="امیر مهرابیان ..." aria-label="Full name">
                        {!! Form::select('occasions[]', $occasions, null, ['multiple' => 'multiple','class' => 'ml-1 shadow py-2 sm:py-3 items-center bg-gray-200 rounded-lg appearance-none border border-transparent mb-6 rounded w-full px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500']) !!}

                        <input
                        class="shadow py-2 sm:py-3 items-center bg-gray-200 rounded-lg appearance-none border border-transparent mb-6 rounded w-full px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500  main-input date_input"
                        id="date_input" type="text" name="birthday_date" placeholder="۱۸/۰۶/۱۳۷۴"
                        aria-label="Full name">
                    @if (Auth::check())
                    <button type="submit"
                        class="text-xs shadow-2xl rounded-full sm:text-sm flex-shrink-0 irsans py-2 px-4 bg-red-600 hover:bg-red-500 border-transparent hover:border-red-500 border-4 text-white py-1 px-2 rounded">
                        ذخیره
                    </button>
                    @else
                    <a href="#modal-login"
                        class="text-base flex-shrink-0 irsans py-2 md:py-3 px-4 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 border-4 text-white py-1 px-2 rounded">ورود</a>
                    @endif

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
{{-- End of add birthday modal --}}



<section class="modal--show" id="modal-login" tabindex="-1" role="dialog" aria-labelledby="modal-label"
    aria-hidden="true">

    <div class="modal-inner">
        <header id="modal-label">
            <h1 class="text-xl">ورود به سیستم</h1>
        </header>
        <div class="modal-content">
            <div class="d-flex flex-column w-full md:w-2/3 mx-auto">
                {!! Form::open(['url' => 'login', 'method' => 'post', 'class' => 'rounded-lg px-8 pt-6 pb-8 mb-4']) !!}
                {{-- <form method="POST"  class=" "> --}}
                {{csrf_field()}}
                <div class="text-center mb-4">
                    <p class="text-lg">بیایید شروع کنیم</p>
                    <p class="text-xs text-gray-500">شماره تلفن شما را با هیچکس به اشتراک نمی‌گذاریم.</p>
                </div>

                @error('phone')
                <div class="mb-4">
                    <span class="invalid-feedback text-sm mb-4 irsans text-red-700" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                </div>
                @enderror
                <div class="mb-4">
                    <input
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
                                text-gray-700 leading-tight irsans focus:outline-none focus:bg-white focus:border-blue-500"
                        id="phoneInput" name="phone" type="text" placeholder="مثال: ****0913195">
                </div>


                <div class="flex items-center justify-between">
                    <button
                        class="bg-blue-500 mr-auto w-full rounded-full irsans text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600 hover:text-white"
                        type="submit">
                        ورود
                    </button>
                </div>
                {!! Form::close() !!}
            </div>
        </div>

    </div>

    <a href="#!" class="modal-close" title="بستن این پنجره" data-close="بستن" data-dismiss="modal">?</a>
</section>





@endsection
