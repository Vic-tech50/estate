<?php

namespace App\Http\Controllers;

use App\Models\Newsletter;
use App\Http\Requests\StoreNewsletterRequest;
use App\Http\Requests\UpdateNewsletterRequest;
use App\Notifications\NewsletterMessage;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Inertia\Inertia;
// use App\Mail\NewsletterMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;

class NewsletterController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            'auth',

            new Middleware('user-access:admin', except: ['subscribe']),
        ];
    }


    public function newsletter()
    {
        $date = Carbon::now()->diffForHumans();
        return Inertia::render('admin/newsletter', compact('date'));
    }



    public function subscribe(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|unique:newsletters,email',
        ]);

        Newsletter::create(['email' => $validated['email']]);

        return back()->with('success', 'Subscribed successfully!');
    }

    public function unsubscribe(Request $request)
    {
        $subscriber = Newsletter::where('email', $request->email)->first();

        if ($subscriber) {
            $subscriber->update(['is_subscribed' => false]);
            return redirect('/')->with('success', 'You have unsubscribed.');
        }

        return redirect('/')->with('error', 'Email not found.');
    }

    public function sendNewsletter(Request $request)
    {
        $validated = $request->validate([
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
            'emails' => 'required|string',
        ]);

        $subscribers = Newsletter::where('is_subscribed', true)->pluck('email');

        foreach ($subscribers as $email) {
            // $email->notify(new NewsletterMessage($validated['subject'], $validated['message']));
            Notification::route('mail', $email)
                ->notify(new NewsletterMessage($validated['subject'], $validated['message']));
        }

        return back()->with('success', 'Newsletter sent successfully!');
    }
}
