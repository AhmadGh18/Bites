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
        Schema::create('restaurants', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("name");
            $table->string("phone_number");
            $table->string("facebook")->nullable();
            $table->string("instagram")->nullable();
            $table->string("latitude");
            $table->string("longitude");
            $table->string("city");
            $table->string("Type")->nullable();
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('cascade'); // Foreign key for restaurant

            $table->string('Bio')->nullable();
            $table->string("logo")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('restaurants');
    }
};
