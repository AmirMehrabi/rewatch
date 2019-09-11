<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBirthdaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('birthdays', function (Blueprint $table) {
            $table->string('user_id');
            $table->text('name');
            $table->text('relation')->nullable();
            $table->dateTime('birthday_date');
            $table->timestamps();


            // $table->foreign('user_id')
            //     ->references('id')->on('users')
            //     ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('birthdays');
    }
}
