<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Birthday;
use Carbon\Carbon;
use Jalalian;
use Auth;
use App\User;
use App\Occasion;
use Kavenegar;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('inspire')
                 ->everyMinute();
                 
                 $schedule->call(function () {

                    $tomorrow_birthdays = Birthday::whereMonth('birthday_date', '=', date('m'))->whereDay('birthday_date', '=', date('d') +1)->get();
                    // dd($tomorrow_birthdays);
            
                    foreach ($tomorrow_birthdays as $birthday) {
                        // echo $birthday->user->phone;
                        $occasions = array();
                        foreach($birthday->occasions as $occasion) {
                         $occasions[] = $occasion->name;
                         
                        }
                        $occasions = implode(" و ",$occasions);
                        // var_dump($occasions);
                        try {
                            $sender = "10004346";
                            $message = "فردا سالگرد {$occasions} {$birthday->name} است. فراموشتان نشود.";
                            $receptor = array($birthday->user->phone);
            
                            $result = Kavenegar::Send($sender, $receptor, $message);
                        } catch (\Kavenegar\Exceptions\ApiException $e) {
                            // در صورتی که خروجی وب سرویس 200 نباشد این خطا رخ می دهد
                            // echo $e->errorMessage();
                            return Redirect::back()->withErrors(['error', $e->errorMessage()]);
                        } catch (\Kavenegar\Exceptions\HttpException $e) {
                            // در زمانی که مشکلی در برقرای ارتباط با وب سرویس وجود داشته باشد این خطا رخ می دهد
                            return Redirect::back()->withErrors(['error', $e->errorMessage()]);
                        }
                    }
                })->dailyAt('13:00');
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
