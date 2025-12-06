<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>{{ $subject }}</title>
<style>
    :root{
        --bg:#f4f6f9;
        --card:#ffffff;
        --muted:#6b7280;
        --accent:#0d6efd;
        --accent-2:#0b5ed7;
        --radius:12px;
        --shadow:0 6px 24px rgba(15,23,42,0.08);
    }

    body{
        margin:0;
        padding:20px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        background:var(--bg);
        color:#111827;
    }

    .email-wrap{
        max-width:720px;
        margin:28px auto;
    }

    .card{
        background:var(--card);
        border-radius:var(--radius);
        overflow:hidden;
        box-shadow:var(--shadow);
    }

    /* Header / hero */
    .hero{
        background:linear-gradient(180deg, rgba(13,110,253,0.95), rgba(11,94,215,0.85));
        color:#fff;
        padding:28px;
        text-align:left;
    }

    .brand{
        display:flex;
        align-items:center;
        gap:12px;
        margin-bottom:10px;
    }

    .logo {
        width:52px;
        height:52px;
        background:#fff3;
        border-radius:10px;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        font-weight:700;
        color:#fff;
        font-size:18px;
    }

    .brand h2{
        margin:0;
        font-size:18px;
        letter-spacing:0.2px;
    }

    .hero h1{
        margin:8px 0 0 0;
        font-size:22px;
        line-height:1.1;
        font-weight:700;
    }

    .hero p.lead{
        margin:10px 0 0 0;
        opacity:0.95;
        color:rgba(255,255,255,0.95);
        font-size:14px;
    }

    /* Content */
    .content{
        padding:26px 28px;
        font-size:15px;
        color:#374151;
        line-height:1.6;
    }

    .cta{
        display:inline-block;
        margin-top:12px;
        padding:12px 18px;
        background:var(--accent);
        color:#fff !important;
        text-decoration:none;
        border-radius:9px;
        font-weight:600;
        box-shadow:0 6px 18px rgba(13,110,253,0.18);
    }

    /* Featured listings */
    .listings{
        display:flex;
        gap:12px;
        margin-top:18px;
        flex-wrap:wrap;
    }

    .prop{
        flex:1 1 calc(50% - 12px);
        background:#fcfdff;
        border-radius:10px;
        overflow:hidden;
        border:1px solid rgba(15,23,42,0.03);
        min-width:220px;
    }

    .prop img{
        display:block;
        width:100%;
        height:120px;
        object-fit:cover;
    }

    .prop .meta{
        padding:12px;
    }

    .prop .title{
        font-weight:600;
        font-size:14px;
        margin:0 0 6px 0;
        color:#0f172a;
    }

    .prop .price{
        color:var(--accent-2);
        font-weight:700;
        margin:0 0 8px 0;
    }

    .prop .desc{
        font-size:13px;
        color:var(--muted);
        margin-bottom:8px;
    }

    .prop a{
        display:inline-block;
        font-size:13px;
        color:var(--accent);
        text-decoration:none;
        font-weight:600;
    }

    /* Footer */
    .footer{
        background:#fbfdff;
        padding:18px;
        text-align:center;
        color:#6b7280;
        font-size:13px;
        border-top:1px solid rgba(15,23,42,0.03);
    }

    .social{
        margin-top:8px;
        display:flex;
        justify-content:center;
        gap:10px;
    }

    .social a{
        display:inline-block;
        width:36px;
        height:36px;
        border-radius:8px;
        background:#fff;
        border:1px solid rgba(15,23,42,0.04);
        text-decoration:none;
        color:var(--muted);
        font-size:14px;
        line-height:36px;
    }

    /* Responsive */
    @media (max-width:520px){
        .prop{ flex:1 1 100%; }
        .hero h1{ font-size:18px; }
    }
</style>
</head>
<body>
<div class="email-wrap">

    <div class="card">

        <div class="hero">
            <div class="brand">
                <div class="logo">{{ strtoupper(substr(config('app.name'),0,1)) }}</div>
                <div>
                    <h2>{{ config('app.name') }}</h2>
                    <div style="font-size:12px;opacity:0.95;">Estate · Properties · Investment</div>
                </div>
            </div>

            <h1>{{ $subject }}</h1>
            <p class="lead">Curated listings and updates for property seekers and investors.</p>
        </div>

        <div class="content">
            <h2 style="margin:0 0 8px 0;font-size:16px;">Contact message details</h2>
            <p style="margin:0 0 14px 0;color:var(--muted);font-size:13px;">
            A visitor submitted the contact form. See details below.
            </p>

            <table role="presentation" style="width:100%;border-collapse:collapse;margin-bottom:12px;font-size:14px;">
            <tr>
                <td style="width:120px;padding:6px 0;color:var(--muted);font-weight:600">Name</td>
                <td style="padding:6px 0;">{{ $name ?? 'N/A' }}</td>
            </tr>
            <tr>
                <td style="padding:6px 0;color:var(--muted);font-weight:600">Email</td>
                <td style="padding:6px 0;">
                @if(!empty($email))
                    <a href="mailto:{{ e($email) }}" style="color:var(--accent);text-decoration:none;">{{ $email }}</a>
                @else
                    N/A
                @endif
                </td>
            </tr>
            <tr>
                <td style="padding:6px 0;color:var(--muted);font-weight:600">Phone</td>
                <td style="padding:6px 0;">
                @if(!empty($phone))
                    <a href="tel:{{ preg_replace('/\s+/', '', e($phone)) }}" style="color:var(--accent);text-decoration:none;">{{ $phone }}</a>
                @else
                    N/A
                @endif
                </td>
            </tr>
            <tr>
                <td style="padding:6px 0;color:var(--muted);font-weight:600">Subject</td>
                <td style="padding:6px 0;">{{ $subject ?? 'N/A' }}</td>
            </tr>
            <tr>
                <td style="padding:6px 0;color:var(--muted);font-weight:600">Received</td>
                <td style="padding:6px 0;">{{ now()->toDayDateTimeString() }}</td>
            </tr>
            </table>

            <div style="padding:12px;background:#fcfdff;border-radius:8px;border:1px solid rgba(15,23,42,0.03);">
            <strong style="display:block;margin-bottom:8px;color:#0f172a;font-size:14px;">Message</strong>
            <div style="white-space:pre-wrap;color:#374151;font-size:14px;line-height:1.6;">
                {!! nl2br(e($messageContent ?? '')) !!}
            </div>
            </div>
        </div>

        <div class="footer">
            <div>© {{ date('Y') }} {{ config('app.name') }}. All rights reserved.</div>
            <div style="margin-top:6px;font-size:13px;color:var(--muted);">
             
            </div>

            <div class="social" aria-hidden="true" style="margin-top:12px;">
                <a href="{{ $settings->facebook }}" title="Facebook">f</a>
                <a href="{{ $settings->instagram }}" title="Instagram">ig</a>
                <a href="{{ $settings->linkedin }}" title="LinkedIn">in</a>
            </div>
        </div>

    </div>

</div>
</body>
</html>
