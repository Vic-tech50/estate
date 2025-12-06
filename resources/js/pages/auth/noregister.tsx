import { Button } from '@/components/ui/button';
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
} from '@/components/ui/empty';
import AuthLayout from '@/layouts/auth-layout';
import { Head } from '@inertiajs/react';

import { Bell, RefreshCcwIcon } from 'lucide-react';

export default function Noregister() {
    return (
        <AuthLayout
            title="Registration is disabled"
            description="Registration is currently disabled"
        >
            <Head title="Registration is disabled" />
            <Empty className="h-full bg-gradient-to-b from-muted/50 from-30% to-background">
                <EmptyHeader>
                    {/* <EmptyMedia variant="icon"> */}
                    <EmptyMedia variant="icon">
                        <Bell />
                    </EmptyMedia>
                    <EmptyDescription>
                        Registration is currently disabled. Please check back
                        later.
                    </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                    <Button variant="outline" size="sm">
                        <RefreshCcwIcon />
                        Refresh
                    </Button>
                </EmptyContent>
            </Empty>
        </AuthLayout>
    );
}
