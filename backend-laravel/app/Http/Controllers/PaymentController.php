<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function processPayment(Request $request)
    {
        // Simulate payment processing logic here
        // For demo, just return success response
        return response()->json(['status' => 'success', 'message' => 'Payment processed successfully']);
    }
}
