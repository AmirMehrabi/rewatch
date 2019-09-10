<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LoginToken extends Model
{

    protected $guarded = [];
    public static function generateFor(user $user)
    {
        return static::create([
            'user_id' => $user->id,
            'token' => str_random(5)
        ]);
    }

    public function send()
    {
        $url = url('auth/token', $this->token);
        Mail::raw(
            "<a href='{$url}'> {$url} </a>",
            function ($message) {
                $message->to('aut0run2011@gmail.com')->subject('کد تائید');
            }
        );
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
