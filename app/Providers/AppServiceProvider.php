<?php

namespace App\Providers;

use App\Models\Site;
use GuzzleHttp\Psr7\Request;
// use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {

        if (Schema::hasTable('sites')) {
            $settings = Site::first();
            if ($settings && $settings->sitename) {
                Config::set([
                    'app.name' => $settings->sitename,
                    'app.mail.port' => $settings->smtp_port,
                    'app.mail.host' => $settings->mail_host,
                    'app.mail.username' => $settings->mail_username,
                    'app.mail.password' => $settings->mail_password,
                    'app.mail.encryption' => $settings->mail_encryption,
                    'app.mail.from_address' => $settings->mail_from_address,
                    'app.mail.from_name' => $settings->mail_from_name,
                ]);
            }
        }

        $settings = Site::where('id', 1)->first();
        View::share([
            'settings' => $settings
        ]);
    }
}
