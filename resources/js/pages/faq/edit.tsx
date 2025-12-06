import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { useRoute } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add Faq',
        href: dashboard().url,
    },
];

export default function AddFaq() {
    const faq: any = usePage().props.faq || [];
    const route = useRoute();

    const { data, setData, put, processing, errors } = useForm({
        question: faq.question,
        answer: faq.answer,
    });

    function submit(e: any) {
        e.preventDefault();
        put(route('faq.update', faq.id));
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Faq" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-7 w-3/4">
                        <form onSubmit={submit}>
                            <div className="relative mb-6 rounded-lg border p-4 shadow-sm">
                                <div className="mb-2 flex items-center justify-between">
                                    <h3 className="font-semibold">FAQ</h3>
                                </div>

                                <div className="mb-4 grid w-full gap-3">
                                    <Label htmlFor="question">Question</Label>
                                    <Input
                                        placeholder="Type your question..."
                                        id="question"
                                        value={data.question}
                                        onChange={(e) =>
                                            setData('question', e.target.value)
                                        }
                                    />

                                    {errors.question && (
                                        <div className="text-red-500">
                                            {errors.question}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full gap-3">
                                    <Label htmlFor="answer">Answer</Label>
                                    <Textarea
                                        placeholder="Type your answer..."
                                        id="answer"
                                        value={data.answer}
                                        onChange={(e) =>
                                            setData('answer', e.target.value)
                                        }
                                    />

                                    {errors.answer && (
                                        <div className="text-red-500">
                                            {errors.answer}
                                        </div>
                                    )}
                                </div>
                            </div>

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
                                Edit FAQs
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
