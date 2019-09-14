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

    public function profile() {
        $user = auth()->user();
        return view('profile', compact('user'));
    }

    public function updateProfile(Request $request) {
        $request->validate([
            'name' => 'required',
        ]);
    
        $user = auth()->user();
        $user->name = request()->name;

        $user->email = request()->email;

        if (request()->has('birthday')) {
        $dateString = \Morilog\Jalali\CalendarUtils::convertNumbers($request->input('birthday'), true);
        $carbon_birth_date = \Morilog\Jalali\CalendarUtils::createCarbonFromFormat('Y/m/d', $dateString);
        $user->birthday = $carbon_birth_date;

        }
        $user->save();

        return redirect()->back();
    }
}
