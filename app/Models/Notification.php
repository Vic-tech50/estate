<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{

    protected $fillable = ['message', 'title', 'type'];

    protected $appends = ['created_at_human'];

    protected function createdAtHuman(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->created_at
                ? ucfirst($this->created_at->diffForHumans())
                : null
        );
    }

    // public function getCreatedAtHumanAttribute()
    // {

    //       return Attribute::make(
    //         get: fn (string $value) => ucfirst($value),
    //     );
    //     // return $this->created_at ? $this->created_at->diffForHumans() : null;
    // }
}
