<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Fetch all blogs and return to the view
        if (Auth::user()->role == 'agent') {
            $blogs = Blog::where('agentid', Auth::id())->get();
        } else {
            // $blogs = Blog::all();
            $blogs = DB::table('blogs')
                ->join('users', 'blogs.agentid', '=', 'users.id')
                ->select('blogs.*', 'users.name as agent_name')
                ->get();
        }

        return Inertia::render('blog/index', compact('blogs'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('blog/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        $validated = $request->validated();


        if (Request::hasFile('image')) {
            $imagePath = Request::file('image')->store('blog_images', 'public');
            $validated['image'] = $imagePath;
        }
        $validated['agentid'] = Auth::id();
        if (Auth::user()->role == 'agent') {
            $validated['status'] = 'pending';
        } else {
            $validated['status'] = 'approved';
        }


        Blog::create($validated);
 
        return redirect()->route('blog.index')->with('success', 'Blog post created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        return Inertia::render('blog/show', [
            'blog' => $blog
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        return Inertia::render('blog/edit', [
            'blog' => $blog
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, Blog $blog)
    {
        $data = $request->validated();
        $blog->update($data);

        return redirect()->route('blog.index')->with(['success' => 'Blog Updated Successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $blog =  Blog::findOrFail($id);

        $blog->delete();


        return redirect()->route('blog.index')->with(['success' => 'Blog Deleted ']);
    }

    public function approve(Request $request)
    {
        $blog = Blog::findOrFail(Request::input('id'));
        $blog->status =  'approved';
        $blog->save();
        return redirect()->route('blog.index')->with(['success' => 'Blog Approved Successfully']);
    }

    public function cancel(Request $request)
    {
        $blog = Blog::findOrFail(Request::input('id'));
        $blog->status =  'Cancelled';
        $blog->save();
        return redirect()->route('blog.index')->with(['success' => 'Blog Cancelled Successfully']);
    }
}
