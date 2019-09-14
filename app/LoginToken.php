<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Mail;
use Kavenegar;


class LoginToken extends Model
{

    protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'token';
    }


    public static function generateFor(user $user)
    {
        return static::create([
            'user_id' => $user->id,
            'token' => mt_rand(10000, 99999)
        ]);
    }

    public function send()
    {
        $url = $this->token;
        Mail::raw(
            "<a href='{$url}'> {$url} </a>",
            function ($message) {
                $message->to('aut0run2011@gmail.com')->subject('کد تائید');
            }
        );

        // try {
        //     $sender = "10004346";
        //     $message = "کد تائید شما: {$url}";
        //     $receptor = array("09361103966");
        //     $result = Kavenegar::Send($sender, $receptor, $message);
        // } catch (\Kavenegar\Exceptions\ApiException $e) {
        //     // در صورتی که خروجی وب سرویس 200 نباشد این خطا رخ می دهد
        //     // echo $e->errorMessage();
        //     return Redirect::back()->withErrors(['error', $e->errorMessage()]);
        // } catch (\Kavenegar\Exceptions\HttpException $e) {
        //     // در زمانی که مشکلی در برقرای ارتباط با وب سرویس وجود داشته باشد این خطا رخ می دهد
        //     return Redirect::back()->withErrors(['error', $e->errorMessage()]);
        // }
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
