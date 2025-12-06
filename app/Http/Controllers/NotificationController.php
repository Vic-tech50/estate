<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNotificationRequest;
use App\Http\Requests\UpdateNotificationRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Notification;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notifications = Notification::all();
        return Inertia::render('notification/index', [
            'notifications' => $notifications
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('notification/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNotificationRequest $request)
    {
        $validated = $request->validated();

        // Create the notification
        Notification::create($validated);

        return redirect()->route('notification.index')->with(['success' => 'Notification Added Successfully']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Notification $notification)
    {
         return Inertia::render('notification/show', [
            'notification' => $notification
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Notification $notification)
    {
        return Inertia::render('notification/edit', [
            'notification' => $notification
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNotificationRequest $request, string $id)
    {
       $validated = $request->validated();

        // Create the notification
       $notification =  Notification::findOrFail($id);
      
    $notification->update([
        'message' => $validated['message'],
        'title' => $validated['title'],
        'type' => $validated['type'],
    ]);


        return redirect()->route('notification.index')->with([
            'mess.type'=> 'success',
            'mess.title'=> 'Updated',
            'mess.message'=>'Notification was updated successfully.'
            ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $notification =  Notification::findOrFail($id);

        $notification->delete();


        return redirect()->route('notification.index')->with(['success' => 'Notification Deleted Successfully']);
    }
}
