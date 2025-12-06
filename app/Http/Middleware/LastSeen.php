<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Carbon\Carbon;

class LastSeen
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // if (Auth::check()) {
        //     $d = Auth::id();
        //     $user = User::findOrFail($d);
        //     // $user = Auth::user();

        //     // Update only if more than 1 minute passed (for performance)
        //     if ($user->last_seen_at === null || Carbon::parse($user->last_seen_at)->diffInMinutes(now()) >= 1) {
        //         $user->update(['last_seen_at' => Carbon::now()]);
        //     }
        // }
        return $next($request);
    }
}
