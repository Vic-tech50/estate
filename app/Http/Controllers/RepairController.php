<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Process;
use Inertia\Inertia;

class RepairController extends Controller
{
    public function index()
    {
        return Inertia::render('admin/repair');
    }

    public function optimize()
    {
        $cmd = 'php artisan optimize';

        $result = Process::path(base_path())->run($cmd)->throw();

        if ($result->successful()) {
            return back()->with('success', $result->output());
        } else {
            return back()->with('success', $result->errorOutput());
        }
    }
}
