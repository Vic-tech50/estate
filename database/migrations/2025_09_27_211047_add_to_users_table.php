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
        Schema::table('users', function (Blueprint $table) {
            $table->string('title')->after('email')->nullable();
            $table->string('company')->after('title')->nullable();
            $table->string('phone')->after('company')->nullable();
            $table->text('about')->after('phone')->nullable();
            $table->string('skype')->after('about')->nullable();
            $table->string('facebook')->after('skype')->nullable();
            $table->string('twitter')->after('facebook')->nullable();
            $table->string('instagram')->after('twitter')->nullable();
            $table->string('passport')->after('instagram')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
