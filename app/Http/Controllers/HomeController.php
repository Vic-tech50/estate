<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
      public function admin()
    {
        return Inertia::render('dashboard');
    }

    public function agent()
    {
        return Inertia::render('agentDashboard');
    }

}
