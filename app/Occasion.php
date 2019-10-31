<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Occasion extends Model
{
    public function birthdays(){
        return $this->belongsToMany(Birthday::class);
    }
}
