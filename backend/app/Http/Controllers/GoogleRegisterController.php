<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;

class GoogleRegisterController extends Controller
{


    public function redirect()
    {
        return Socialite::driver("google")->redirect();
    }

    public function callback(Request $request)
    {
        $usergoogle = Socialite::driver('google')->user();
        $user = User::UpdateOrCreate(

            ['google_id' => $usergoogle->id],

            [
                'name' => $usergoogle->name,
                'email' => $usergoogle->email,
                'password' => bcrypt(Str::random(12)),
                'email_verified_at' => now()
            ]

        );
        Auth::login($user);
        $token = $user->createToken("main")->plainTextToken;
        $cookie = cookie('token', $token, 60 * 24, null, null, false, true); // Secure, HttpOnly

        return redirect(config("app.frontend_url") . "/home?token=" . $token);
    }
}