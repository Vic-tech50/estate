<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Property extends Model
{
    use Searchable;
    protected $fillable = [
        'package','agentid', 'title', 'type', 'category', 'country', 'address', 'city', 'state',
        'longitude', 'latitude', 'price', 'currency', 'propertyId', 'size', 'floor',
        'garage', 'bedrooms', 'bathrooms', 'basketballCourt', 'swimmingPool', 'gym',
        'washerDryer', 'noSmokeZone', 'wheelChairFriendly', 'airConditioned',
        'parkingSpace', 'petFriendly', 'water', 'internet', 'video', 'description', 'thumbnail', 'images',
        'status',  'is_featured'
    ];

    public function toSearchableArray()
    {
        $array = $this->toArray();

        // Customize the data array as needed
        return [
            'id' => $array['id'],
            'title' => $array['title'],
            'type' => $array['type'],
            'category' => $array['category'],
            'city' => $array['city'],
            'state' => $array['state'],
            'price' => $array['price'],
            'currency' => $array['currency'],
            'bedrooms' => $array['bedrooms'],
            'bathrooms' => $array['bathrooms'],
            'description' => $array['description'],
        ];
    }
    

}
