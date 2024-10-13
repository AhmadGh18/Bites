<?php

use App\Http\Controllers\GoogleRegisterController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/auth/google/redirect', [GoogleRegisterController::class, "redirect"]);
Route::get('/auth/google/callback', [GoogleRegisterController::class, "callback"]);