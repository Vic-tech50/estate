<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class UpdateAgentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        return [
            'name' => 'required|string|max:255',
            'title' => 'nullable|string|max:255',
            'company' => 'nullable|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|numeric|min:11',
            'about' => 'nullable|string|max:255',
            'skype' => 'nullable|string|max:255',
            'facebook' => 'nullable|string|max:255',
            'twitter' => 'nullable|string|max:255',
            'instagram' => 'nullable|string|max:255',
            'passport' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:5048',



        ];
    }
}
