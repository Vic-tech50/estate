<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePropertyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        // Determine whether the property already has a thumbnail.
        // If it does, make the thumbnail upload nullable; otherwise require it.
        $property = request()->route('properties');
        $hasThumbnail = false;

        if ($property) {
            if (is_object($property) && isset($property->thumbnail)) {
                $hasThumbnail = !empty($property->thumbnail);
            } elseif (is_numeric($property)) {
                $prop = \App\Models\Property::find($property);
                $hasThumbnail = $prop && !empty($prop->thumbnail);
            }
        }

        $thumbnailRule = $hasThumbnail
            ? 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:5048'
            : 'required|image|mimes:jpeg,png,jpg,gif,svg|max:5048';
// $thumbnailRule
        return [
            'package' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'longitude' => 'nullable|string|max:255',
            'latitude' => 'nullable|string|max:255',
            'price' => 'required|integer',
            'currency' => 'required|string|max:10',
            'size' => 'required|integer',
            'floor' => 'required|string|max:255',
            'garage' => 'nullable|integer|min:0',
            'bedrooms' => 'nullable|integer|min:0',
            'bathrooms' => 'nullable|integer|min:0',
            'basketballCourt' => 'nullable|string|max:255',
            'swimmingPool' => 'nullable|string|max:255',
            'gym' => 'nullable|string|max:255',
            'washerDryer' => 'nullable|string|max:255',
            'noSmokeZone' => 'nullable|string|max:255',
            'wheelChairFriendly' => 'nullable|string|max:255',
            'airConditioned' => 'nullable|string|max:255',
            'parkingSpace' => 'nullable|string|max:255',
            'petFriendly' => 'nullable|string|max:255',
            'water' => 'nullable|string|max:255',
            'internet' => 'nullable|string|max:255',
            'video' => 'nullable|url',
            'description' => 'nullable|string',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:5048',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'status' => 'in:available,sold,rented',
            'is_featured' => 'boolean',
        ];
    }
}
