<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sites', function (Blueprint $table) {
            $table->id();
            // Site Settings
            $table->string('sitename')->nullable();
            $table->string('slogan')->nullable();
            $table->string('logo')->nullable();
            $table->string('logo_height')->nullable();
            $table->string('logo_width')->nullable();
            $table->string('site_url')->nullable();
            $table->string('favicon')->nullable();
            $table->string('contact_email')->nullable();
            $table->string('contact_phone')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('country')->nullable();
            $table->string('timezone')->nullable();
            $table->string('currency')->nullable();
            $table->string('primary_color')->nullable();
            $table->string('secondary_color')->nullable();
            $table->string('facebook')->nullable();
            $table->string('twitter')->nullable();
            $table->string('instagram')->nullable();
            $table->string('linkedin')->nullable();
            $table->string('youtube')->nullable();
            $table->boolean('maintenance_mode')->default(false);
            $table->boolean('enable_registration')->default(true);
            $table->boolean('enable_email_verification')->default(false);
            $table->boolean('enable_kyc')->default(false);
            $table->string('support_email')->nullable();
            $table->string('support_phone')->nullable();
            $table->string('google_analytics_id')->nullable();
            $table->string('meta_keywords')->nullable();
            $table->string('meta_description')->nullable();
            $table->string('default_language')->nullable();
            $table->string('smtp_host')->nullable();
            $table->string('smtp_port')->nullable();
            $table->string('smtp_username')->nullable();
            $table->string('smtp_password')->nullable();
            $table->string('smtp_encryption')->nullable();

            // Site Content
            $table->string('header')->nullable();
            $table->string('header_content')->nullable();
            $table->text('map_url')->nullable();
            $table->text('about_us')->nullable();
            $table->text('terms_and_conditions')->nullable();
            $table->text('privacy_policy')->nullable();
            $table->text('contact_info')->nullable();
            $table->text('footer_content')->nullable();
            $table->text('welcome_message')->nullable();
            $table->boolean('allow_welcome_message')->default(false);
            $table->text('disclaimer')->nullable();
            // $table->text('how_it_works')->nullable();
            // $table->text('newsletter_content')->nullable();
            // $table->text('property_listing_info')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sites');
    }
};
