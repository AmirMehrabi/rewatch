<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Birthday;
use Carbon\Carbon;
use Jalalian;
use Auth;
use Kavenegar;

class PagesController extends Controller
{


    public function index()
    {
        $user = Auth::user();
        if ($user) {
            $birthdays = Birthday::where('user_id', $user->id)->get();
        } else {
            $birthdays = [];
        }

        foreach ($birthdays as $birthday) {
            $birthday->remaining = $birthday->countdays($birthday->birthday_date);
            $birthday->percent = round($birthday->remaining / 365 * 100);
        }

        return view('index', compact('birthdays'));
    }
}
