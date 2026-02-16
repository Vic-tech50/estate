<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Faq;
use App\Models\Property;
use App\Models\Site;
use App\Models\Testimonials;
use App\Models\User;
use App\Notifications\ContactMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;
use RealRashid\SweetAlert\Facades\Alert;




class LandingController extends Controller
{
    public function index()
    {
        $settings = Site::where('id', '=', 1)->first();
        $property = Property::latest()->limit(6)->get();
        $testimonials = Testimonials::all();
        $blogs = Blog::latest()->where('status', 'approved')->limit(3)->get();
        $blog = Blog::latest()->where('status', 'approved')->first();
        // $agents = User::where('role', 'agent')->inRandomOrder()->get();

        $agents = DB::table('users')->where('role', 'agent')->inRandomOrder()
            ->join('properties', 'properties.agentid', '=', 'users.id')
            ->select('users.*', DB::raw('count(properties.agentid) as agent_properties'))
            ->groupBy('users.id')
            ->get();


        if ($settings && $settings->template == 'template2') {
            return view('templatetwo.index', compact('settings', 'property', 'testimonials', 'blogs', 'blog', 'agents'));
        } elseif ($settings && $settings->template == 'template3') {
            return view('templatethree.index', compact('settings', 'property', 'testimonials', 'blogs', 'blog', 'agents'));
        } else {
            return view('templateone.index', compact('settings', 'property', 'testimonials', 'blogs', 'blog', 'agents'));
        }
    }


    public function faqs()
    {
        $faqs = Faq::all();
        return view('templateone.faq', compact('faqs'));
    }

    public function contact()
    {
        // Alert::success('Success Title', 'Success Message');
        return view('templateone.contact');
    }

    public function sendContact(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:15',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);

        Notification::route('mail', 'vick@gmail.com')
            ->notify(new ContactMessage(
                $validated['name'],
                $validated['email'],
                $validated['phone'],
                $validated['subject'] ?? 'New Contact Message',
                $validated['message']
            ));

        return back()->with('success', 'Your message has been sent successfully!');
    }

    public function disclaimer()
    {

        return view('templateone.disclaimer');
    }

    public function terms()
    {

        return view('templateone.terms');
    }

    public function privacy()
    {

        return view('templateone.privacy');
    }


    public function blog()
    {
        $blogs = DB::table('blogs')
            ->join('users', 'blogs.agentid', '=', 'users.id')
            ->select('blogs.*', 'users.name as agent_name')
            ->where('status', 'approved')
            ->latest()
            ->paginate(3);
        return view('templateone.blog', compact('blogs'));
    }


    public function blog_detail(Blog $blog)
    {

        // Previous post (newer)
        $previous = Blog::where('id', '>', $blog->id)
            ->orderBy('id', 'asc')
            ->first();

        // Next post (older)
        $next = Blog::where('id', '<', $blog->id)
            ->orderBy('id', 'desc')
            ->first();
        return view('templateone.blog_detail', [
            'blog' => $blog,
            'previous' => $previous,
            'next' => $next,

        ]);
    }

    public function property()
    {
        $properties = Property::latest()->paginate(12);
        return view('templateone.property', compact('properties'));
    }

    public function property_detail(Property $property)
    {
        if ($property->agentid) {
            $agent = User::firstWhere('id', $property->agentid);
        } else {
            $agent = User::firstWhere('id', '1');
        }

        $related = Property::where('type', $property->type)->inRandomOrder()->limit(2)->get();

        return view('templateone.property_detail', [
            'property' => $property,
            'agent' => $agent,
            'related' => $related
        ]);
    }
}
