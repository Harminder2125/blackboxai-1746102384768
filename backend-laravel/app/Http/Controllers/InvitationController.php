<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class InvitationController extends Controller
{
    public function sendInvitation(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'invitationData' => 'required|array',
        ]);

        // Simulate sending email with invitation details
        Mail::raw('Your invitation details: ' . json_encode($data['invitationData']), function ($message) use ($data) {
            $message->to($data['email'])
                ->subject('Your Invitation');
        });

        return response()->json(['status' => 'success', 'message' => 'Invitation sent to email']);
    }
}
