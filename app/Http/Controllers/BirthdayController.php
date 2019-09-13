<?php

namespace App\Http\Controllers;

use App\Birthday;
use Illuminate\Http\Request;

class BirthdayController extends Controller
{


    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'birthday_date' => 'required',
        ]);
        $dateString = \Morilog\Jalali\CalendarUtils::convertNumbers($request->input('birthday_date'), true);
        // $Jalalian = jdate($dateString)->format('date');
        // return $dateString;
        $carbon_birth_date = \Morilog\Jalali\CalendarUtils::createCarbonFromFormat('Y/m/d', $dateString);
        //  return $carbon_birth_date;
        $birthday =  new Birthday;
        $birthday->user_id = auth()->user()->id;
        $birthday->name = $request->input('name');
        $birthday->birthday_date = $carbon_birth_date;
        $birthday->save();
        $request->session()->flash('status', 'تولد مورد نظر، با موفقیت به پروفایل شما افزوده شد');
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Birthday  $birthday
     * @return \Illuminate\Http\Response
     */
    public function show(Birthday $birthday)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Birthday  $birthday
     * @return \Illuminate\Http\Response
     */
    public function edit(Birthday $birthday)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Birthday  $birthday
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Birthday $birthday)
    {
        $request->validate([
            'name' => 'required',
            'birthday_date' => 'required',
        ]);
        $dateString = \Morilog\Jalali\CalendarUtils::convertNumbers($request->input('birthday_date'), true);
        //$Jalalian = jdate($dateString)->format('date');

        $carbon_birth_date = \Morilog\Jalali\CalendarUtils::createCarbonFromFormat('Y/m/d', $dateString);
        // $birthday = Birthday::where('id', $request->input('id'))->firstOrFail();
        $birthday->name = $request->input('name');
        $birthday->birthday_date = $carbon_birth_date;

        $birthday->save();

        // return $birthday;

        $request->session()->flash('status', 'تولد مورد نظر، با موفقیت به پروفایل شما افزوده شد');
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Birthday  $birthday
     * @return \Illuminate\Http\Response
     */
    public function destroy(Birthday $birthday)
    {
        //
    }
}
