<?php

namespace App\Http\Controllers\Auth;

use App\AuthenticatesUser;
use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    public function login()
    {
        return view('login');
    }

    public function postLogin(AuthenticatesUser $auth)
    {
        $auth->invite();

        return 'Sweet, go check dat email, yo!';
    }
}
