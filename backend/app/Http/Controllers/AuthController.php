<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(AuthRequest $req)
    {

        $data = $req->validated();
        $data["password"] = bcrypt($data["password"]);
        $data['name'] = $data['first_name'] . ' ' . $data['last_name'];
        $user = User::create($data);
        event(new Registered($user));
        return response()->json([
            'message' => 'verfication email was sent successfully'
        ]);
    }
    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $data['email'])->first();

        if (!$user) {
            return response()->json([
                'message' => 'User not found'
            ], 404);
        }

        if ($user->is_Verfied == 0) {
            event(new Registered($user));
            return response()->json([
                'message' => 'Account not verified. Please check your email for verification.'
            ], 403);
        }

        if (!Auth::attempt(['email' => $data['email'], 'password' => $data['password']])) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        $token = $user->createToken('main')->plainTextToken;

        return response()->json([
            'token' => $token,
            'message' => 'Login successful',
            "user" => $user
        ]);
    }
}
