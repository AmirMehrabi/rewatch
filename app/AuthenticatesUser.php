<?php

namespace App;

use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;

class AuthenticatesUser
{
    use ValidatesRequests;

    protected $request;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function invite()
    {
        $this->validateRequest()
            ->createToken();
        // ->send();
    }

    protected function validateRequest()
    {
        $this->validate($this->request, [
            // 'phone' => 'required|unique:users|regex:/(0)?9\d{9}/'
            'phone' => 'required|unique:users|numeric|size:11'
        ]);

        return $this;
    }

    private function createToken()
    {
        $user = User::byPhone($this->request->phone);

        return LoginToken::generateFor($user);
    }
}
