<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class EmailVerficationController extends Controller
{
    public function verfiy(Request $request, $id, $hash)

    {
        $user = User::findOrFail($id);

        if (! hash_equals($hash, sha1($user->getEmailForVerification()))) {
            return response()->json(['message' => 'Invalid verification link.'], 400);
        }

        if ($user->hasVerifiedEmail()) {
            return response()->json(['message' => 'Email is already verified.']);
        }
        $user->markEmailAsVerified();
        $user->is_Verfied = true;
        $user->save();
        $token = $user->createToken('main')->plainTextToken;



        return redirect(config("app.frontend_url") . "/home?token=" . $token);
    }
}
