<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use App\Http\Requests\StoreVerifyRequest;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Auth;


class VerifyController extends Controller
{
    public function index()
    {
        return inertia('user/verify');
    }

        public function store(StoreVerifyRequest $request)
    {
        $validated = $request->validated();
        $userid = Auth::id();

        $property = User::findOrFail($userid);
        
        // Handle front image upload
        if (Request::hasFile('frontimg')) {
            $frontimgPath = Request::file('frontimg')->store('frontimages', 'public');
            $validated['frontimg'] = $frontimgPath;
        }

        // Handle back image upload
        if (Request::hasFile('backimg')) {
            $backimgPath = Request::file('backimg')->store('backimages', 'public');
            $validated['backimg'] = $backimgPath;   
        }

        $validated['verified'] = false;

       
        $property->update($validated);

        return redirect()->route('properties.index')->with('success', 'Verification submitted successfully.');
    }
}
