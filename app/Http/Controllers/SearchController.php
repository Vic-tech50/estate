<?php

namespace App\Http\Controllers;

use App\Models\Property;
use Illuminate\Http\Request;

class SearchController extends Controller
{

    public function search(Request $request)
    {
        $query = Property::query();

        if ($request->filled('city')) {
            $query->where('city', 'like', '%' . $request->input('city') . '%');
        }

        if ($request->filled('type')) {
            $query->where('type', 'like', '%' . $request->input('type') . '%');
        }

        if ($request->filled('price')) {
            // Assuming price is provided in a format like "18000-30000"
            $priceRange = explode('-', str_replace(['$', ','], '', $request->input('price')));
            if (count($priceRange) == 2) {
                $query->whereBetween('price', [(float)$priceRange[0], (float)$priceRange[1]]);
            }
        }

        $properties = $query->paginate(10);

        return view('templateone.property', compact('properties'));
    }
}
