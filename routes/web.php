<?php

use App\Http\Controllers\AgentController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InboxController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PropertiesController;
use App\Http\Controllers\RepairController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\TestimonialsController;
use App\Http\Controllers\UploadImage;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\SocialController;
use App\Http\Controllers\SearchController;
use Laravel\Socialite\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
// Route::get('auth/google', [SocialController::class, 'redirectToGoogle'])->name('google.redirect');
// Route::get('auth/google/callback', [SocialController::class, 'handleGoogleCallback'])->name('google.callback');



Route::get('/auth/redirect', function () {
    return Socialite::driver('github')->redirect();
});

Route::get('/auth/callback', function () {
    // $user = Socialite::driver('github')->user();

    $githubUser = Socialite::driver('github')->user();

    $user = User::updateOrCreate([
        'provider_id' => $githubUser->id,
    ], [
        'name' => $githubUser->name,
        'email' => $githubUser->email,
        'provider' => $githubUser->token,
        'avatar' => $githubUser->refreshToken,
    ]);

    Auth::login($user);

    return redirect('/agent/dashboard');

    // $user->token
});

Route::get('/search', [SearchController::class, 'search']);


Route::controller(LandingController::class)->group(function () {
    Route::get('/', 'index');
    Route::get('/faqs', 'faqs');
    Route::get('/contact', 'contact');
    Route::post('/sendcontact', 'sendContact');
    Route::get('/blogs', 'blog');
    Route::get('/property', 'property');
    Route::get('/disclaimer', 'disclaimer');
    Route::get('/terms', 'terms');
    Route::get('/privacy', 'privacy');
    Route::get('/property_details/{property:title}', 'property_detail');
    Route::get('/blog_details/{blog:slug}', 'blog_detail');
});

Route::controller(NewsletterController::class)->group(function () {
    Route::post('/subscribe', 'subscribe');
    Route::get('/newsletter', 'newsletter');
});

// Route::get('/', function () {
//     notify()->success('Welcome to Laravel Notify ⚡️');

//     return view('templateone.index');
// });

Route::middleware(['auth'])->group(function () {
    Route::get('upload', function () {
        return inertia('upload');
    });

    Route::post('/uploadimage', [UploadImage::class, 'upload'])->name('upload.image');
    Route::post('/updateproperty', [PropertiesController::class, 'update_property'])->name('update.property');
    Route::resources([
        'properties' => PropertiesController::class,
        'blog' => BlogController::class
    ]);
});

Route::middleware(['auth', 'verified', 'user-access:agent'])->group(function () {

    Route::get('/agent/dashboard', [HomeController::class, 'agent'])->name('agent.dashboard');

    Route::get('/inbox', [InboxController::class, 'index']);
});

Route::middleware(['auth',  'user-access:admin'])->group(function () {
    Route::get('/dashboard', [HomeController::class, 'admin'])->name('dashboard');
    Route::post('/blog/approve', [BlogController::class, 'approve']);
    Route::post('/blog/cancel', [BlogController::class, 'cancel']);
    Route::post('/sendNewsletter', [NewsletterController::class, 'sendNewsletter']);
    Route::post('/updatetestimonial', [TestimonialsController::class, 'update_testimonial'])->name('update.testimonial');

    Route::post('/updateagent', [AgentController::class, 'update_agent'])->name('update.agent');
    Route::get('/agent/block/{id}', [AgentController::class, 'block'])->name('agent.block');
    Route::get('/agent/unblock/{id}', [AgentController::class, 'unblock'])->name('agent.unblock');
    Route::get('/properties/approve/{id}', [PropertiesController::class, 'approve'])->name('properties.approve');
    Route::get('/properties/cancel/{id}', [PropertiesController::class, 'cancel'])->name('properties.cancel');


    Route::resources([
        'location' => LocationController::class,
        'notification' => NotificationController::class,
        'agent' => AgentController::class,
        'faq' => FaqController::class,
        'testimonials' => TestimonialsController::class,

    ]);



    Route::controller(RepairController::class)->group(function () {
        Route::get('/repair', 'index');
        Route::post('/optimize', 'optimize');
        // Route::get('/repair/clear-cache', 'clearCache');
        // Route::get('/repair/config-cache', 'configCache');
        // Route::get('/repair/route-cache', 'routeCache');
        // Route::get('/repair/view-clear', 'viewClear');
    });

    Route::controller(SiteController::class)->group(function () {
        Route::get('/site_content', 'site_content');
        Route::get('/site_settings', 'site_settings');
        Route::get('/site_templates', 'site_templates');
        Route::post('/update_content', 'update_site_content');
        Route::post('/update_settings', 'update_site_settings');
        Route::post('/update_templates', 'update_site_templates');
    });
});

Route::middleware(['auth', 'user-access:blocked'])->group(function () {

    // Route::get('/manager/home', [HomeController::class, 'managerHome'])->name('manager.home');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
