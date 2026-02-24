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
            $table->string('fullname')->nullable()->after('password');
            $table->string('country')->nullable()->after('fullname');
            $table->string('documenttype')->nullable()->after('country');
            $table->string('documentnumber')->nullable()->after('documenttype');
            $table->date('expiry')->nullable()->after('documentnumber');
            $table->string('frontimg')->nullable()->after('expiry');
            $table->string('backimg')->nullable()->after('frontimg');
            $table->boolean('verified')->default(false)->after('backimg');
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
