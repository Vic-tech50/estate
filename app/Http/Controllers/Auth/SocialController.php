<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;

class SocialController extends Controller
{
    // Redirect to Google
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
        // For APIs or when cookies are not used, use stateless():
        // return Socialite::driver('google')->stateless()->redirect();
    }

    // Handle callback
    public function handleGoogleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->user(); // or ->stateless()->user()

            // Find existing user by provider_id or email
            $user = User::where('provider', 'google')
                ->where('provider_id', $googleUser->getId())
                ->first();

            if (!$user) {
                // optionally try finding by email first
                $user = User::where('email', $googleUser->getEmail())->first();
            }

            if (!$user) {
                // create new user
                $user = User::create([
                    'name' => $googleUser->getName() ?: $googleUser->getNickname(),
                    'email' => $googleUser->getEmail(),
                    // set a random password if you want — users can change it later
                    'password' => bcrypt(Str::random(24)),
                    'provider' => 'google',
                    'provider_id' => $googleUser->getId(),
                    'avatar' => $googleUser->getAvatar(),
                ]);
            } else {
                // update provider fields if missing
                $user->update([
                    'provider' => $user->provider ?? 'google',
                    'provider_id' => $user->provider_id ?? $googleUser->getId(),
                    'avatar' => $googleUser->getAvatar() ?? $user->avatar,
                ]);
            }

            // Log in the user
            Auth::login($user, true);

            return redirect()->intended('/home'); // or dashboard
        } catch (\Exception $e) {
            // handle errors and log them
            Log::error('Google Auth Error: ' . $e->getMessage());
            return redirect('/login')->with('error', 'Failed to login with Google.');
        }
    }
}
