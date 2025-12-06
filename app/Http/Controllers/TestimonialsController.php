<?php

namespace App\Http\Controllers;

use App\Models\Testimonials;
use App\Http\Requests\StoreTestimonialsRequest;
use App\Http\Requests\UpdateTestimonialsRequest;
use Illuminate\Http\Request;

class TestimonialsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonials = Testimonials::all();
        return inertia('testimonials/index', compact('testimonials'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('testimonials/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTestimonialsRequest $request)
    {
        $data = $request->validated();

        foreach ($data['testimonials'] as $testimonial) {
            // Handle image upload
            if (isset($testimonial['image'])) {
                $imagePath = $testimonial['image']->store('testimonials', 'public');
            } else {
                $imagePath = null;
            }

            Testimonials::create([
                'name' => $testimonial['name'],
                'profession' => $testimonial['profession'],
                'content' => $testimonial['content'],
                'image' => $imagePath,
            ]);
        }

        return redirect()->route('testimonials.index')->with('success', 'Testimonials added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Testimonials $testimonials)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Testimonials $testimonial)
    {
        return inertia('testimonials/edit', compact('testimonial'));
    }

    /**
     * Update the specified resource in storage.
     */
    // UpdateTestimonialsRequest
    // public function update(Request $request, int $id)
    // {
    //   $request->validate([
    //         'name' => 'required|string|max:255',
    //         'profession' => 'required|string|max:255',
    //         'content' => 'required|string|max:1000',
    //         'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
    //     ]); 

    //     //    Handle image upload 
    //     if ($request->hasFile('image')) {
    //         $imagePath = $request->file('image')->store('testimonials', 'public');
    //         $data['image'] = $imagePath;
    //     }

    //     $testimonials =  Testimonials::findOrFail($id);
    //     $testimonials->name = $request->input('name');
    //     if ($request->hasFile('image')) {
    //         $imagePath = $request->file('image')->store('testimonials', 'public');
    //         $testimonials->image = $imagePath;
    //     }
    //     $testimonials->profession = $request->input('profession');
    //     $testimonials->content = $request->input('content');
    //     $testimonials->save();

    //     // $data = $request->validated();

     
    //     // $testimonials->update($data);

    //     return redirect()->route('testimonials.index')->with(['success' => 'Testimonial Updated Successfully']);
    // }



    public function update_testimonial(UpdateTestimonialsRequest $request)
{
    $validated = $request->validated();


      $testimonials =  Testimonials::findOrFail($request->id);
        $testimonials->name = $validated['name'];
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('testimonials', 'public');
            $testimonials->image = $imagePath;
        }
        $testimonials->profession = $validated['profession'];
        $testimonials->content = $validated['content'];
        $testimonials->save();

        return redirect()->route('testimonials.index')->with(['success' => 'Testimonial Updated Successfully']);
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $testimonials =  Testimonials::findOrFail($id);

        $testimonials->delete();

        return redirect()->route('testimonials.index')->with(['success' => 'Testimonial Deleted Successfully']);
    }


    
//     public function updateimage(Request $request)
// {
//     $validated = $request->validate([
//         'name' => 'required|string|max:255',
//         'profession' => 'required|string|max:255',
//         'content' => 'required|string|max:1000',
//         'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
//     ]);

//     $testimonial = Testimonials::findOrFail($request->id);

//     // Handle image upload one time only
//     if ($request->hasFile('image')) {
//         $validated['image'] = $request->file('image')->store('testimonials', 'public');
//     }

//     $testimonial->update($validated);

//     return redirect()->route('testimonials.index')
//         ->with(['success' => 'Testimonial Updated Successfully']);
// }
}
