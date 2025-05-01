<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // For simplicity, hardcoded admin credentials
        if ($credentials['email'] === 'admin@iloveinvite.com' && $credentials['password'] === 'password123') {
            // Generate a simple token (in real app use JWT or Sanctum)
            $token = base64_encode('admin-token');

            return response()->json([
                'status' => 'success',
                'token' => $token,
            ]);
        }

        return response()->json(['status' => 'error', 'message' => 'Invalid credentials'], 401);
    }
}
