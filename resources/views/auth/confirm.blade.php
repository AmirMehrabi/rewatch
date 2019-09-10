@extends('layouts.main')


@section('content')


<section class="bg-white">
    <div class="flex content-center items-center flex-wrap h-screen">
        <div class="w-full sm:w-1/2 lg:w-1/3 p-2 mx-auto">
            <div class="w-full max-w-sm mx-auto">
                <form action="{!! route('postAuthenticate') !!}" method="POST" class="bg-white shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4 border-t-4 border-teal-400">
                    {{csrf_field()}}
                    <img src="images/character.jpg" class="w-3/4 mx-auto pb-6" alt="">
                    <div class="text-center mb-4">
                        <p class="text-lg">تائیدیه</p>
                        <p class="text-xs text-gray-500">کد تائید پیامک شده به تلفن همراهتان را وارد کنید</p>
                    </div>


                    <div class="mb-4">
                        <input
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4
                                text-gray-700 leading-tight irsans focus:outline-none focus:bg-white focus:border-blue-500"
                            id="username" name="token" type="text" placeholder="مثال: 27394">
                    </div>

                    <div class="flex items-center justify-between">
                        <button
                            class="bg-blue-500 mr-auto w-full rounded-full irsans border-2 border-blue-500 text-white font-bold py-2 px-4 rounded
                                focus:outline-none focus:shadow-outline hover:bg-white hover:border-blue-600 hover:text-blue-600"
                            type="submit">
                            تائید
                        </button>
                    </div>
                </form>
                <p class="text-center text-gray-500 text-xs">
                    &copy; تمامی حقوق محفوظ است
                </p>
            </div>
        </div>

    </div>
</section>

@endsection