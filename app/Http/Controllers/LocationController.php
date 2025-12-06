<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLocationRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Location;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $locations = Location::latest()->get();
        return Inertia::render('location/index', [
            'locations' => $locations
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('location/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLocationRequest $request)
    {
        $validated = $request->validated();

        // Store the location data in the database
        Location::create([
            'country' => $validated['country'],
            'states' => json_encode($validated['states']),
            'cities' => json_encode($validated['cities']),
        ]);

        return redirect()->route('location.index')->with('success', 'Location added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Location $location)
    {
        return Inertia::render('location/edit', compact('location'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Location $location)
    {
        $location->delete();

        return redirect()->route('location.index')->with(['success' => 'Location Deleted Successfully']);
    }
}
