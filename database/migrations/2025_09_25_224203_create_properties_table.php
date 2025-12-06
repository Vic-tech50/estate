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
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('package');
            $table->string('title');
            $table->string('type');
            $table->string('category'); // rent or sale
            $table->string('country');
            $table->string('address');
            $table->string('city');
            $table->string('state');
            $table->string('longitude')->nullable();
            $table->string('latitude')->nullable();
            $table->integer('price');
            $table->string('currency');
            $table->string('propertyId')->unique();
            $table->integer('size'); // in sqft
            $table->string('floor'); // e.g., first floor, second floor
            $table->integer('garage')->default(0);
            $table->integer('bedrooms')->default(0);
            $table->integer('bathrooms')->default(0);
            $table->string('basketballCourt')->nullable();
            $table->string('swimmingPool')->nullable();
            $table->string('gym')->nullable();
            $table->string('washerDryer')->nullable();
            $table->string('noSmokeZone')->nullable();
            $table->string('wheelChairFriendly')->nullable();
            $table->string('airConditioned')->nullable();
            $table->string('parkingSpace')->nullable();
            $table->string('petFriendly')->nullable();
            $table->string('video')->nullable();
            $table->longText('description')->nullable();
            $table->string('thumbnail');
            $table->json('images')->nullable(); // Store multiple images as JSON array
            $table->string('status')->default('available'); // available, sold, rented
            $table->boolean('is_featured')->default(false);


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
