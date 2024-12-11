<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmailVerficationController;
use App\Http\Controllers\GoogleRegisterController;
use App\Http\Controllers\RestaurantController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {

    return $request->user();
})->middleware('auth:sanctum');
Route::get('/email/verify/{id}/{hash}', [EmailVerficationController::class, "verfiy"])->name('verification.verify');
Route::controller(AuthController::class)->group(function () {
    Route::post('/login', "login");
    Route::post('/register',  "register");
});
Route::controller(GoogleRegisterController::class)->group(function () {

    Route::get('/auth/google/redirect/', "redirect");
    Route::get('/auth/google/callback', "callback");
});
Route::controller(RestaurantController::class)->group(function () {
    Route::post("/createRestaurant", "create");
    Route::get('/restaurant/{id}', "getByUserId");
});
