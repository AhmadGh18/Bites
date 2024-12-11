<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class AuthRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            "first_name" => "required|string|min:3",
            "last_name" => "required|string|min:3",
            "has_restaurant" => "required|boolean",
            'email' => 'required|email|unique:users,email',
            'password' => [
                'required',
                'confirmed',
                Password::min(6)
                    ->letters()
                    ->mixedCase()
                    ->numbers()
            ],
        ];
    }
}
