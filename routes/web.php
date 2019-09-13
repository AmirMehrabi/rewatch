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

Route::get('/', 'PagesController@index');


Route::get('/profile', function () {
    return view('profile');
});


Route::get('/test', function () {
    return view('test');
});

// Auth::routes();

Route::get('login', 'Auth\LoginController@login')->name('login');

Route::post('login', 'Auth\LoginController@postLogin');

Route::get('login/confirm', 'Auth\LoginController@confirm')->name('confirm');

Route::get('/auth/token/{token}', 'Auth\LoginController@authenticate');

Route::get('logout', 'Auth\LoginController@logout')->name('logout');

Route::post('/auth/token/', 'Auth\LoginController@postAuthenticate')->name('postAuthenticate');


Route::get('/home', 'HomeController@index')->name('home');

Route::resource('birthday', 'BirthdayController');