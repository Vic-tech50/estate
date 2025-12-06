<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'content',
        'agentid',
        'category',
        'tag',
        'image',
        'status'
    ];
}
