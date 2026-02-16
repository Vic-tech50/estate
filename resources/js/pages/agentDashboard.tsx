import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useMemo } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

type Property = {
    id: string;
    title: string;
    location: string;
    price: number;
    status: 'Active' | 'Pending' | 'Sold';
    agent: string;
};

const SAMPLE_PROPERTIES: Property[] = [
    { id: 'P-1001', title: '3BR Townhouse', location: 'Ikoyi, Lagos', price: 42000000, status: 'Active', agent: 'Chidi Oluji' },
    { id: 'P-1002', title: 'Luxury Apartment', location: 'Victoria Island', price: 88000000, status: 'Pending', agent: 'Amaka Obi' },
    { id: 'P-1003', title: 'Duplex', location: 'Lekki Phase 1', price: 65000000, status: 'Active', agent: 'Chidi Oluji' },
    { id: 'P-1004', title: 'Bungalow', location: 'Surulere', price: 12500000, status: 'Sold', agent: 'Emeka N' },
];

function formatNaira(value: number) {
    return '₦' + value.toLocaleString();
}

function StatCard({ title, value, delta, icon }: { title: string; value: string | number; delta?: string; icon?: React.ReactNode }) {
    return (
        <div className="flex items-center justify-between gap-4 rounded-xl border border-sidebar-border/70 bg-white/5 p-4 shadow-sm dark:border-sidebar-border">
            <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-3 text-primary dark:bg-primary/20">{icon}</div>
                <div>
                    <div className="text-sm text-muted-foreground">{title}</div>
                    <div className="mt-1 text-lg font-semibold">{value}</div>
                </div>
            </div>
            {delta ? <div className="text-sm text-success">{delta}</div> : null}
        </div>
    );
}

function Badge({ children, color = 'bg-emerald-100 text-emerald-800' }: { children: React.ReactNode; color?: string }) {
    return <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${color}`}>{children}</span>;
}

function Sparkline({ points = [10, 12, 8, 15, 18, 14, 20] }: { points?: number[] }) {
    const max = Math.max(...points);
    const step = 100 / (points.length - 1);
    const path = points.map((v, i) => `${i === 0 ? 'M' : 'L'} ${i * step},${100 - (v / max) * 100}`).join(' ');
    return (
        <svg viewBox="0 0 100 100" className="h-10 w-[120px]" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d={path} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function Dashboard() {
    const properties = useMemo(() => SAMPLE_PROPERTIES, []);
    const totalValue = properties.reduce((s, p) => s + p.price, 0);
    const activeCount = properties.filter((p) => p.status === 'Active').length;
    const pendingCount = properties.filter((p) => p.status === 'Pending').length;
    const soldCount = properties.filter((p) => p.status === 'Sold').length;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Agent Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-6">
                {/* Top stats */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    <StatCard
                        title="Active Listings"
                        value={activeCount}
                        delta="+5%"
                        icon={
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 7h18M7 21V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        }
                    />
                    <StatCard
                        title="Leads (30d)"
                        value={24}
                        delta="+12%"
                        icon={
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 10a5 5 0 1 1 10 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        }
                    />
                    <StatCard
                        title="Upcoming Viewings"
                        value={6}
                        delta="-4%"
                        icon={
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 10h-6l-2-3-2 3H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        }
                    />
                    <StatCard
                        title="Portfolio Value"
                        value={formatNaira(totalValue)}
                        icon={
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 1v22M3 7h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        }
                    />
                </div>

                {/* Main content: left - listings, right - activity */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="col-span-2 rounded-xl border border-sidebar-border/70 bg-white/5 p-4 shadow-sm dark:border-sidebar-border">
                        <div className="mb-4 flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-semibold">Listings</h2>
                                <div className="text-sm text-muted-foreground">Recent properties and statuses</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="rounded-md bg-primary px-3 py-1 text-sm font-medium text-white">New Listing</button>
                                <button className="rounded-md border border-sidebar-border/60 px-3 py-1 text-sm">Export</button>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-md border border-divider/50">
                            <table className="min-w-full table-fixed">
                                <thead className="bg-muted/30 text-left text-xs font-semibold uppercase text-muted-foreground">
                                    <tr>
                                        <th className="px-4 py-3 w-28">ID</th>
                                        <th className="px-4 py-3">Property</th>
                                        <th className="px-4 py-3">Location</th>
                                        <th className="px-4 py-3">Price</th>
                                        <th className="px-4 py-3 w-36">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y bg-card">
                                    {properties.map((p) => (
                                        <tr key={p.id} className="hover:bg-muted/10">
                                            <td className="px-4 py-3 text-sm font-medium">{p.id}</td>
                                            <td className="px-4 py-3 text-sm">{p.title}</td>
                                            <td className="px-4 py-3 text-sm text-muted-foreground">{p.location}</td>
                                            <td className="px-4 py-3 text-sm">{formatNaira(p.price)}</td>
                                            <td className="px-4 py-3">
                                                {p.status === 'Active' && <Badge color="bg-emerald-100 text-emerald-800">Active</Badge>}
                                                {p.status === 'Pending' && <Badge color="bg-amber-100 text-amber-800">Pending</Badge>}
                                                {p.status === 'Sold' && <Badge color="bg-sky-100 text-sky-800">Sold</Badge>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="rounded-xl border border-sidebar-border/70 bg-white/5 p-4 shadow-sm dark:border-sidebar-border">
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold">Activity & Revenue</h3>
                            <div className="text-sm text-muted-foreground">Last 30 days overview</div>
                        </div>

                        <div className="mb-4 flex items-center justify-between">
                            <div>
                                <div className="text-sm text-muted-foreground">Estimated revenue</div>
                                <div className="text-xl font-semibold">{formatNaira(Math.floor(totalValue * 0.08))}</div>
                            </div>
                            <Sparkline points={[20, 28, 22, 40, 36, 44, 55]} />
                        </div>

                        <div className="mb-2">
                            <h4 className="text-sm font-medium">Upcoming viewings</h4>
                        </div>

                        <ul className="space-y-3">
                            <li className="flex items-start justify-between rounded-md border border-divider/50 p-3">
                                <div>
                                    <div className="font-medium">3BR Townhouse — Ikoyi</div>
                                    <div className="text-sm text-muted-foreground">Mon, 12 Feb · 2:00 PM</div>
                                </div>
                                <div className="text-sm">
                                    <Badge color="bg-emerald-100 text-emerald-800">Scheduled</Badge>
                                </div>
                            </li>
                            <li className="flex items-start justify-between rounded-md border border-divider/50 p-3">
                                <div>
                                    <div className="font-medium">Duplex — Lekki</div>
                                    <div className="text-sm text-muted-foreground">Tue, 13 Feb · 11:00 AM</div>
                                </div>
                                <div className="text-sm">
                                    <Badge color="bg-amber-100 text-amber-800">Confirmed</Badge>
                                </div>
                            </li>
                            <li className="flex items-start justify-between rounded-md border border-divider/50 p-3">
                                <div>
                                    <div className="font-medium">Luxury Apartment — VI</div>
                                    <div className="text-sm text-muted-foreground">Wed, 14 Feb · 4:00 PM</div>
                                </div>
                                <div className="text-sm">
                                    <Badge color="bg-sky-100 text-sky-800">Requires Follow-up</Badge>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Large placeholder / map / analytics panel */}
                <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-sidebar-border/70 bg-white/5 p-6 md:min-h-min dark:border-sidebar-border">
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold">Portfolio Map & Insights</h3>
                            <div className="text-sm text-muted-foreground">Quick glance of important KPIs and locations</div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="rounded-md border border-sidebar-border/60 px-3 py-1 text-sm">Filters</button>
                            <button className="rounded-md bg-primary px-3 py-1 text-sm font-medium text-white">View reports</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="col-span-2 rounded-lg border border-divider/50 p-4">
                            {/* Placeholder for Map or chart */}
                            <PlaceholderPattern className="absolute inset-0 h-full w-full rounded-md stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                            <div className="relative z-10 pointer-events-none mt-2 text-sm text-muted-foreground">Map or analytics chart goes here</div>
                        </div>

                        <div className="space-y-3 rounded-lg border border-divider/50 p-4">
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-muted-foreground">Total Properties</div>
                                <div className="text-sm font-semibold">{properties.length}</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-muted-foreground">Active</div>
                                <div className="text-sm font-semibold">{activeCount}</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-muted-foreground">Pending</div>
                                <div className="text-sm font-semibold">{pendingCount}</div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-muted-foreground">Sold</div>
                                <div className="text-sm font-semibold">{soldCount}</div>
                            </div>
                            <div className="mt-2 flex items-center justify-between border-t border-divider/40 pt-3">
                                <div className="text-sm text-muted-foreground">Top Agent</div>
                                <div className="text-sm font-semibold">Chidi Oluji</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
