<?php

namespace App\Http\Controllers\Auth;

use App\AuthenticatesUser;
use App\LoginToken;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class LoginController extends Controller
{

    protected $auth;

    public function __construct(AuthenticatesUser $auth)
    {
        $this->auth = $auth;
    }
    public function login()
    {
        return view('login');
    }

    public function postLogin()
    {
        $this->auth->invite();

        return view('auth.confirm');
    }

    public function confirm()
    {
        return view('confirm');
    }

    public function authenticate(LoginToken $token)
    {
        // dd($token->user);
        $this->auth->login($token);
    }

    public function postAuthenticate(Request $request)
    {
        $token = request()->get('token');
        return $token;
        // Auth::login($token->user);
        // $token->delete();
    }
}
