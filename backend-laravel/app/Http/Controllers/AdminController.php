<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    public function getSales()
    {
        $sales = DB::table('sales')->get();
        return response()->json($sales);
    }
}
