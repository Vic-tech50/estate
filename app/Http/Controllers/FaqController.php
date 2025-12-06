<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use App\Http\Requests\StoreFaqRequest;
use App\Http\Requests\UpdateFaqRequest;
use Inertia\Inertia;

class FaqController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $faqs = Faq::all();
        return Inertia::render('faq/index', compact('faqs'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('faq/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFaqRequest $request)
    {
        $data = $request->validated();

        foreach ($data['faqs'] as $faq) {
            Faq::create([
                'question' => $faq['question'],
                'answer' => $faq['answer'],
            ]);
        }

        return redirect()->route('faq.index')->with('success', 'FAQs added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Faq $faq)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Faq $faq)
    {
        return Inertia::render('faq/edit', compact('faq'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFaqRequest $request, Faq $faq)
    {
        $data = $request->validated();
        $faq->update($data);

        return redirect()->route('faq.index')->with(['success' => 'FAQ Updated Successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Faq $faq)
    {
        $faq->delete();

        return redirect()->route('faq.index')->with(['success' => 'FAQ Deleted Successfully']);
    }
}
