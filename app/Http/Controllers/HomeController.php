<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Property;
use Illuminate\Support\Facades\DB;


class HomeController extends Controller
{
    public function admin()
    {

        $properties = DB::table('properties')
            ->join('users', 'properties.agentid', '=', 'users.id')
            ->select('properties.*', 'users.name as agent_name')
            ->limit(4)
            ->latest()
            ->get();

        $blogs = DB::table('blogs')
            ->join('users', 'blogs.agentid', '=', 'users.id')
            ->select('blogs.*', 'users.name as agent_name')
            ->limit(3)
            ->latest()
            ->get();
        $propertycount = Property::where('status', 'available')->count();
        // $properties = Property::where('status', 'available')->get();
        return Inertia::render('dashboard', compact('propertycount', 'properties', 'blogs'));
    }

    public function agent()
    {
        return Inertia::render('agentDashboard');
    }
}
