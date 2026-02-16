<?php

namespace App\Http\Controllers;

use App\Http\Requests\PropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use App\Models\Property;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;


class PropertiesController extends Controller
{



    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::id();
        $properties = Property::latest()->get();
        $agentproperties = Property::where('agentid', $user)->get();
        return inertia('properties/index', compact('properties', 'agentproperties'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('properties/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PropertyRequest $request)
    {
        $validated = $request->validated();
        $userid = Auth::id();
        $user = Auth::user();

        // Handle thumbnail upload
        if (Request::hasFile('thumbnail')) {
            $thumbnailPath = Request::file('thumbnail')->store('thumbnails', 'public');
            $validated['thumbnail'] = $thumbnailPath;
        }

        // Handle multiple images upload
        if (Request::hasFile('images')) {
            $imagePaths = [];
            foreach (Request::file('images') as $image) {
                $imagePaths[] = $image->store('images', 'public');
            }
            $validated['images'] = json_encode($imagePaths); // Store as JSON array
        }

        if ($user->role == 'agent') {
            $validated['agentid'] = $userid;
            $validated['status'] = 'pending';
            $validated['propertyId'] = Str::random(10);
        }

        // Create the property
        Property::create($validated);

        return redirect()->route('properties.index')->with('success', 'Property created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Property $property)
    {
        return Inertia::render('properties/show', [
            'property' => $property
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Property $property)
    {
        return Inertia::render('properties/edit', compact('property'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update_property(UpdatePropertyRequest $request)
    {
        $validated = $request->validated();
        $userid = Auth::id();
        $user = Auth::user();

        $property = Property::findOrFail($request->id);

        // Handle thumbnail upload (OPTIONAL)
        if ($request->hasFile('thumbnail')) {
            $thumbnailPath = $request->file('thumbnail')->store('thumbnails', 'public');
            $validated['thumbnail'] = $thumbnailPath;
        } else {
            // Keep old thumbnail
            unset($validated['thumbnail']);
        }

        // Handle multiple images upload (OPTIONAL)
        if ($request->hasFile('images')) {
            $imagePaths = [];
            foreach ($request->file('images') as $image) {
                $imagePaths[] = $image->store('images', 'public');
            }

            $validated['images'] = json_encode($imagePaths);
        } else {
            // Keep old images
            unset($validated['images']);
        }

        if ($user->role == 'agent') {
            $validated['agentid'] = $userid;
        }

        $property->update($validated);

        return redirect()
            ->route('properties.index')
            ->with('success', 'Property Edited successfully.');
    }

  

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $property =  Property::findOrFail($id);

        $property->delete();


        return redirect()->route('properties.index')->with(['success' => 'Property Deleted Successfully']);
    }

      public function approve(string $id)
    {
        $property =  Property::findOrFail($id);

        $property->update([
            'status' => 'available',
        ]);

        return redirect()->route('properties.index')->with(['success' => 'Property Approved Successfully']);
    }
        public function cancel(string $id)
        {
            $property =  Property::findOrFail($id);
    
            $property->update([
                'status' => 'cancelled',
            ]);
    
            return redirect()->route('properties.index')->with(['success' => 'Property Cancelled Successfully']);
        }
}
