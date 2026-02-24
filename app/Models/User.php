<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'title',
        'company',
        'phone',
        'about',
        'skype',
        'facebook',
        'twitter',
        'instagram',
        'passport',
        'country',
        'documenttype',
        'documentnumber',
        'expiry',
        'frontimg',
        'backimg',
        'verified',
        'fullname',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    protected function role(): Attribute
    {
        return new Attribute(
            get: fn($value) =>  ["agent", "admin", "blocked"][$value],
        );
    }

    protected $appends = ['last_seen_human'];

    protected function lastSeenHuman(): Attribute
    {
        return Attribute::make(
            get: fn() =>
            $this->last_seen_at
                ? $this->last_seen_at->diffForHumans()
                : null
        );
    }
}
