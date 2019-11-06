<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Birthday;
use Carbon\Carbon;
use Jalalian;
use Auth;
use App\User;
use App\Occasion;
use Kavenegar;
use DB;
use Response;

class PagesController extends Controller
{
    public function test()
    {
        // return count(User::all());

        // $tomorrow_birthdays = Birthday::whereMonth('birthday_date', '=', date('m'))->whereDay('birthday_date', '=', date('d') +1)->get();
        // // dd($tomorrow_birthdays);

        // foreach ($tomorrow_birthdays as $birthday) {
        //     // echo $birthday->user->phone;
        //     $occasions = array();
        //     foreach($birthday->occasions as $occasion) {
        //      $occasions[] = $occasion->name;
        //     }
        //     $occasions = implode(" و ",$occasions);
        //     // var_dump($occasions);
        //     try {
        //         $sender = "10004346";
        //         $message = "فردا سالگرد {$occasions} {$birthday->name} است. فراموشتان نشود.";
        //         $receptor = array($birthday->user->phone);

        //         $result = Kavenegar::Send($sender, $receptor, $message);
        //     } catch (\Kavenegar\Exceptions\ApiException $e) {
        //         // در صورتی که خروجی وب سرویس 200 نباشد این خطا رخ می دهد
        //         // echo $e->errorMessage();
        //         return Redirect::back()->withErrors(['error', $e->errorMessage()]);
        //     } catch (\Kavenegar\Exceptions\HttpException $e) {
        //         // در زمانی که مشکلی در برقرای ارتباط با وب سرویس وجود داشته باشد این خطا رخ می دهد
        //         return Redirect::back()->withErrors(['error', $e->errorMessage()]);
        //     }
        // }
        $lastAttempt = DB::table('login_tokens')->where('user_id', '=', 1)->first();
        
        if (!empty($lastAttempt)) {
            if (Carbon::now()->diffInMinutes($lastAttempt->created_at) > 15) {
                return Redirect::back()->withErrors(['کمتر از ۵ دقیقه از تلاش قبلش شما می‌گذرد']);
            } else {
                return LoginToken::where('user_id', '=', $user->id)->first();
            }
        } else {
            return static::create([
                'user_id' => $user->id,
                'token' => mt_rand(10000, 99999)
            ]);
        }
    }


    public function index()
    {
        $user = Auth::user();
        $occasions = Occasion::pluck('name', 'id');
        // dd($occasions);
        if ($user) {
            $birthdays = Birthday::where('user_id', $user->id)->with('occasions')->get();
        } else {
            $birthdays = [];
        }

        foreach ($birthdays as $birthday) {
            $birthday->remaining = $birthday->countdays($birthday->birthday_date);
            $birthday->percent = round($birthday->remaining / 365 * 100);
        }

        return view('index', compact('birthdays', 'occasions'));
    }

    public function profile()
    {
        $user = auth()->user();
        return view('profile', compact('user'));
    }

    public function updateProfile(Request $request)
    {
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
