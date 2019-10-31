<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOccasionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('occasions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->unique();
            $table->timestamps();
        });

        Schema::create('birthday_occasion', function (Blueprint $table) {
            // $table->bigIncrements('id');
            $table->integer('birthday_id');
            $table->integer('occasion_id');
            $table->timestamps();

            $table->primary(['birthday_id', 'occasion_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('occasions');
        Schema::dropIfExists('birthday_occasion');
    }
}
