<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\InvitationController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;

Route::post('/payment', [PaymentController::class, 'processPayment']);
Route::post('/send-invitation', [InvitationController::class, 'sendInvitation']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/sales', [AdminController::class, 'getSales']);
});
