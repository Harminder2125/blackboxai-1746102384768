<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    protected $fillable = [
        'email',
        'invitation_data',
        'amount',
    ];

    protected $casts = [
        'invitation_data' => 'array',
    ];
}
