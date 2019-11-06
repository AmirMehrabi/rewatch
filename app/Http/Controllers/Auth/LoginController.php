<?php

namespace App\Http\Controllers\Auth;

use App\AuthenticatesUser;
use App\LoginToken;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;


class LoginController extends Controller
{

    protected $auth;
    protected $redirectTo = '/';

    public function __construct(AuthenticatesUser $auth)
    {
        $this->auth = $auth;
        $this->middleware('guest', ['except' => 'logout']);
    }
    public function login()
    {
        return view('login');
    }

    public function postLogin()
    {
        $this->auth->invite();

        return redirect(route('confirm'));
    }

    public function confirm()
    {
        return view('auth.confirm');
    }

    public function authenticate(LoginToken $token)
    {
        // dd($token->user);

        $this->auth->login($token);
    }

    public function postAuthenticate(Request $request)
    {

        $token = LoginToken::where('token', request()->get('token'))->first();
        if (!is_null($token)) {
            Auth::login($token->user, true);
            $token->delete();
            return redirect('/');
        } else {
            $request->session()->flash('error', 'کد وارد شده صحیح نیست');
            return redirect(route('confirm'));
        }
    }


    public function logout()
    {
        Auth::logout();
        return redirect('/');
    }
}
