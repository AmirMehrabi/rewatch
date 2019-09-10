<?php


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    try {
        $sender = "10004346";
        $message = "خدمات پیام کوتاه کاوه نگار";
        $receptor = array("09361103966");
        $result = Kavenegar::Send($sender, $receptor, $message);
        if ($result) {
            foreach ($result as $r) {
                echo "messageid = $r->messageid";
                echo "message = $r->message";
                echo "status = $r->status";
                echo "statustext = $r->statustext";
                echo "sender = $r->sender";
                echo "receptor = $r->receptor";
                echo "date = $r->date";
                echo "cost = $r->cost";
            }
        }
    } catch (\Kavenegar\Exceptions\ApiException $e) {
        // در صورتی که خروجی وب سرویس 200 نباشد این خطا رخ می دهد
        echo $e->errorMessage();
    } catch (\Kavenegar\Exceptions\HttpException $e) {
        // در زمانی که مشکلی در برقرای ارتباط با وب سرویس وجود داشته باشد این خطا رخ می دهد
        echo $e->errorMessage();
    }
});


Route::get('/profile', function () {
    return view('profile');
});



// Auth::routes();

Route::get('login', 'Auth\LoginController@login');

Route::post('login', 'Auth\LoginController@postLogin');

Route::get('/auth/token/{token}', 'Auth\LoginController@authenticate');


Route::get('/home', 'HomeController@index')->name('home');
