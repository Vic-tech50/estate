import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle, PlusCircle, Trash2 } from 'lucide-react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add Faq',
        href: dashboard().url,
    },
];

export default function AddFaq() {
    // ✅ Start with one FAQ field
    const [fields, setFields] = React.useState([{ question: '', answer: '' }]);

    const { data, setData, post, processing, errors } = useForm({
        faqs: fields, // send as array
    });

    // ✅ Handle field change
    function handleFieldChange(idx: number, field: string, value: string) {
        const updated = fields.map((item, i) =>
            i === idx ? { ...item, [field]: value } : item,
        );
        setFields(updated);
        setData('faqs', updated); // sync to form data
    }

    // ✅ Add new FAQ
    function addMore(e: any) {
        e.preventDefault();
        const updated = [...fields, { question: '', answer: '' }];
        setFields(updated);
        setData('faqs', updated);
    }

    // ✅ Remove a FAQ
    function removeField(index: any) {
        const updated = fields.filter((_, i) => i !== index);
        setFields(updated);
        setData('faqs', updated);
    }

    // ✅ Submit to Laravel
    function submit(e: any) {
        e.preventDefault();
        post('/faq'); // route in Laravel
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Faq" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-7 w-3/4">
                        <form onSubmit={submit}>
                            {fields.map((field, idx) => (
                                <div
                                    key={idx}
                                    className="relative mb-6 rounded-lg border p-4 shadow-sm"
                                >
                                    <div className="mb-2 flex items-center justify-between">
                                        <h3 className="font-semibold">
                                            FAQ #{idx + 1}
                                        </h3>
                                        {fields.length > 1 && (
                                            <Button
                                                type="button"
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => removeField(idx)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        )}
                                    </div>

                                    <div className="mb-4 grid w-full gap-3">
                                        <Label htmlFor={`question-${idx}`}>
                                            Question
                                        </Label>
                                        <Input
                                            placeholder="Type your question..."
                                            id={`question-${idx}`}
                                            value={field.question}
                                            onChange={(e) =>
                                                handleFieldChange(
                                                    idx,
                                                    'question',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="grid w-full gap-3">
                                        <Label htmlFor={`answer-${idx}`}>
                                            Answer
                                        </Label>
                                        <Textarea
                                            placeholder="Type your answer..."
                                            id={`answer-${idx}`}
                                            value={field.answer}
                                            onChange={(e) =>
                                                handleFieldChange(
                                                    idx,
                                                    'answer',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            ))}

                            <Button
                                onClick={addMore}
                                type="button"
                                variant="outline"
                                className="flex items-center gap-2"
                            >
                                <PlusCircle className="h-4 w-4" />
                                Add Another FAQ
                            </Button>

                            <Button
                                type="submit"
                                disabled={processing}
                                variant="secondary"
                                size="lg"
                                className="mt-10 h-12 w-full bg-amber-400 text-black hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900"
                            >
                                {processing && (
                                    <LoaderCircle className="h-4 w-4 animate-spin" />
                                )}
                                Submit FAQs
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
