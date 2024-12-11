<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;

class GoogleRegisterController extends Controller
{


    public function redirect(Request $request)
    {
        $role = $request->query('role');
        session(['role' => $role]);
        return Socialite::driver("google")->redirect();
    }
    public function callback(Request $request)
    {
        $usergoogle = Socialite::driver('google')->user();



        $user = User::where('email', $usergoogle->email)->first();
        $isRestaurantOwner = session('role');
        $has_restaurant = $isRestaurantOwner == "owner" ? 1 : 0;

        if ($user) {
            $user->update([
                'google_id' => $usergoogle->id,

            ]);
        } else {
            $user = User::updateOrCreate(
                ['google_id' => $usergoogle->id],
                [
                    'name' => $usergoogle->name,
                    'email' => $usergoogle->email,
                    'password' => bcrypt(Str::random(12)),
                    'email_verified_at' => now(),
                    'has_restaurant' => $has_restaurant

                ]
            );
        }
        Auth::login($user);

        $token = $user->createToken("main")->plainTextToken;
        session()->forget('role');

        return redirect(config("app.frontend_url") . "/home?token=" . $token);
    }
}