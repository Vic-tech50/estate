<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UploadImage extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function upload(Request $request)
    {
        $request->validate([
            'passport' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:10240'
        ]);

        $user = Auth::user();

        // ✅ Use $request instead of Request::
        if ($request->hasFile('passport')) {
            $img = $request->file('passport')->store('passports', 'public');

            // ✅ Optional: delete old passport if exists
            if ($user->passport && Storage::disk('public')->exists($user->passport)) {
                Storage::disk('public')->delete($user->passport);
            }

            // ✅ Save new path
            $user->passport = $img;
            $user->save();

            return back()->with('success', 'Passport Changed Successfully.');
        }

        return back()->with('error', 'No file selected.');
    }
}
