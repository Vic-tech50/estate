<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAgent;
use App\Http\Requests\UpdateAgentRequest;
use App\Models\User;
use Illuminate\Foundation\Auth\User as AuthUser;
// use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class AgentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $agents = User::where('role', '!=',  1)->latest()->get();
        return Inertia::render('agent/index', compact('agents'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('agent/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAgent $request)
    {
        $validated = $request->validated();

        if (Request::hasFile('passport')) {
            $thumbnailPath = Request::file('passport')->store('passports', 'public');
            $validated['passport'] = $thumbnailPath;
        }
        $validated['password'] = bcrypt('password');

        User::create($validated);

        return redirect()->route('agent.index')->with('success', 'Agent Added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $agent)
    {
        return Inertia::render('agent/show', [
            'agent' => $agent
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $agent)
    {
        return Inertia::render('agent/edit', [
            'agent' => $agent
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update_agent(UpdateAgentRequest $request)
    {

        $validated = $request->validated();

        $id = $request->input('id');
    
        if (Request::hasFile('passport')) {
            $path = Request::file('passport')->store('passports', 'public');
            $validated['passport'] = $path;
        }


        $agent = User::findOrFail($id);


        $agent->update([
            'name'      => $validated['name'],
            'title'     => $validated['title'],
            'company'   => $validated['company'] ?? null,
            'email'     => $validated['email'],
            'phone'     => $validated['phone'],
            'about'     => $validated['about'] ?? null,
            'skype'     => $validated['skype'] ?? null,
            'facebook'  => $validated['facebook'] ?? null,
            'twitter'   => $validated['twitter'] ?? null,
            'instagram' => $validated['instagram'] ?? null,
            'passport'  => $validated['passport'] ?? $agent->passport,
        ]);

        return redirect()->route('agent.index')
            ->with('success', 'Agent updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $agent =  User::findOrFail($id);

        $agent->delete();


        return redirect()->route('agent.index')->with(['success' => 'Notification Deleted Successfully']);
    }

    public function block(string $id)
    {
        $agent =  User::findOrFail($id);

        $agent->update(['role' => 2]);
        return redirect()->route('agent.index')->with(['success' => 'Agent Blocked Successfully']);
    }

    public function unblock(string $id)
    {
        $agent =  User::findOrFail($id);

        $agent->update(['role' => 0]);
        return redirect()->route('agent.index')->with(['success' => 'Agent Unblocked Successfully']);
    }
}
