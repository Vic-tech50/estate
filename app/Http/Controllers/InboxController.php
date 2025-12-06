<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InboxController extends Controller
{
    public function index()
    {
        $inboxs = Notification::where('type', 'Notification')->latest()->get();
        return Inertia::render('user/inbox', compact('inboxs'));
    }
}
